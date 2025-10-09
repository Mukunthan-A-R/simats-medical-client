import React, { useState } from "react";
import {
  ChevronLeftIcon,
  CalendarDaysIcon,
  AlertTriangleIcon,
  HeartPulseIcon,
  PillIcon,
  UserRoundIcon,
  XIcon,
  CheckIcon,
  XCircleIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  aquaButtonStyle,
  aquaGlossEffect,
  iconButtonStyle,
  formatDate,
} from "../../utils/constants";
import FacultyPrescriptionRejectionPopup from "../../components/faculty/FacultyPrescriptionRejectionPopup";

const FacultyPrescriptionApprovals = () => {
  const navigate = useNavigate();
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  // Faculty handle functions
  const handleApprove = (item) => {
    alert(`Approved prescription for ${item.patientName}`);
  };

  const handleReject = (item) => {
    setCurrentItem(item);
    setShowFeedbackModal(true);
  };

  // Sample Data
  const pendingPrescriptions = [
    {
      id: "rx-001",
      patientId: "SMC-2023-0042",
      patientName: "John Doe",
      patientAge: 45,
      patientGender: "Male",
      patientBloodGroup: "O+",
      patientPhoto:
        "https://i.pinimg.com/736x/1f/0c/1a/1f0c1a9fb33390d704dee42567adf987.jpg",
      providerName: "Dr. Sarah Johnson",
      providerId: "DOC-2021-0023",
      date: "2023-09-15",
      diagnosis: "Hypertension, Type 2 Diabetes",
      medicalAlerts: ["Penicillin Allergy", "Asthma"],
      prescriptionDetails: [
        {
          medication: "Metformin",
          dosage: "500mg",
          frequency: "1-0-1",
          beforeFood: true,
          duration: "30 days",
          totalCount: "60 tablets",
        },
        {
          medication: "Amlodipine",
          dosage: "5mg",
          frequency: "0-0-1",
          beforeFood: false,
          duration: "30 days",
          totalCount: "30 tablets",
        },
      ],
      requestorPhoto:
        "https://i.pinimg.com/originals/67/bc/f1/67bcf160c0643d61b6d9da16e564d96b.jpg",
    },
    {
      id: "rx-002",
      patientId: "SMC-2023-0039",
      patientName: "Maria Garcia",
      patientAge: 62,
      patientGender: "Female",
      patientBloodGroup: "B+",
      patientPhoto:
        "https://i.pinimg.com/474x/6f/ef/d0/6fefd0b9e21b0e590505ef454340d2eb.jpg",
      providerName: "Dr. Emily Rodriguez",
      providerId: "DOC-2020-0018",
      date: "2023-09-18",
      diagnosis: "Osteoarthritis, Hypertension",
      medicalAlerts: [],
      prescriptionDetails: [
        {
          medication: "Acetaminophen",
          dosage: "500mg",
          frequency: "1-1-1",
          beforeFood: false,
          duration: "15 days",
          totalCount: "45 tablets",
        },
        {
          medication: "Losartan",
          dosage: "50mg",
          frequency: "1-0-0",
          beforeFood: true,
          duration: "30 days",
          totalCount: "30 tablets",
        },
      ],
      requestorPhoto:
        "https://static.beebom.com/wp-content/uploads/2024/05/Gyomei.jpg?w=1024&quality=75",
    },
    {
      id: "rx-003",
      patientId: "SMC-2023-0051",
      patientName: "Robert Chen",
      patientAge: 34,
      patientGender: "Male",
      patientBloodGroup: "A-",
      patientPhoto:
        "https://i.ytimg.com/vi/edMGb6HnlJs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBFWQvlhcuPB-BD9ejvBjCL0QBmBg",
      providerName: "Dr. Michael Chang",
      providerId: "DOC-2022-0031",
      date: "2023-09-20",
      diagnosis: "Acute Bronchitis",
      medicalAlerts: ["Sulfa Allergy"],
      prescriptionDetails: [
        {
          medication: "Azithromycin",
          dosage: "250mg",
          frequency: "1-0-0",
          beforeFood: false,
          duration: "5 days",
          totalCount: "5 tablets",
        },
        {
          medication: "Dextromethorphan",
          dosage: "15mg",
          frequency: "1-1-1",
          beforeFood: false,
          duration: "7 days",
          totalCount: "21 tablets",
        },
      ],
      requestorPhoto:
        "https://poggers.com/cdn/shop/articles/08ff6c8d1f0719c65f752fdb2d2f45d4_1818x1023_crop_center.webp?v=1708120934",
    },
  ];

  const currentPrescriptions = pendingPrescriptions.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="p-4">
      <div className="mb-4 flex items-center">
        <button
          className={`mr-2 w-8 h-8 flex items-center justify-center rounded-full       `}
          onClick={() => navigate(-1)}
          style={{
            background: "linear-gradient(to bottom, #f0f4fa, #d5dde8)",
            border: "1px solid rgba(0,0,0,0.2)",
            boxShadow:
              "0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)",
          }}
        >
          <ChevronLeftIcon size={18} className="text-blue-700" />
        </button>
        <h1 className="text-xl font-semibold text-blue-900">
          Admission Approvals
        </h1>

        <div className="ml-3 px-2 py-1 bg-purple-100 rounded-full text-xs font-medium text-purple-800 flex items-center">
          {currentPrescriptions.length} pending
        </div>
      </div>

      <div className="space-y-4">
        {currentPrescriptions.map((item) => (
          <div
            key={item.id}
            className="rounded-xl overflow-hidden transition-all duration-200 hover:shadow-md"
            style={{
              background: "linear-gradient(to bottom, #ffffff, #f8fafc)",
              border: "1px solid rgba(0,0,0,0.1)",
              boxShadow:
                "0 1px 3px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.8)",
            }}
          >
            {/* Card Header */}
            <div
              className="p-4 flex items-center justify-between transition-colors"
              style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}
            >
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    src={item.patientPhoto}
                    alt={item.patientName}
                    className="h-12 w-12 rounded-full object-cover border-2 border-white"
                    style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {item.patientName}
                    <span className="ml-2 text-sm text-gray-500">
                      ({item.patientId})
                    </span>
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    ({item.patientAge}y, {item.patientGender},{" "}
                    {item.patientBloodGroup})
                  </p>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <span className="flex items-center">
                      <CalendarDaysIcon
                        size={12}
                        className="mr-1 text-gray-400"
                      />
                      {formatDate(item.date)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div
              className="p-4"
              style={{ background: "rgba(249, 250, 251, 0.5)" }}
            >
              {/* Medical Alerts */}
              {item.medicalAlerts && item.medicalAlerts.length > 0 && (
                <div className="mb-4">
                  <div
                    className="p-3 rounded-lg flex items-start"
                    style={{
                      background:
                        "linear-gradient(to bottom, #fee2e2, #fecaca)",
                      border: "1px solid rgba(220,38,38,0.2)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)",
                    }}
                  >
                    <AlertTriangleIcon
                      size={18}
                      className="text-red-600 mr-2 mt-0.5 flex-shrink-0"
                    />
                    <p className="text-sm font-medium text-red-700">
                      {item.medicalAlerts.join(", ")}
                    </p>
                  </div>
                </div>
              )}

              {/* Diagnosis */}
              <div className="mb-4">
                <div
                  className="p-3 rounded-lg flex items-start"
                  style={{
                    background: "linear-gradient(to bottom, #dbeafe, #bfdbfe)",
                    border: "1px solid rgba(59,130,246,0.2)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)",
                  }}
                >
                  <HeartPulseIcon
                    size={18}
                    className="text-blue-600 mr-2 mt-0.5 flex-shrink-0"
                  />
                  <p className="text-sm font-medium text-blue-700">
                    {item.diagnosis}
                  </p>
                </div>
              </div>

              {/* Prescription Details Table */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3 pb-1 border-b border-gray-200 flex items-center">
                  <PillIcon size={16} className="mr-2 text-purple-600" />
                  Prescription Details
                </h4>

                <div
                  className="overflow-x-auto rounded-lg"
                  style={{
                    border: "1px solid rgba(0,0,0,0.1)",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                  }}
                >
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead
                      style={{
                        background:
                          "linear-gradient(to bottom, #f9fafb, #f3f4f6)",
                      }}
                    >
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Drug Name & Dose
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Frequency
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Duration
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {item.prescriptionDetails.map((med, index) => (
                        <tr
                          key={index}
                          className={
                            index % 2 === 0 ? "bg-white" : "bg-gray-50"
                          }
                        >
                          <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                            {med.medication} {med.dosage}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                            <div className="flex flex-col items-start">
                              <span
                                className="px-2 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800"
                                style={{
                                  boxShadow:
                                    "inset 0 1px 0 rgba(255,255,255,0.6)",
                                }}
                              >
                                {med.frequency}
                              </span>
                              <span className="text-xs text-gray-500 mt-1">
                                {med.beforeFood ? "Before food" : "After food"}
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                            {med.duration}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                            {med.totalCount}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Prescriber Information */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3 pb-1 border-b border-gray-200 flex items-center">
                  <UserRoundIcon size={16} className="mr-2 text-purple-600" />
                  Prescriber Information
                </h4>
                <div className="flex items-center">
                  <img
                    src={item.requestorPhoto}
                    alt={item.providerName}
                    className="h-10 w-10 rounded-full object-cover border border-white"
                    style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium">{item.providerName}</p>
                    <p className="text-xs text-gray-600">
                      ID: {item.providerId}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-3 mt-4">
                <button
                  className={`px-4 py-2 rounded-full text-white ${aquaButtonStyle} ${aquaGlossEffect}`}
                  style={{
                    background: "linear-gradient(to bottom, #ff3b30, #dc2626)",
                    boxShadow:
                      "0 1px 3px rgba(220,38,38,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
                    border: "1px solid rgba(0,0,0,0.1)",
                  }}
                  onClick={() => handleReject(item)}
                >
                  <XIcon size={16} className="inline-block mr-1" />
                  Reject
                </button>
                <button
                  className={`px-4 py-2 rounded-full text-white ${aquaButtonStyle} ${aquaGlossEffect}`}
                  style={{
                    background: "linear-gradient(to bottom, #34c759, #10b981)",
                    boxShadow:
                      "0 1px 3px rgba(16,185,129,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
                    border: "1px solid rgba(0,0,0,0.1)",
                  }}
                  onClick={() => handleApprove(item)}
                >
                  <CheckIcon size={16} className="inline-block mr-1" />
                  Approve
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Rejection Feedback Modal */}
      {showFeedbackModal && (
        <FacultyPrescriptionRejectionPopup
          handleCancel={() => {
            setShowFeedbackModal(false);
            setCurrentItem(null);
          }}
        />
      )}
    </div>
  );
};

export default FacultyPrescriptionApprovals;
