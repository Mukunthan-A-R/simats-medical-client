import {
  aquaButtonStyle,
  aquaGlossEffect,
  formatDate,
} from "../../utils/constants";
import {
  AlertTriangleIcon,
  CalendarDaysIcon,
  CheckIcon,
  HeartPulseIcon,
  PillIcon,
  XIcon,
} from "lucide-react";
import { AgeCalc } from "../../utils/userAgeCalculator";

const PrescriptionStatusCard = ({ item, handleApprove, handleReject }) => {
  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-200 hover:shadow-md w-full"
      style={{
        background: "linear-gradient(to bottom, #ffffff, #f8fafc)",
        border: "1px solid rgba(0,0,0,0.1)",
        boxShadow:
          "0 1px 3px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.8)",
      }}
    >
      {/* Card Header */}
      <div
        className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between transition-colors space-y-2 sm:space-y-0"
        style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}
      >
        <div className="flex items-center flex-wrap">
          <img
            src={
              item?.patient_photo ??
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4z0chdf7Y0m7peE17QnLfXVyxmhFMkXSHlw&s"
            }
            alt={item?.patient_name}
            className="h-12 w-12 rounded-full object-cover border-2 border-white"
            style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}
          />
          <div className="ml-4 min-w-0">
            <h3 className="text-base sm:text-lg font-medium text-gray-900 truncate">
              {item?.patient_name}{" "}
              <span className="text-xs sm:text-sm text-gray-500">
                ({item?.patient_id})
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 truncate">
              ({AgeCalc(item?.patient_dob) ?? "N/A"}y, {item?.patient_gender},{" "}
              {item?.patient_blood_group})
            </p>
            <div className="flex items-center text-xs text-gray-500 mt-1">
              <CalendarDaysIcon size={12} className="mr-1 text-gray-400" />
              {formatDate(item?.start_date)}
              {" - "} {formatDate(item?.end_date)}
            </div>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4" style={{ background: "rgba(249, 250, 251, 0.5)" }}>
        {/* Medical Alerts */}
        {item?.medical_alerts?.length > 0 && (
          <div className="mb-4">
            <div
              className="p-3 rounded-lg flex items-center"
              style={{
                background: "linear-gradient(to bottom, #fee2e2, #fecaca)",
                border: "1px solid rgba(220,38,38,0.2)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)",
              }}
            >
              <AlertTriangleIcon
                size={18}
                className="text-red-600 mr-2 mt-0.5"
              />
              <p className="text-xs sm:text-sm font-medium text-red-700 truncate">
                {item?.medical_alerts?.join(", ")}
              </p>
            </div>
          </div>
        )}

        {/* Diagnosis */}
        <div className="mb-4">
          <div
            className="p-3 rounded-lg flex items-center"
            style={{
              background: "linear-gradient(to bottom, #dbeafe, #bfdbfe)",
              border: "1px solid rgba(59,130,246,0.2)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)",
            }}
          >
            <HeartPulseIcon size={18} className="text-blue-600 mr-2 mt-0.5" />
            <p className="text-xs sm:text-sm font-medium text-blue-700 truncate">
              {item?.diagnosis ?? "N/A"}
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
            <div className="w-75 sm:w-6/8 md:w-full">
              <table className="divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Drug Name
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Dose
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Frequency
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Timing
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Instructions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* {item?.prescriptionDetails?.map((med, index) => ( */}
                  <tr
                    key={item?.assignment_id}
                    // className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item?.medication_name}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item?.dosage}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                      {item?.frequency}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                      {item?.medication_timing}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                      {item?.instructions}
                    </td>
                  </tr>
                  {/* ))} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="pt-2 pl-3">
          <h3 className="text-base sm:text-lg font-medium text-gray-900 truncate">
            {item?.student_name}{" "}
            <span className="text-xs sm:text-sm text-gray-500">
              ({item?.student_id})
            </span>
          </h3>
          <span className="text-black">Requested At : </span>
          <span className="text-xs sm:text-sm text-gray-500">
            {formatDate(item?.created_at)}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-end gap-3 mt-4">
          <button
            className={`px-4 py-2 rounded-full text-white ${aquaButtonStyle} ${aquaGlossEffect}`}
            style={{
              background: "linear-gradient(to bottom, #ff3b30, #dc2626)",
              boxShadow:
                "0 1px 3px rgba(220,38,38,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
              border: "1px solid rgba(0,0,0,0.1)",
            }}
            onClick={() => handleReject?.(item)}
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
            onClick={() => handleApprove?.(item)}
          >
            <CheckIcon size={16} className="inline-block mr-1" />
            Approve
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionStatusCard;
