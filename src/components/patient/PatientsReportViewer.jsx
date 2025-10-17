import React from "react";
import {
  X as XIcon,
  Download as DownloadIcon,
  Image as ImageIcon,
  ClipboardList as ClipboardListIcon,
  TestTube as TestTubeIcon,
  //   ZoomIn as ZoomInIcon,
} from "lucide-react";

const PatientsReportViewer = ({ handleClose }) => {
  // Static example data (Complete Blood Count - CBC)
  const report = {
    id: "MR-2023-1189",
    date: "2023-05-10",
    time: "11:45 AM",
    type: "Laboratory",
    reportName: "Complete Blood Count (CBC)",
    department: "Pathology",
    performedBy: "Lab Tech. Michael Wong",
    supervisedBy: "Dr. Emily Rodriguez",
    status: "Completed",
    findingsStatus: "normal",
    icon: <TestTubeIcon size={16} className="text-purple-600" />,
    images: [
      {
        title: "Blood Smear Analysis",
        description:
          "Peripheral blood smear showing normal red blood cells, white blood cells, and platelets under 100x magnification.",
        url: "https://img.medscapestatic.com/pi/meds/ckb/89/38389.jpg",
      },
    ],
    findings: [
      {
        name: "Hemoglobin",
        value: "14.2 g/dL",
        reference: "13.5-17.5 g/dL",
        status: "normal",
      },
      {
        name: "WBC Count",
        value: "7.5 x 10^9/L",
        reference: "4.5-11.0 x 10^9/L",
        status: "normal",
      },
      {
        name: "Platelet Count",
        value: "250 x 10^9/L",
        reference: "150-450 x 10^9/L",
        status: "normal",
      },
    ],
  };

  const getFindingsStatusInfo = (status) => {
    switch (status) {
      case "normal":
        return { aquaColor: "#22c55e", icon: "✅" };
      case "abnormal":
        return { aquaColor: "#eab308", icon: "⚠️" };
      case "critical":
        return { aquaColor: "#ef4444", icon: "❌" };
      default:
        return { aquaColor: "#9ca3af", icon: "⏳" };
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return { aquaColor: "#2563eb" };
      case "Pending":
        return { aquaColor: "#9ca3af" };
      default:
        return { aquaColor: "#22c55e" };
    }
  };

  const handleImageError = (e) => {
    e.target.src =
      "https://via.placeholder.com/300x200?text=Image+Not+Available";
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)] z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div
        className="rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto animate-slideUp"
        style={{
          backgroundColor: "white",
          boxShadow: "0 5px 30px rgba(0,0,0,0.4)",
          border: "1px solid rgba(0,0,0,0.3)",
        }}
      >
        {/* Modal Header */}
        <div
          className="sticky top-0 border-b border-gray-200 p-4 flex items-center justify-between z-10"
          style={{
            backgroundImage: "linear-gradient(to bottom, #e9f0fa, #d0ddf0)",
            boxShadow:
              "0 1px 0 rgba(255,255,255,0.8) inset, 0 1px 0 rgba(0,0,0,0.1)",
          }}
        >
          <div className="flex items-center">
            <div className="flex mr-4">
              <button
                className="w-3.5 h-3.5 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(to bottom, #ff5a5a, #cc0000)",
                  boxShadow:
                    "0 1px 1px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.3)",
                  border: "1px solid rgba(100,0,0,0.4)",
                }}
                onClick={handleClose}
              >
                <XIcon size={8} className="text-[#660000] opacity-80" />
              </button>
            </div>
            <h2
              className="text-base font-semibold text-gray-800"
              style={{ textShadow: "0 1px 0 rgba(255,255,255,0.5)" }}
            >
              {report.reportName}
            </h2>
          </div>
          <div className="flex space-x-2">
            <button
              className="p-1.5 rounded-full"
              style={{
                background: "linear-gradient(to bottom, #f0f4fa, #d5dde8)",
                border: "1px solid rgba(0,0,0,0.2)",
                boxShadow:
                  "0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)",
              }}
              title="Download Report"
            >
              <DownloadIcon size={16} className="text-blue-700" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {/* Report Info */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div
                  className="h-14 w-14 rounded-full flex items-center justify-center mr-4"
                  style={{
                    background: "linear-gradient(to bottom, #e6f0ff, #cce0ff)",
                    border: "1px solid rgba(0,0,0,0.1)",
                    boxShadow:
                      "inset 0 1px 0 rgba(255,255,255,0.8), 0 1px 3px rgba(0,0,0,0.1)",
                  }}
                >
                  <div
                    className="h-10 w-10 rounded-full flex items-center justify-center"
                    style={{
                      background: "white",
                      boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
                    }}
                  >
                    {report.icon}
                  </div>
                </div>
                <div>
                  <h3
                    className="font-medium text-gray-900"
                    style={{ textShadow: "0 1px 0 rgba(255,255,255,0.5)" }}
                  >
                    {report.reportName}
                  </h3>
                  <p className="text-sm text-gray-500">{report.department}</p>
                </div>
              </div>

              <div className="flex space-x-2">
                <span
                  className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full"
                  style={{
                    background: getStatusColor(report.status).aquaColor,
                    color: "white",
                  }}
                >
                  {report.status}
                </span>
                <span
                  className="px-2 py-1 inline-flex items-center text-xs leading-5 font-semibold rounded-full"
                  style={{
                    background: getFindingsStatusInfo(report.findingsStatus)
                      .aquaColor,
                    color: "white",
                  }}
                >
                  {getFindingsStatusInfo(report.findingsStatus).icon}{" "}
                  <span className="ml-1 capitalize">
                    {report.findingsStatus}
                  </span>
                </span>
              </div>
            </div>

            {/* Basic Details */}
            <div
              className="p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4"
              style={{
                backgroundColor: "rgba(245,245,245,0.8)",
                border: "1px solid rgba(0,0,0,0.1)",
              }}
            >
              <div>
                <p className="text-sm">
                  <span className="font-medium">Report ID:</span> {report.id}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Type:</span> {report.type}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Date & Time:</span>{" "}
                  {report.date}, {report.time}
                </p>
              </div>
              <div>
                <p className="text-sm">
                  <span className="font-medium">Performed By:</span>{" "}
                  {report.performedBy}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Supervised By:</span>{" "}
                  {report.supervisedBy}
                </p>
              </div>
            </div>
          </div>

          {/* Report Images */}
          {report.images && report.images.length > 0 && (
            <div className="mb-6">
              <h4 className="font-medium text-gray-800 mb-3 pb-2 border-b border-gray-200 flex items-center">
                <ImageIcon size={16} className="mr-2 text-blue-600" />
                Images
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                {report.images.map((image, idx) => (
                  <div
                    key={idx}
                    className="overflow-hidden shadow-sm hover:shadow-md transition-shadow rounded-lg border border-gray-200"
                  >
                    <div className="relative">
                      <div className="flex items-center justify-center h-64 bg-gray-50">
                        <img
                          src={image.url}
                          alt={image.title}
                          className="max-w-full max-h-64 object-contain"
                          onError={handleImageError}
                        />
                      </div>
                      {/* <button
                        className="absolute top-2 right-2 p-2 rounded-full bg-blue-600 hover:bg-blue-700"
                        title="View Full Size"
                      >
                        <ZoomInIcon size={16} className="text-white" />
                      </button> */}
                    </div>
                    <div className="p-3 bg-gray-100">
                      <h5 className="font-medium text-sm text-gray-800">
                        {image.title}
                      </h5>
                      <p className="text-xs text-gray-600 mt-1">
                        {image.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Findings */}
          {report.findings && report.findings.length > 0 && (
            <div className="mb-6">
              <h4 className="font-medium text-gray-800 mb-3 pb-2 border-b border-gray-200 flex items-center">
                <ClipboardListIcon size={16} className="mr-2 text-blue-600" />
                Findings
              </h4>
              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Parameter
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Value
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Reference Range
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {report.findings.map((finding, index) => {
                      const info = getFindingsStatusInfo(finding.status);
                      return (
                        <tr
                          key={index}
                          className={
                            finding.status !== "normal"
                              ? "bg-red-50"
                              : index % 2 === 0
                              ? "bg-white"
                              : "bg-gray-50"
                          }
                        >
                          <td className="px-4 py-3 text-sm text-gray-900">
                            {finding.name}
                          </td>
                          <td className="px-4 py-3 text-sm font-medium text-gray-900">
                            {finding.value}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-500">
                            {finding.reference}
                          </td>
                          <td className="px-4 py-3">
                            <span
                              className="px-2 inline-flex items-center text-xs leading-5 font-semibold rounded-full text-white"
                              style={{
                                background: info.aquaColor,
                              }}
                            >
                              {info.icon}
                              <span className="ml-1 capitalize">
                                {finding.status}
                              </span>
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientsReportViewer;
