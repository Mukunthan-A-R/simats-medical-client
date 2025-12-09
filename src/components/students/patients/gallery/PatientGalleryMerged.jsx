import { useState, useCallback, useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchAssignmentFilesMetadata } from "../../../../services/assignmentFilesService.js";
import { fetchFileByFieldId } from "../../../../services/fileService.js";
import { fetchUserFilesMetadata } from "../../../../services/fetchUserFilesMetaData.js";
import { fetchUserFileById } from "../../../../services/fetchUserFileService.js";
import PDFReader from "../page-flip/PDFReader.jsx";
import { Image, PlusIcon, XIcon } from "lucide-react";
import DocumentUpload from "./DocumentUpload.jsx";
import {
  aquaButtonStyle,
  aquaGlossEffect,
} from "../../../../utils/constants.js";
import FileSortSelect from "./FileSort/FileSortSelect.jsx";

const LIMIT = 20;

const PatientGalleryMerged = ({ assignmentId }) => {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadFile, setUploadFile] = useState(false);
  const [selectedType, setSelectedType] = useState(null); // null = show all

  // Infinite Query
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery({
    queryKey: ["mergedFiles", assignmentId],
    queryFn: async ({ pageParam = 0 }) => {
      const oldMeta = await fetchAssignmentFilesMetadata(
        assignmentId,
        LIMIT,
        pageParam
      );
      const oldFiles = await Promise.all(
        oldMeta.map(async (file) => ({
          ...file,
          url: await fetchFileByFieldId(file.file_id),
          source: "old",
        }))
      );

      const newMeta = await fetchUserFilesMetadata(
        assignmentId,
        LIMIT,
        pageParam
      );
      const newFiles = await Promise.all(
        newMeta.map(async (file) => ({
          ...file,
          url: await fetchUserFileById(file.file_id),
          source: "new",
        }))
      );

      return [...oldFiles, ...newFiles].sort(
        (a, b) => new Date(b.uploaded_at) - new Date(a.uploaded_at)
      );
    },
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || lastPage.length < LIMIT * 2) return undefined;
      return allPages.flat().length / 2;
    },
    enabled: !!assignmentId,
  });

  // Update local state when new data arrives
  useEffect(() => {
    if (!data) return;
    setFiles(data.pages.flat());
  }, [data]);

  // Infinite scroll
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

  // 🔥 FILTERING LOGIC (MAIN FIX)
  const filteredFiles = !selectedType
    ? files
    : files.filter((file) => {
        return (
          file?.type_id !== undefined &&
          Number(file.type_id) === Number(selectedType.value)
        );
      });

  // console.log("filteredFiles");
  // console.log(files);
  // console.log(filteredFiles);
  // console.log(selectedType?.value);

  if (isLoading)
    return <div className="text-center py-10 text-gray-500">Loading...</div>;

  if (error)
    return (
      <div className="text-center py-10 text-red-500">Error loading files</div>
    );

  return (
    <div className="rounded-xl shadow-sm border border-gray-200 bg-white animate-fadeIn">
      <div className="px-5 py-4 flex justify-between items-center bg-gray-100 rounded-t-xl">
        <div className="flex items-center gap-2">
          <Image size={18} className="text-blue-600" />
          <h3 className="font-medium text-gray-800 text-base">Case Records</h3>
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
              <XIcon size={12} className="mr-1.5" /> Close
            </>
          ) : (
            <>
              <PlusIcon size={12} className="mr-1.5" /> Upload
            </>
          )}
        </button>
      </div>

      {/* 🔥 FILTER SELECT */}
      <div className="p-4">
        <FileSortSelect
          onSelect={(type) => {
            // console.log("Selected Type:", type);
            setSelectedType(type);
          }}
        />
      </div>

      {filteredFiles.length === 0 && selectedType && (
        <div className="text-center py-10 text-gray-400">
          No files found for selected type
        </div>
      )}

      {/* Gallery */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        {filteredFiles.map((file) => (
          <div
            key={file.file_id + file.source}
            className="relative rounded-lg overflow-hidden shadow-md flex items-center justify-center aspect-square cursor-pointer hover:shadow-xl"
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

      {/* Modal Preview */}
      {selectedFile && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedFile(null)}
        >
          <div
            className="bg-white rounded-xl w-full max-w-6xl h-full max-h-[95vh] flex flex-col"
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
            setUploadFile(false);
          }}
          assignmentId={assignmentId}
        />
      )}
    </div>
  );
};

export default PatientGalleryMerged;
