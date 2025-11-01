import { ActivityIcon, ClockIcon } from "lucide-react";

function ClinicPatientCard({ patient, onNavigate }) {
  return (
    <div
      onClick={() => onNavigate(`patient-case-record/${patient.id}`)}
      className="rounded-lg border border-gray-200 shadow-sm bg-gradient-to-b from-white to-gray-50 cursor-pointer hover:bg-gray-50 transition-colors"
    >
      <div className="p-3 flex items-center">
        <div className="mr-3 h-10 w-10 rounded-full overflow-hidden border-2 border-white shadow">
          <img
            src={patient.photo}
            alt={patient.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center">
            <p className="font-medium text-sm text-gray-900 truncate">
              {patient.name}
            </p>
            <span className="ml-1.5 text-xs text-gray-500">({patient.id})</span>
          </div>
          <div className="flex items-center text-xs text-gray-500 mt-0.5">
            {patient.age}y, {patient.gender}
            <span className="mx-1.5">•</span>
            <ClockIcon size={10} className="mr-1" /> {patient.appointmentTime}
          </div>
          <div className="flex items-center mt-0.5">
            <span className="px-1.5 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-700 border border-blue-200">
              {patient.appointmentType}
            </span>
            <span className="mx-1.5 text-xs text-gray-600">•</span>
            <span className="flex items-center text-xs text-gray-600">
              <ActivityIcon size={10} className="mr-1" /> {patient.condition}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClinicPatientCard;
