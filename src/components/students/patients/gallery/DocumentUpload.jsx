import { useState } from "react";
import { XIcon, FolderUpIcon, ImageIcon, Upload } from "lucide-react";
import DocumentTypeSelect from "../../../../utils/dropDown/DocumentTypeSelect";

const DocumentUpload = ({ onClose, onUpload }) => {
  const [files, setFiles] = useState([]);
  const [docType, setDocType] = useState("");

  const handleFileSelect = (e) => {
    setFiles([...files, ...Array.from(e.target.files)]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files.length) {
      setFiles([...files, ...Array.from(e.dataTransfer.files)]);
    }
  };

  const removeFile = (i) => {
    setFiles(files.filter((_, index) => index !== i));
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
      <div
        className="w-full max-w-lg rounded-[18px] shadow-lg overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, #f4f4f4, #dadada)",
          border: "1px solid #b9b9b9",
        }}
      >
        {/* ---------------- Header ---------------- */}
        <div
          className="flex items-center justify-between px-5 py-3"
          style={{
            background: "linear-gradient(to bottom, #fafafa, #e3e3e3)",
            borderBottom: "1px solid #c8c8c8",
          }}
        >
          <h2 className="font-semibold text-gray-800 text-lg tracking-tight">
            Upload Document
          </h2>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full active:scale-95 transition"
            style={{
              background: "linear-gradient(to bottom, #fff, #dcdcdc)",
              border: "1px solid #b6b6b6",
              boxShadow: "0 1px 2px rgba(0,0,0,0.15)",
            }}
          >
            <XIcon size={16} />
          </button>
        </div>

        {/* ---------------- Content Area ---------------- */}
        <div className="p-5 space-y-4">
          {/* Document Type */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Document Type
            </label>
            <DocumentTypeSelect
              onChange={(selected) => setDocType(selected?.value || "")}
            />
          </div>
          {/* Upload Box */}
          <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            className="text-center rounded-xl p-6 cursor-pointer transition"
            style={{
              background: "linear-gradient(#f7f7f7, #ececec)",
              border: "2px dashed #77a6ff",
            }}
          >
            <div className="text-gray-600 text-sm flex flex-col items-center gap-2">
              <ImageIcon size={30} className="opacity-70" />
              <p>Drag & drop files here</p>
              <label className="text-blue-600 underline cursor-pointer">
                Browse Files
                <input
                  type="file"
                  multiple
                  className="hidden"
                  onChange={handleFileSelect}
                />
              </label>
            </div>
          </div>
          {/* File List Preview */}
          {files.length > 0 && (
            <div className="space-y-2 max-h-36 overflow-auto">
              {files.map((file, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-3 py-2 text-sm rounded-md"
                  style={{
                    background: "linear-gradient(#fff, #ebebeb)",
                    border: "1px solid #ccc",
                  }}
                >
                  <span className="truncate">{file.name}</span>
                  <button
                    onClick={() => removeFile(i)}
                    className="text-red-500 font-bold"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ---------------- Footer Buttons ---------------- */}
        <div
          className="flex justify-end gap-3 px-5 py-3"
          style={{
            background: "linear-gradient(to bottom, #efefef, #dadada)",
            borderTop: "1px solid #c6c6c6",
          }}
        >
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg font-medium active:scale-95"
            style={{
              background: "linear-gradient(#fff, #e2e2e2)",
              border: "1px solid #b5b5b5",
            }}
          >
            Cancel
          </button>

          <button
            disabled={!files.length || !docType}
            className="px-5 py-1.5 rounded-lg font-medium text-white active:scale-95 disabled:opacity-50"
            style={{
              background: "linear-gradient(#64b1ff, #0066cc)",
              border: "1px solid rgba(0,0,0,0.2)",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.35), 0 2px 3px rgba(0,0,0,0.2)",
            }}
            onClick={() => onUpload(files, docType)}
          >
            Upload ({files.length})
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocumentUpload;
