import React from "react";

const PatientDiagnosisComplaints = ({ selectedDischargeSummary }) => {
  return (
    <>
      {/* Clinical Information */}
      {selectedDischargeSummary.dischargeSummary && (
        <div className="bg-white p-5 rounded-lg mb-6">
          {/* Diagnosis and Complaints */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 mb-6">
            <h4 className="font-medium text-gray-800 mb-3 pb-2 border-b border-gray-200">
              Diagnosis & Complaints
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium mb-1">Discharge Diagnosis:</p>
                <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-md">
                  {selectedDischargeSummary.dischargeSummary.dischargeDiagnosis}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium mb-1">Chief Complaints:</p>
                <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-md">
                  {selectedDischargeSummary.dischargeSummary.chiefComplaints}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium mb-1">
                  History of Present Illness:
                </p>
                <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-md">
                  {
                    selectedDischargeSummary.dischargeSummary
                      .historyOfPresentIllness
                  }
                </p>
              </div>
              <div>
                <p className="text-sm font-medium mb-1">
                  Past Medical History:
                </p>
                <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-md">
                  {selectedDischargeSummary.dischargeSummary.pastMedicalHistory}
                </p>
              </div>
            </div>
          </div>
          {/* Hospital Course */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 mb-6">
            <h4 className="font-medium text-gray-800 mb-3 pb-2 border-b border-gray-200">
              Hospital Course
            </h4>
            <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-md">
              {selectedDischargeSummary.dischargeSummary.hospitalCourse}
            </p>
          </div>
          {/* Medications */}
          {selectedDischargeSummary.dischargeSummary.dischargeMedications &&
            selectedDischargeSummary.dischargeSummary.dischargeMedications
              .length > 0 && (
              <div className="bg-white p-5 rounded-lg border border-gray-200 mb-6">
                <h4 className="font-medium text-gray-800 mb-3 pb-2 border-b border-gray-200">
                  Discharge Medications
                </h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Medication
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Dosage
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Frequency
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Duration
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {selectedDischargeSummary.dischargeSummary.dischargeMedications.map(
                        (med, index) => (
                          <tr
                            key={index}
                            className={
                              index % 2 === 0 ? "bg-gray-50" : "bg-white"
                            }
                          >
                            <td className="px-4 py-3 text-sm text-gray-700">
                              {med.name}
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-700">
                              {med.dosage}
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-700">
                              {med.frequency}
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-700">
                              {med.duration || "As directed"}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          {/* Procedures */}
          {selectedDischargeSummary.dischargeSummary.procedures &&
            selectedDischargeSummary.dischargeSummary.procedures.length > 0 && (
              <div className="bg-white p-5 rounded-lg border border-gray-200 mb-6">
                <h4 className="font-medium text-gray-800 mb-3 pb-2 border-b border-gray-200">
                  Procedures Performed
                </h4>
                <div className="space-y-4">
                  {selectedDischargeSummary.dischargeSummary.procedures.map(
                    (proc, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded-md">
                        <p className="text-sm font-medium">{proc.name}</p>
                        <p className="text-sm text-gray-500 mt-1">
                          Date: {proc.date}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          Performed by: {proc.performer}
                        </p>
                        <p className="text-sm mt-2">{proc.findings}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          {/* Lab Results */}
          {selectedDischargeSummary.dischargeSummary.labResults &&
            selectedDischargeSummary.dischargeSummary.labResults.length > 0 && (
              <div className="bg-white p-5 rounded-lg border border-gray-200 mb-6">
                <h4 className="font-medium text-gray-800 mb-3 pb-2 border-b border-gray-200">
                  Laboratory Results
                </h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Test
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Result
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Reference Range
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Interpretation
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {selectedDischargeSummary.dischargeSummary.labResults.map(
                        (lab, index) => (
                          <tr
                            key={index}
                            className={
                              index % 2 === 0 ? "bg-gray-50" : "bg-white"
                            }
                          >
                            <td className="px-4 py-3 text-sm text-gray-700">
                              {lab.test}
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-700">
                              {lab.result}
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-700">
                              {lab.reference}
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-700">
                              <span
                                className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  lab.interpretation === "Normal"
                                    ? "bg-green-100 text-green-800"
                                    : lab.interpretation.includes("Elevated")
                                    ? "bg-red-100 text-red-800"
                                    : "bg-yellow-100 text-yellow-800"
                                }`}
                              >
                                {lab.interpretation}
                              </span>
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          {/* Discharge Instructions */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 mb-6">
            <h4 className="font-medium text-gray-800 mb-3 pb-2 border-b border-gray-200">
              Discharge Instructions
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium mb-1">
                  Activity Restrictions:
                </p>
                <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-md">
                  {
                    selectedDischargeSummary.dischargeSummary
                      .activityRestrictions
                  }
                </p>
              </div>
              <div>
                <p className="text-sm font-medium mb-1">Diet:</p>
                <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-md">
                  {selectedDischargeSummary.dischargeSummary.diet}
                </p>
              </div>
              {/* Follow-up Instructions */}
              {selectedDischargeSummary.dischargeSummary.followUpInstructions &&
                selectedDischargeSummary.dischargeSummary.followUpInstructions
                  .length > 0 && (
                  <div>
                    <p className="text-sm font-medium mb-2">
                      Follow-up Appointments:
                    </p>
                    <div className="space-y-2">
                      {selectedDischargeSummary.dischargeSummary.followUpInstructions.map(
                        (followUp, index) => (
                          <div
                            key={index}
                            className="bg-gray-50 p-3 rounded-md"
                          >
                            <p className="text-sm font-medium">
                              {followUp.specialist}
                            </p>
                            <p className="text-sm text-gray-700">
                              Timeframe: {followUp.timeframe}
                            </p>
                            <p className="text-sm text-gray-700 mt-1">
                              {followUp.notes}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PatientDiagnosisComplaints;
