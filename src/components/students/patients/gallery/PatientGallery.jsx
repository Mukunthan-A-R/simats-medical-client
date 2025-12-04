import React, { useState, useEffect, useCallback } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchAssignmentFilesMetadata } from "../../../../services/assignmentFilesService.js";
import { fetchFileByFieldId } from "../../../../services/fileService.js";

const LIMIT = 20;

const PatientGallery = ({ assignmentId }) => {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null); // unified popup

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
    <>
      {/* ---------------- Gallery ---------------- */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        {files.map((file) => (
          <div
            key={file.file_id}
            className="relative rounded-lg overflow-hidden shadow-md bg-white hover:shadow-xl transition-shadow duration-300 flex items-center justify-center aspect-square cursor-pointer"
            onClick={() => setSelectedFile(file)} // open modal
          >
            {["jpeg", "jpg", "png"].includes(file.extension) && file.url ? (
              <img
                src={file.url}
                alt={file.filename}
                className="w-full h-full object-cover"
              />
            ) : ["pdf"].includes(file.extension) && file.url ? (
              <div className="flex flex-col items-center justify-center text-sm text-gray-700 p-2">
                📄 {file.filename}
              </div>
            ) : file.url ? (
              <div className="flex flex-col items-center justify-center text-sm text-gray-700 p-2">
                📄 {file.filename}
              </div>
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

      {/* ---------------- File Modal ---------------- */}
      {selectedFile && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setSelectedFile(null)} // close when clicking outside
        >
          <div
            className="bg-white rounded-xl overflow-hidden w-[90%] max-w-4xl h-[90%] flex flex-col"
            onClick={(e) => e.stopPropagation()} // prevent modal close on inner click
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="font-semibold text-gray-800">
                {selectedFile.filename}
              </h2>
              <button
                onClick={() => setSelectedFile(null)}
                className="text-gray-500 hover:text-gray-800 font-bold text-lg"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center bg-gray-50 p-4">
              {["jpeg", "jpg", "png"].includes(selectedFile.extension) ? (
                <img
                  src={selectedFile.url}
                  alt={selectedFile.filename}
                  className="max-h-full max-w-full object-contain"
                />
              ) : selectedFile.extension === "pdf" ? (
                <iframe
                  src={selectedFile.url}
                  title={selectedFile.filename}
                  className="w-full h-full"
                />
              ) : (
                <p className="text-gray-500">Cannot preview this file type.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PatientGallery;
