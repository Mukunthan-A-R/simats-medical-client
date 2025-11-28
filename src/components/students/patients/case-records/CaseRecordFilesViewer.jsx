import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchFileByFieldId } from "../../../../services/fileService";

const CaseRecordFilesViewer = ({ fileIds = [], isOpen }) => {
  // Fetch files ONLY when the record is opened
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
    enabled: isOpen && fileIds.length > 0, // fetch only if opened
    staleTime: Infinity,
  });

  if (!fileIds || fileIds.length === 0) return null;

  return (
    <div className="mt-4">
      <h3 className="text-md font-semibold mb-2">Attached Files</h3>

      {isLoading && <p>Loading files...</p>}

      {/* Show Images / PDF */}
      {!isLoading && files && (
        <div className="grid grid-cols-2 gap-4">
          {files.map((file, idx) => {
            const url = file.fileUrl;

            // Identify PDF vs image
            const isPdf = url.includes("pdf");

            return (
              <div key={idx} className="border rounded p-2 bg-gray-50">
                {isPdf ? (
                  <iframe
                    src={url}
                    title={`pdf-${idx}`}
                    className="w-full h-48 rounded"
                  ></iframe>
                ) : (
                  <img
                    src={url}
                    alt="case attachment"
                    className="rounded-md shadow w-full h-auto"
                  />
                )}

                <a
                  href={url}
                  download
                  className="text-blue-600 text-sm underline block mt-2"
                >
                  Download File
                </a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CaseRecordFilesViewer;
