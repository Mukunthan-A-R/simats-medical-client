import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchFileByFieldId } from "../../../../services/fileService";

const DoctorCaseRecordFileReader = ({ fileIds = [] }) => {
  const [previewUrl, setPreviewUrl] = useState(null);

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

  return (
    <div className="my-2">
      <h3 className="text-sm font-semibold mb-2">Attachments</h3>
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {files.map((file, idx) => {
          const url = file.fileUrl;
          const isPdf = url.includes("pdf");

          return (
            <div
              key={idx}
              className="flex-shrink-0 w-32 h-32 border border-gray-300 rounded-md bg-gray-50 relative cursor-pointer"
            >
              {!isPdf && (
                <img
                  src={url}
                  alt={`file-${idx}`}
                  className="w-full h-full object-cover rounded-md"
                  onClick={() => setPreviewUrl(url)}
                />
              )}

              {isPdf && (
                <div className="flex flex-col items-center justify-center h-full">
                  <p className="text-xs text-gray-600">PDF</p>
                  <a
                    href={url}
                    download
                    className="text-blue-600 text-xs underline mt-1"
                  >
                    Download
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Fullscreen Preview */}
      {previewUrl && (
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
    </div>
  );
};

export default DoctorCaseRecordFileReader;
