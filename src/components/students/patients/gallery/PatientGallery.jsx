import React, { useState, useEffect, useCallback } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchAssignmentFilesMetadata } from "../../../../services/assignmentFilesService.js";
import { fetchFileByFieldId } from "../../../../services/fileService.js";

const LIMIT = 20;

const PatientGallery = ({ assignmentId }) => {
  const [files, setFiles] = useState([]);

  // ---------------- Infinite Query ----------------
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery({
    queryKey: ["assignmentFiles", assignmentId],
    queryFn: async ({ pageParam = 0 }) => {
      return fetchAssignmentFilesMetadata(assignmentId, LIMIT, pageParam);
    },
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || lastPage.length < LIMIT) return undefined;
      return allPages.flat().length;
    },
    enabled: !!assignmentId,
  });

  // ---------------- Convert metadata to file URLs ----------------
  useEffect(() => {
    if (!data) return;

    data.pages.forEach((page) => {
      Promise.all(
        page.map(async (meta) => {
          const url = await fetchFileByFieldId(meta.file_id);
          return { ...meta, url };
        })
      ).then((pageFiles) => {
        setFiles((prev) => [...prev, ...pageFiles]);
      });
    });
  }, [data]);

  // ---------------- Infinite scroll ----------------
  const handleScroll = useCallback(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 100) {
      if (hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  if (isLoading)
    return (
      <div className="text-center py-10 font-semibold text-gray-500">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="text-center py-10 font-semibold text-red-500">
        Error loading files
      </div>
    );
  if (!isLoading && files.length === 0)
    return (
      <div className="text-center py-10 text-gray-400">
        No related documents for now.
      </div>
    );

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      {files.map((file) => (
        <div
          key={file.file_id}
          className="relative rounded-lg overflow-hidden shadow-md bg-white hover:shadow-xl transition-shadow duration-300 flex items-center justify-center aspect-square"
        >
          {["jpeg", "jpg", "png"].includes(file.extension) && file.url ? (
            <img
              src={file.url}
              alt={file.filename}
              className="w-full h-full object-cover"
            />
          ) : ["pdf"].includes(file.extension) && file.url ? (
            <a
              href={file.url}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center justify-center text-sm text-gray-700 p-2"
            >
              📄 {file.filename}
            </a>
          ) : file.url ? (
            <a
              href={file.url}
              download
              className="flex flex-col items-center justify-center text-sm text-gray-700 p-2"
            >
              📄 {file.filename}
            </a>
          ) : (
            <div className="bg-gray-200 animate-pulse w-full h-full"></div>
          )}
        </div>
      ))}
      {isFetchingNextPage && (
        <div className="col-span-full text-center py-4 text-gray-500 font-medium">
          Loading more...
        </div>
      )}
    </div>
  );
};

export default PatientGallery;
