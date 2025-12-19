import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchFileByFieldId } from "../../../../services/fileService";

const CaseRecordFilesViewer = ({ fileIds = [], isOpen }) => {
  const [previewUrl, setPreviewUrl] = useState(null);

  const { data: files, isLoading } = useQuery({
    queryKey: ["caseRecordFiles", fileIds],
    queryFn: async () => {
      const results = await Promise.all(
        fileIds.map(async (id) => {
          const fileUrl = await fetchFileByFieldId(id);
          return { fileUrl };
        })
      );
      return results;
    },
    enabled: isOpen && fileIds.length > 0,
    staleTime: Infinity,
  });

  if (!fileIds || fileIds.length === 0) return null;

  return (
    <div className="mt-5">
      <h3 className="text-md font-semibold mb-2">Attachments</h3>

      {isLoading && <p>Loading files...</p>}

      {!isLoading && files && (
        <div className="flex flex-wrap gap-4">
          {files.map((file, idx) => {
            const url = file.fileUrl;
            const isPdf = url.includes("pdf");

            return (
              <div
                key={idx}
                className="border border-gray-400 rounded-xl p-2 bg-gray-50 shadow-sm shrink-0"
                style={{ width: 250 }}
              >
                {/* IMAGE PREVIEW */}
                {!isPdf && (
                  <img
                    src={url}
                    onClick={() => setPreviewUrl(url)}
                    alt="case-file"
                    className="rounded-md shadow w-full h-32 object-cover cursor-pointer hover:opacity-80 transition"
                  />
                )}

                {/* PDF PREVIEW */}
                {isPdf && (
                  <iframe
                    src={url}
                    className="w-full h-40 rounded shadow"
                    title={`pdf-${idx}`}
                  ></iframe>
                )}

                {/* Download Button */}
                <a
                  href={url}
                  download
                  className="text-blue-600 text-sm underline block mt-2 text-center"
                >
                  Download
                </a>
              </div>
            );
          })}
        </div>
      )}

      {/* FULLSCREEN LIGHTBOX */}
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

export default CaseRecordFilesViewer;
