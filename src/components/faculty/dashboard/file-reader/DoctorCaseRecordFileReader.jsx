import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchFileByFieldId } from "../../../../services/fileService";
import PDFReader from "../../../students/patients/page-flip/PDFReader";

const DoctorCaseRecordFileReader = ({ fileIds = [] }) => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isPdf, setIsPdf] = useState(false);

  const { data: files, isLoading } = useQuery({
    queryKey: ["doctorCaseRecordFiles", fileIds],
    queryFn: async () => {
      const results = await Promise.all(
        fileIds.map(async (id) => {
          const fileUrl = await fetchFileByFieldId(id);
          return { fileUrl };
        })
      );
      return results;
    },
    enabled: fileIds.length > 0,
    staleTime: Infinity,
  });

  if (!fileIds || fileIds.length === 0) return null;
  if (isLoading) return <p>Loading files...</p>;

  const handleClick = (url) => {
    if (url.includes(".pdf")) {
      setPreviewUrl(url);
      setIsPdf(true);
    } else {
      setPreviewUrl(url);
      setIsPdf(false);
    }
  };

  return (
    <div className="my-2">
      <h3 className="text-sm font-semibold mb-2">Attachments</h3>
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {files.map((file, idx) => {
          const url = file.fileUrl;
          const fileIsPdf = url.includes(".pdf");

          return (
            <div
              key={idx}
              className="flex-shrink-0 w-32 h-32 border border-gray-300 rounded-md bg-gray-50 relative cursor-pointer"
              onClick={() => handleClick(url)}
            >
              {!fileIsPdf && (
                <img
                  src={url}
                  alt={`file-${idx}`}
                  className="w-full h-full object-cover rounded-md"
                />
              )}
              {fileIsPdf && (
                <div className="flex flex-col items-center justify-center h-full">
                  <p className="text-xs text-gray-600 truncate">PDF</p>
                  <p className="text-xs text-gray-700 truncate text-center">
                    {`File ${idx + 1}`}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Fullscreen Preview */}
      {previewUrl && !isPdf && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setPreviewUrl(null)}
        >
          <img
            src={previewUrl}
            alt="preview"
            className="max-w-[90%] max-h-[90%] rounded shadow-lg"
          />
        </div>
      )}

      {/* PDF Reader Modal */}
      {previewUrl && isPdf && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setPreviewUrl(null)}
        >
          <div
            className="bg-white rounded-xl overflow-hidden w-full max-w-6xl h-full max-h-[95vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <PDFReader pdfUrl={previewUrl} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorCaseRecordFileReader;
