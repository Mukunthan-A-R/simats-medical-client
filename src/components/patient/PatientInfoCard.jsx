import { CalendarIcon, DropletIcon, UserIcon, PhoneIcon } from "lucide-react";
import { formatDate } from "../../utils/constants";

const PatientInfoCard = ({ userData }) => {
  if (!userData) return null;

  return (
    <div
      className="overflow-hidden mb-4 print:hidden"
      style={{
        backgroundColor: "#f7f7f7",
        borderRadius: "12px",
        border: "1px solid rgba(0,0,0,0.15)",
        boxShadow:
          "0 2px 3px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.9)",
        backgroundImage: "linear-gradient(to bottom, #ffffff, #e9e9e9)",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center px-4 py-3"
        style={{
          backgroundImage: "linear-gradient(to bottom, #fdfdfd, #dcdcdc)",
          borderBottom: "1px solid rgba(0,0,0,0.2)",
        }}
      >
        <div
          className="h-12 w-12 rounded-full overflow-hidden mr-3"
          style={{
            border: "2px solid white",
            boxShadow:
              "0 1px 2px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.8)",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
            alt="Patient"
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <h2 className="font-semibold text-gray-900">{userData.name}</h2>
          <p className="text-xs text-gray-600">
            Patient ID • {userData.patient_id}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="px-4 py-3 grid grid-cols-2 gap-y-3 text-sm">
        <div className="flex items-center text-gray-700">
          <UserIcon size={14} className="mr-2 text-gray-500" />
          {userData.gender}
        </div>

        <div className="flex items-center text-gray-700">
          <DropletIcon size={14} className="mr-2 text-red-500" />
          Blood Group: {userData.blood_group}
        </div>

        <div className="flex items-center text-gray-700">
          <CalendarIcon size={14} className="mr-2 text-blue-500" />
          DOB: {formatDate(userData.dob)}
        </div>

        <div className="flex items-center text-gray-700">
          <CalendarIcon size={14} className="mr-2 text-green-600" />
          Admitted: {formatDate(userData.admission_date)}
        </div>

        <div className="col-span-2 flex items-center text-gray-700">
          <PhoneIcon size={14} className="mr-2 text-gray-500" />
          {userData.phone_no}
        </div>
      </div>
    </div>
  );
};

export default PatientInfoCard;
