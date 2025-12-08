import { useState, useEffect, useCallback } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchUserFilesMetadata } from "../../../../services/fetchUserFilesMetaData.js";
import { fetchUserFileById } from "../../../../services/fetchUserFileService.js";
import PDFReader from "../page-flip/PDFReader.jsx";
import { Image } from "lucide-react";

const LIMIT = 20;

const PatientGalleryTest = ({ assignmentId }) => {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery({
    queryKey: ["userFiles", assignmentId],
    queryFn: async ({ pageParam = 0 }) => {
      const metadata = await fetchUserFilesMetadata(
        assignmentId,
        LIMIT,
        pageParam
      );
      // Fetch URLs for each file
      const filesWithUrl = await Promise.all(
        metadata.map(async (file) => {
          const url = await fetchUserFileById(file.file_id);
          return { ...file, url };
        })
      );
      return filesWithUrl;
    },
    getNextPageParam: (lastPage, allPages) => {
      // lastPage must be an array
      if (!lastPage || !Array.isArray(lastPage) || lastPage.length < LIMIT)
        return undefined;
      return allPages.flat().length; // offset for next page
    },
    enabled: !!assignmentId,
  });

  console.log(data);

  // Flatten pages into files state
  useEffect(() => {
    if (!data) return;

    const allFiles = data.pages.flat();
    // Sort by uploaded_at descending
    allFiles.sort((a, b) => new Date(b.uploaded_at) - new Date(a.uploaded_at));
    setFiles(allFiles);
  }, [data]);

  // Infinite scroll handler
  const handleScroll = useCallback(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 100) {
      if (hasNextPage && !isFetchingNextPage) fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  if (isLoading)
    return (
      <div className="text-center py-10 text-gray-500 font-semibold">
        Loading files...
      </div>
    );

  if (error)
    return (
      <div className="text-center py-10 text-red-500 font-semibold">
        Error loading files
      </div>
    );

  if (!isLoading && files.length === 0)
    return (
      <div className="text-center py-10 text-gray-400">No files found.</div>
    );

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 bg-white">
      {files.map((file) => (
        <div
          key={file.file_id}
          className="relative rounded-lg overflow-hidden shadow-md bg-white hover:shadow-xl transition-shadow duration-300 flex items-center justify-center aspect-square cursor-pointer"
          onClick={() => setSelectedFile(file)}
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
          ) : (
            <div className="flex flex-col items-center justify-center text-sm text-gray-700 p-2">
              📄 {file.filename}
            </div>
          )}
        </div>
      ))}

      {isFetchingNextPage && (
        <div className="col-span-full text-center py-4 text-gray-500 font-medium">
          Loading more...
        </div>
      )}

      {/* File Modal */}
      {selectedFile && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedFile(null)}
        >
          <div
            className="bg-white rounded-xl overflow-hidden w-full max-w-6xl h-full max-h-[95vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
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

            <div className="flex-1 flex items-center justify-center bg-gray-50 p-4 overflow-auto">
              {["jpeg", "jpg", "png"].includes(selectedFile.extension) ? (
                <img
                  src={selectedFile.url}
                  alt={selectedFile.filename}
                  className="max-h-full max-w-full object-contain"
                />
              ) : selectedFile.extension === "pdf" ? (
                <PDFReader pdfUrl={selectedFile.url} />
              ) : (
                <p className="text-gray-500">Cannot preview this file type.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientGalleryTest;
