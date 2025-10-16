import React from "react";
import {
  TestTubeIcon,
  ClockIcon,
  ImageIcon,
  EyeIcon,
  ClipboardListIcon,
} from "lucide-react";

const PatientReportTable = ({ reports: reportsData }) => {
  // Group by date
  const groupedReports = reportsData.reduce((acc, report) => {
    const existingGroup = acc.find((group) => group.date === report.date);
    if (existingGroup) {
      existingGroup.reports.push(report);
    } else {
      acc.push({ date: report.date, reports: [report] });
    }
    return acc;
  }, []);

  return (
    <div
      className="rounded-b-xl overflow-hidden mb-4"
      style={{
        boxShadow:
          "0 2px 5px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.8)",
        border: "1px solid rgba(0,0,0,0.15)",
        backgroundColor: "rgba(255,255,255,0.85)",
      }}
    >
      {/* Body */}
      {reportsData.length === 0 ? (
        <div className="p-8 text-center">
          <ClipboardListIcon size={48} className="mx-auto text-gray-300 mb-3" />
          <p className="text-gray-500">
            No reports found matching your search criteria.
          </p>
        </div>
      ) : (
        <div>
          {groupedReports.map((group) => (
            <div
              key={group.date}
              className="border-b border-gray-100 last:border-b-0"
            >
              {/* Group Date Header */}
              <div
                className="px-4 py-2"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, #e9f0fa, #d0ddf0)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8)",
                }}
              >
                <p
                  className="text-sm font-medium text-gray-600"
                  style={{ textShadow: "0 1px 0 rgba(255,255,255,0.7)" }}
                >
                  {group.date}
                </p>
              </div>

              {/* Reports List */}
              <ul className="divide-y divide-gray-100">
                {group.reports.map((report) => (
                  <li
                    key={report.id}
                    className="p-4 hover:bg-blue-50 transition-colors duration-150 cursor-pointer"
                    style={{
                      backgroundImage:
                        "linear-gradient(to bottom, rgba(255,255,255,0.5), rgba(245,245,245,0.5))",
                    }}
                  >
                    <div className="flex items-center">
                      {/* Icon */}
                      <div
                        className="flex-shrink-0 h-12 w-12 rounded-full flex items-center justify-center mr-4"
                        style={{
                          background:
                            "linear-gradient(to bottom, #e6f0ff, #cce0ff)",
                          border: "1px solid rgba(0,0,0,0.1)",
                          boxShadow:
                            "inset 0 1px 0 rgba(255,255,255,0.8), 0 1px 3px rgba(0,0,0,0.1)",
                        }}
                      >
                        <div
                          className="h-8 w-8 rounded-full flex items-center justify-center"
                          style={{
                            background: "white",
                            boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
                          }}
                        >
                          <TestTubeIcon size={16} className="text-purple-600" />
                        </div>
                      </div>

                      {/* Report Details */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3
                            className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors"
                            style={{
                              textShadow: "0 1px 0 rgba(255,255,255,0.7)",
                            }}
                          >
                            {report.reportName}
                          </h3>
                        </div>

                        {/* Status badges */}
                        <div className="mt-1 flex items-center gap-2">
                          <span
                            className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                            style={{
                              background:
                                report.status === "Completed"
                                  ? "linear-gradient(to bottom, #4caf50, #388e3c)"
                                  : "linear-gradient(to bottom, #ffb300, #f57c00)",
                              boxShadow:
                                "0 1px 2px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)",
                              border: "1px solid rgba(0,0,0,0.2)",
                              color: "white",
                              minWidth: "70px",
                              height: "20px",
                              justifyContent: "center",
                              alignItems: "center",
                              display: "inline-flex",
                            }}
                          >
                            {report.status}
                          </span>

                          {report.findingsStatus !== "pending" && (
                            <span
                              className="px-2 inline-flex items-center text-xs leading-5 font-semibold rounded-full"
                              style={{
                                background:
                                  report.findingsStatus === "normal"
                                    ? "linear-gradient(to bottom, #4caf50, #388e3c)"
                                    : report.findingsStatus === "abnormal"
                                    ? "linear-gradient(to bottom, #f44336, #c62828)"
                                    : "linear-gradient(to bottom, #d32f2f, #b71c1c)",
                                boxShadow:
                                  "0 1px 2px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)",
                                border: "1px solid rgba(0,0,0,0.2)",
                                color: "white",
                                minWidth: "80px",
                                height: "20px",
                                justifyContent: "center",
                                alignItems: "center",
                                display: "inline-flex",
                              }}
                            >
                              {report.findingsStatus === "normal"
                                ? "Normal"
                                : report.findingsStatus === "abnormal"
                                ? "Abnormal"
                                : "Critical"}
                            </span>
                          )}
                        </div>

                        {/* Meta Info */}
                        <div className="mt-1 flex items-center text-xs text-gray-500">
                          <span className="flex items-center">
                            <ClockIcon size={12} className="mr-1" />
                            {report.time}
                          </span>
                          <span className="mx-1">•</span>
                          <span>{report.department}</span>
                          {report.images?.length > 0 && (
                            <>
                              <span className="mx-1">•</span>
                              <span className="flex items-center">
                                <ImageIcon size={12} className="mr-1" />
                                {report.images.length}{" "}
                                {report.images.length === 1
                                  ? "Image"
                                  : "Images"}
                              </span>
                            </>
                          )}
                        </div>

                        {/* Report Info */}
                        <div className="mt-1 text-xs text-gray-500">
                          <span>Report ID: {report.id}</span>
                          <span className="mx-1">•</span>
                          <span>Type: {report.type}</span>
                        </div>
                      </div>

                      {/* View button */}
                      <div className="ml-4 flex-shrink-0">
                        <button
                          className="p-2 rounded-full"
                          style={{
                            background:
                              "linear-gradient(to bottom, #4d90fe, #0066cc)",
                            border: "1px solid rgba(0,0,0,0.2)",
                            boxShadow:
                              "0 1px 2px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)",
                          }}
                        >
                          <EyeIcon size={18} className="text-white" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PatientReportTable;
