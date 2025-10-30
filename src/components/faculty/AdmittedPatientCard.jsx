import { AlertTriangleIcon, CalendarIcon, StethoscopeIcon } from "lucide-react";

function AdmittedPatientCard({ patient, onNavigate }) {
  return (
    <div
      //   onClick={() => onNavigate(`patient-case-record/${patient.id}`)}
      className="rounded-lg border border-gray-200 shadow-sm bg-gradient-to-b from-white to-gray-50 cursor-pointer hover:bg-gray-50 transition-colors"
    >
      <div className="p-3 flex justify-between">
        <div className="flex items-start">
          {/* Photo */}
          <div className="mr-3 h-10 w-10 rounded-full overflow-hidden border-2 border-white shadow">
            <img
              src={patient.photo}
              alt={patient.name}
              className="h-full w-full object-cover"
            />
          </div>
          {/* Info */}
          <div className="min-w-0">
            <p className="font-medium text-sm text-gray-900 truncate">
              {patient.name}
            </p>
            <span className="text-xs text-gray-500">
              {patient.age}y, {patient.gender}
            </span>
            <div className="flex items-center text-xs text-gray-600 mt-0.5">
              <CalendarIcon size={10} className="mr-1" /> Admitted:{" "}
              {patient.admissionDate}
            </div>
            <div className="flex items-center text-xs text-gray-600 mt-0.5">
              <StethoscopeIcon size={10} className="mr-1" /> {patient.diagnosis}
            </div>
            {/* Alerts */}
            {patient.alerts?.length > 0 && (
              <div className="mt-1 flex flex-wrap gap-1">
                {patient.alerts.map((a, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-red-100 text-red-700 border border-red-200"
                  >
                    <AlertTriangleIcon size={9} className="mr-0.5" /> {a}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* Status */}
        {patient.status && (
          <div className="ml-2">
            <span className="inline-flex items-center justify-center w-20 px-1.5 py-0.5 rounded-full text-[10px] font-medium bg-green-100 text-green-700 border border-green-200 text-center leading-tight">
              {patient.status.toLowerCase() === "under observation" ? (
                <>
                  Under
                  <br />
                  observation
                </>
              ) : (
                patient.status
              )}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdmittedPatientCard;
