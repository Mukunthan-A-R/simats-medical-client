import { BuildingIcon } from "lucide-react";
import React from "react";

const PatientDiagnosisFooter = ({ selectedDischargeSummary }) => {
  return (
    <>
      {selectedDischargeSummary.dischargeSummary &&
        selectedDischargeSummary.dischargeSummary.signatures && (
          <div className="bg-white p-5 rounded-lg border border-gray-200 mb-6">
            <h4 className="font-medium text-gray-800 mb-3 pb-2 border-b border-gray-200">
              Signatures
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-medium mb-2">
                  Discharging Physician:
                </p>
                <p className="text-sm">
                  {
                    selectedDischargeSummary.dischargeSummary.signatures
                      .dischargingPhysician.name
                  }
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  Date:{" "}
                  {
                    selectedDischargeSummary.dischargeSummary.signatures
                      .dischargingPhysician.date
                  }
                </p>
                <div className="h-16 bg-gray-50 rounded-md flex items-center justify-center overflow-hidden">
                  <img
                    src={
                      selectedDischargeSummary.dischargeSummary.signatures
                        .dischargingPhysician.signature
                    }
                    alt="Discharging Physician Signature"
                    className="h-12 object-contain"
                  />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium mb-2">Attending Physician:</p>
                <p className="text-sm">
                  {
                    selectedDischargeSummary.dischargeSummary.signatures
                      .attendingPhysician.name
                  }
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  Date:{" "}
                  {
                    selectedDischargeSummary.dischargeSummary.signatures
                      .attendingPhysician.date
                  }
                </p>
                <div className="h-16 bg-gray-50 rounded-md flex items-center justify-center overflow-hidden">
                  <img
                    src={
                      selectedDischargeSummary.dischargeSummary.signatures
                        .attendingPhysician.signature
                    }
                    alt="Attending Physician Signature"
                    className="h-12 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      {/* Footer */}
      <div className="mt-10 pt-5 border-t border-gray-200 text-center mb-4">
        <div className="flex items-center justify-center mb-2">
          <BuildingIcon size={16} className="text-gray-400 mr-2" />
          <p
            className="text-sm text-gray-500"
            style={{
              textShadow: "none",
            }}
          >
            Saveetha Medical College Hospital, Saveetha Nagar, Thandalam,
            Chennai 600077
          </p>
        </div>
        <p
          className="text-xs text-gray-500"
          style={{
            textShadow: "none",
          }}
        >
          This is an official discharge summary from Saveetha Medical College
          Hospital.
        </p>
        <p
          className="text-xs text-gray-500 mt-1"
          style={{
            textShadow: "none",
          }}
        >
          For any inquiries, please contact our medical records department at
          records@saveethamedical.com
        </p>
        <p
          className="text-xs text-gray-500 mt-1"
          style={{
            textShadow: "none",
          }}
        >
          Document generated on: {new Date().toLocaleString()}
        </p>
      </div>
    </>
  );
};

export default PatientDiagnosisFooter;
