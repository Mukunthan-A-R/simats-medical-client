import { CreditCardIcon, PlusIcon, TrashIcon } from "lucide-react";
import React, { useState } from "react";

const PatientProfileInsurance = ({ aquaButtonStyle, aquaGlossEffect }) => {
  const [showAddInsurance, setShowAddInsurance] = useState(false);
  const [newInsurance, setNewInsurance] = useState({
    provider: "",
    policyNumber: "",
    validUntil: "",
  });
  const [insuranceIds, setInsuranceIds] = useState([
    {
      id: 1,
      provider: "Apollo Health Insurance",
      policyNumber: "APL-2023-78945",
      validUntil: "31 Dec 2024",
    },
    {
      id: 2,
      provider: "Star Health Insurance",
      policyNumber: "SHI-5678-9012",
      validUntil: "15 Mar 2025",
    },
  ]);

  return (
    <>
      <div
        className="rounded-xl overflow-hidden shadow-md mb-6"
        style={{
          backgroundColor: "white",
          boxShadow: "0 2px 6px rgba(0,0,0,0.08), 0 0 1px rgba(0,0,0,0.2)",
          border: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <div
          className="px-4 py-3 border-b flex items-center justify-between"
          style={{
            backgroundImage: "linear-gradient(to bottom, #f8f9fb, #d9e1ea)",
            boxShadow:
              "0 1px 0 rgba(255,255,255,0.8) inset, 0 1px 0 rgba(0,0,0,0.1)",
            borderBottom: "1px solid rgba(0,0,0,0.1)",
          }}
        >
          <div className="flex items-center">
            <CreditCardIcon size={16} className="text-blue-600 mr-2" />
            <h3
              className="font-medium text-gray-800"
              style={{
                textShadow: "0 1px 0 rgba(255,255,255,0.5)",
              }}
            >
              Insurance Information
            </h3>
          </div>
          <button
            onClick={() => setShowAddInsurance(!showAddInsurance)}
            className={`px-2.5 py-1 rounded-md text-xs flex items-center ${aquaButtonStyle} ${aquaGlossEffect}`}
            style={{
              background: "linear-gradient(to bottom, #f0f4fa, #d5dde8)",
              border: "1px solid rgba(0,0,0,0.2)",
              boxShadow:
                "0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)",
            }}
          >
            {showAddInsurance ? (
              <span className="text-blue-700 font-medium">Cancel</span>
            ) : (
              <>
                <PlusIcon size={12} className="mr-1 text-blue-700" />
                <span className="text-blue-700 font-medium">Add</span>
              </>
            )}
          </button>
        </div>
        {showAddInsurance && (
          <div
            className="p-4 border-b"
            style={{
              backgroundColor: "rgba(243,244,246,0.6)",
              borderBottom: "1px solid rgba(0,0,0,0.1)",
            }}
          >
            <div className="space-y-3">
              <div>
                <label
                  className="block text-sm text-gray-600 mb-1"
                  style={{
                    textShadow: "0 1px 0 rgba(255,255,255,0.5)",
                  }}
                >
                  Insurance Provider
                </label>
                <div
                  style={{
                    boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
                    border: "1px solid rgba(0,0,0,0.2)",
                    borderRadius: "0.375rem",
                    backgroundColor: "rgba(255,255,255,0.8)",
                  }}
                >
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-transparent outline-none text-gray-700"
                    placeholder="Provider name"
                    value={newInsurance.provider}
                    onChange={(e) =>
                      setNewInsurance({
                        ...newInsurance,
                        provider: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-sm text-gray-600 mb-1"
                  style={{
                    textShadow: "0 1px 0 rgba(255,255,255,0.5)",
                  }}
                >
                  Policy Number
                </label>
                <div
                  style={{
                    boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
                    border: "1px solid rgba(0,0,0,0.2)",
                    borderRadius: "0.375rem",
                    backgroundColor: "rgba(255,255,255,0.8)",
                  }}
                >
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-transparent outline-none text-gray-700"
                    placeholder="Policy number"
                    value={newInsurance.policyNumber}
                    onChange={(e) =>
                      setNewInsurance({
                        ...newInsurance,
                        policyNumber: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-sm text-gray-600 mb-1"
                  style={{
                    textShadow: "0 1px 0 rgba(255,255,255,0.5)",
                  }}
                >
                  Valid Until
                </label>
                <div
                  style={{
                    boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
                    border: "1px solid rgba(0,0,0,0.2)",
                    borderRadius: "0.375rem",
                    backgroundColor: "rgba(255,255,255,0.8)",
                  }}
                >
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-transparent outline-none text-gray-700"
                    placeholder="DD MMM YYYY"
                    value={newInsurance.validUntil}
                    onChange={(e) =>
                      setNewInsurance({
                        ...newInsurance,
                        validUntil: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <button
                onClick={handleAddInsurance}
                className={`w-full py-2 rounded-md text-white text-sm font-medium ${aquaButtonStyle} ${aquaGlossEffect}`}
                style={{
                  background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
                  boxShadow:
                    "0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)",
                  border: "1px solid rgba(0,0,0,0.2)",
                }}
              >
                Add Insurance
              </button>
            </div>
          </div>
        )}
        <div>
          {insuranceIds.map((insurance) => (
            <div
              key={insurance.id}
              className="p-4 border-b last:border-b-0 transition-colors hover:bg-gray-50"
              style={{
                borderBottom: "1px solid rgba(0,0,0,0.05)",
              }}
            >
              <div className="flex items-start">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${aquaButtonStyle} ${aquaGlossEffect}`}
                  style={{
                    background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
                    boxShadow:
                      "0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)",
                    border: "1px solid rgba(0,0,0,0.2)",
                  }}
                >
                  <CreditCardIcon size={14} className="text-white" />
                </div>
                <div className="flex-1">
                  <span className="text-gray-800 font-medium">
                    {insurance.provider}
                  </span>
                  <div className="flex justify-between items-center mt-1">
                    <div>
                      <p className="text-sm text-gray-600">
                        Policy: {insurance.policyNumber}
                      </p>
                      <p className="text-xs text-gray-500">
                        Valid until: {insurance.validUntil}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDeleteInsurance(insurance.id)}
                      className={`w-7 h-7 rounded-full flex items-center justify-center ${aquaButtonStyle}`}
                      style={{
                        background:
                          "linear-gradient(to bottom, #fee2e2, #fca5a5)",
                        border: "1px solid rgba(220,38,38,0.3)",
                        boxShadow:
                          "0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.7)",
                      }}
                    >
                      <TrashIcon size={14} className="text-red-700" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {insuranceIds.length === 0 && (
            <div
              className="p-6 text-center"
              style={{
                backgroundColor: "rgba(249,250,251,0.7)",
              }}
            >
              <div
                className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(to bottom, #e5e7eb, #d1d5db)",
                  boxShadow:
                    "0 1px 3px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.7)",
                  border: "1px solid rgba(0,0,0,0.1)",
                }}
              >
                <AlertCircleIcon size={24} className="text-gray-400" />
              </div>
              <p
                className="text-gray-500"
                style={{
                  textShadow: "0 1px 0 rgba(255,255,255,0.5)",
                }}
              >
                No insurance information added yet
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PatientProfileInsurance;

const handleAddInsurance = () => {
  if (
    newInsurance.provider &&
    newInsurance.policyNumber &&
    newInsurance.validUntil
  ) {
    setInsuranceIds([
      ...insuranceIds,
      {
        id: Date.now(),
        provider: newInsurance.provider,
        policyNumber: newInsurance.policyNumber,
        validUntil: newInsurance.validUntil,
      },
    ]);
    setNewInsurance({
      provider: "",
      policyNumber: "",
      validUntil: "",
    });
    setShowAddInsurance(false);
  }
};
