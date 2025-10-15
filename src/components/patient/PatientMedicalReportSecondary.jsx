import {
  ClipboardListIcon,
  CheckCircleIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from "lucide-react";
import { useState } from "react";

export default function PatientMedicalReportSecondary() {
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [imageZoom, setImageZoom] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (image) => {
    setSelectedImage(image);
    setImageModalOpen(true);
  };

  const closeImageModal = () => {
    setImageModalOpen(false);
    setSelectedImage(null);
    setImageZoom(1);
  };

  const zoomInImage = () => setImageZoom((z) => Math.min(z + 0.2, 3));
  const zoomOutImage = () => setImageZoom((z) => Math.max(z - 0.2, 0.5));

  const aquaButtonStyle = "shadow-md transition transform active:scale-95";
  const aquaGlossEffect = "bg-gradient-to-b from-blue-400 to-blue-600";

  return (
    <div className="mx-auto bg-white rounded-lg shadow-md p-6 text-gray-800">
      {/* Findings */}
      <div className="mb-4">
        <h4 className="font-medium text-gray-800 mb-2 pb-1 border-b border-gray-200 flex items-center text-sm">
          <ClipboardListIcon size={14} className="mr-1 text-blue-600" />
          Findings and Parameters
        </h4>
        <div className="overflow-x-auto">
          <div className="grid grid-cols-1 gap-2">
            <div
              className="p-2 rounded-lg"
              style={{
                backgroundColor: "rgba(255,250,230,0.7)",
                border: "1px solid rgba(0,0,0,0.1)",
              }}
            >
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Cholesterol (Total)</span>
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${aquaButtonStyle} ${aquaGlossEffect}`}
                  style={{
                    background: "linear-gradient(to bottom, #ff9500, #ff5e3a)",
                    boxShadow:
                      "0 1px 2px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)",
                    border: "1px solid rgba(0,0,0,0.2)",
                    color: "white",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "20px",
                  }}
                >
                  Elevated
                </span>
              </div>
              <div className="mt-1 flex justify-between">
                <span className="text-sm font-medium text-gray-900">
                  220 mg/dL
                </span>
                <span className="text-xs text-gray-500">
                  Ref: &lt;200 mg/dL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Diagnosis & Recommendations */}
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <h4 className="font-medium text-gray-800 mb-2 pb-1 border-b border-gray-200 text-sm">
            Diagnosis
          </h4>
          <p className="text-sm text-gray-700">
            Mild hypercholesterolemia detected based on lipid profile results.
          </p>
        </div>
        <div>
          <h4 className="font-medium text-gray-800 mb-2 pb-1 border-b border-gray-200 text-sm">
            Recommendations
          </h4>
          <p className="text-sm text-gray-700">
            Maintain a balanced diet low in saturated fats. Increase physical
            activity. Follow-up test in 3 months.
          </p>
        </div>
      </div>

      {/* Evaluation */}
      <div className="mb-4 bg-blue-50 p-3 rounded-lg">
        <h4 className="font-medium text-gray-800 mb-2 pb-1 border-b border-blue-100 flex items-center text-sm">
          <CheckCircleIcon size={14} className="mr-1 text-blue-600" />
          Evaluation by Dr. Emily Rodriguez
        </h4>
        <p className="text-sm text-gray-700">
          The patient's lipid levels are slightly above normal range. Lifestyle
          modification is advised; no immediate medication required.
        </p>
      </div>

      {/* Notes */}
      <div className="mb-4">
        <h4 className="font-medium text-gray-800 mb-2 pb-1 border-b border-gray-200 text-sm">
          Additional Notes
        </h4>
        <p className="text-sm text-gray-700">
          No known allergies. Non-smoker. Family history of high cholesterol.
        </p>
      </div>

      {/* Signatures */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div>
          <div className="h-12 border-b border-gray-400 mb-1"></div>
          <p className="text-sm font-medium">Lab Tech Jennifer Lee</p>
          <p className="text-xs text-gray-500">Performed By</p>
        </div>
        <div>
          <div className="h-12 border-b border-gray-400 mb-1"></div>
          <p className="text-sm font-medium">Dr. Emily Rodriguez</p>
          <p className="text-xs text-gray-500">Verified By</p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-3 border-t border-gray-200 text-center">
        <p className="text-xs text-gray-500">
          This is an official medical report from Saveetha Medical College
          Hospital.
        </p>
        <p className="text-xs text-gray-500">
          For inquiries: records@saveethamedical.com
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Generated on: {new Date().toLocaleString()}
        </p>
      </div>

      {/* =================== IMAGE MODAL =================== */}
      {imageModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-3 print:hidden">
          <div className="relative w-full max-w-lg">
            <div
              className="mb-2 p-2 rounded-t-lg flex items-center"
              style={{
                backgroundImage: "linear-gradient(to bottom, #f0f4fa, #d5dde8)",
                border: "1px solid rgba(0,0,0,0.2)",
                borderBottom: "none",
              }}
            >
              <div className="flex mr-3">
                <button
                  onClick={closeImageModal}
                  className="w-3 h-3 rounded-full"
                  style={{
                    background: "linear-gradient(to bottom, #ff5a5a, #cc0000)",
                    border: "1px solid rgba(100,0,0,0.4)",
                  }}
                />
              </div>
              <div className="flex-1 text-center">
                <h3 className="text-sm font-medium text-gray-800">
                  {selectedImage.title}
                </h3>
              </div>
              <div className="w-3" />
            </div>

            <div
              className="overflow-hidden rounded-b-lg"
              style={{
                backgroundColor: "#1e1e1e",
                border: "1px solid rgba(0,0,0,0.3)",
              }}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full transform transition-transform duration-200 ease-in-out"
                style={{ transform: `scale(${imageZoom})` }}
              />
              <div className="p-2 text-xs text-gray-300 bg-gray-800 border-t border-gray-700">
                {selectedImage.description}
              </div>
            </div>

            <div className="flex justify-center mt-3 space-x-4">
              <button
                onClick={zoomOutImage}
                className={`p-2 rounded-full ${aquaButtonStyle} ${aquaGlossEffect}`}
                disabled={imageZoom <= 0.5}
                style={{
                  background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
                  opacity: imageZoom <= 0.5 ? 0.5 : 1,
                }}
              >
                <ZoomOutIcon size={18} className="text-white" />
              </button>
              <button
                onClick={zoomInImage}
                className={`p-2 rounded-full ${aquaButtonStyle} ${aquaGlossEffect}`}
                disabled={imageZoom >= 3}
                style={{
                  background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
                  opacity: imageZoom >= 3 ? 0.5 : 1,
                }}
              >
                <ZoomInIcon size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Example image thumbnail */}
      <div className="mt-4 flex justify-center">
        <img
          src="https://via.placeholder.com/100"
          alt="Cholesterol Chart"
          onClick={() =>
            openImageModal({
              title: "Cholesterol Chart",
              description:
                "Graphical representation of patient's lipid profile.",
              url: "https://via.placeholder.com/100",
            })
          }
          className="cursor-pointer rounded border border-gray-300 hover:opacity-80 transition"
        />
      </div>
    </div>
  );
}
