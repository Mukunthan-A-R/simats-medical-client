import { useState, useEffect, useCallback } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchAssignmentFilesMetadata } from "../../../../services/assignmentFilesService.js";
import { fetchFileByFieldId } from "../../../../services/fileService.js";
import PDFReader from "../page-flip/PDFReader.jsx";
import { Image, PlusIcon, XIcon } from "lucide-react";
import {
  aquaButtonStyle,
  aquaGlossEffect,
} from "../../../../utils/constants.js";
import DocumentUpload from "./DocumentUpload.jsx";
import PatientGalleryTest from "./PatientGalleryTest.jsx";

const LIMIT = 20;

const PatientGallery = ({ assignmentId }) => {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadFile, setUploadFile] = useState(false);

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

  useEffect(() => {
    if (!data) return;

    data.pages.forEach((page) => {
      Promise.all(
        page.map(async (meta) => {
          const url = await fetchFileByFieldId(meta.file_id);
          return { ...meta, url };
        })
      ).then((pageFiles) => setFiles((prev) => [...prev, ...pageFiles]));
    });
  }, [data]);

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
    <div className="rounded-xl shadow-sm border border-gray-200 bg-white animate-fadeIn">
      {/* Gallery */}

      <div className="px-5 py-4 bg-linear-to-b from-gray-100 to-gray-200 shadow-inner flex flex-col rounded-t-xl">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Image size={18} className="text-blue-600" />
            <h3 className="font-medium text-gray-800 text-base">
              Case Records
            </h3>
          </div>
          <button
            className={`px-3 py-1.5 rounded-md text-xs font-medium ${aquaButtonStyle} ${aquaGlossEffect} flex items-center`}
            style={{
              background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
              border: "1px solid rgba(0,0,0,0.2)",
              boxShadow:
                "0 2px 4px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.4)",
              color: "white",
            }}
            onClick={() => setUploadFile(!uploadFile)}
          >
            {uploadFile ? (
              <>
                <XIcon size={12} className="mr-1.5" />
                Close
              </>
            ) : (
              <>
                <PlusIcon size={12} className="mr-1.5" />
                Upload
              </>
            )}
          </button>
        </div>
      </div>
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
      </div>
      <PatientGalleryTest assignmentId={assignmentId}></PatientGalleryTest>

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
      {uploadFile && (
        <DocumentUpload
          onClose={() => setUploadFile(false)}
          onUpload={(file, type) => {
            console.log("Uploading:", file, "Type:", type);
            // TODO integrate API
            setUploadFile(false);
          }}
        />
      )}
    </div>
  );
};

export default PatientGallery;
