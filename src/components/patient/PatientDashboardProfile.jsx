import { GraduationCapIcon } from "lucide-react";
import PatientCollapsiblePanel from "./PatientCollapsiblePanel";
import PatientMedicalAllergies from "./PatientMedicalAllergies";
import PatientDashboardServices from "./PatientDashboardServices";
import PatientDashboardNotification from "./PatientDashboardNotification";

export default function PatientDashboardProfile() {
  return (
    <div
      className="overflow-hidden mb-6 cursor-pointer transform transition-transform duration-200 hover:scale-[1.01]"
      // onClick={() => onNavigate("student-profile")}
      style={{
        backgroundColor: "white",
        borderRadius: "12px",
        boxShadow:
          "0 2px 5px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04), inset 0 -5px 10px rgba(0,0,0,0.03)",
        border: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <div className="p-2 sm:p-6 flex items-center">
        {/* Avatar */}
        <div className="relative mr-5">
          <div
            className="h-1  2 sm:h-16 w-12 sm:w-16 rounded-full overflow-hidden"
            style={{
              border: "2px solid rgba(255,255,255,0.9)",
              boxShadow:
                "0 2px 4px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.04)",
            }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyq0k3fnDCyC_lSp06WK-TgtHT3DuZlMrue-bDnfpFd08qVhiK1AmRZRH37JGcx9RrRYY&usqp=CAU"
              alt="Student"
              className="h-full w-full object-cover"
            />
          </div>
          {/* Student Category Indicator */}
          <div
            className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full flex items-center justify-center"
            style={{
              background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
              border: "2px solid white",
              boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
            }}
            title="Medical Student"
          >
            <GraduationCapIcon size={14} className="text-white" />
          </div>
        </div>
        <div className="flex-1">
          <h2
            className="text-xl font-semibold text-gray-900 truncate"
            style={{ textShadow: "0 1px 0 rgba(255,255,255,0.5)" }}
          >
            Welcome, Sarah Smith
          </h2>
          <p className="text-sm text-gray-500 mt-0.5">
            ID: SMC-2023-0042 • Last visit: 15 May 2023
          </p>
        </div>
      </div>
      <PatientCollapsiblePanel
        title={"Penicillin Allergy, Asthma, ACE Inhibitor Precaution"}
      >
        <PatientMedicalAllergies
          title={"Penicillin Allergy"}
          desc={
            "Severe allergic reaction to penicillin and related antibiotics."
          }
        ></PatientMedicalAllergies>
        <PatientMedicalAllergies
          title={"Penicillin Allergy"}
          desc={
            "Severe allergic reaction to penicillin and related antibiotics."
          }
        ></PatientMedicalAllergies>
      </PatientCollapsiblePanel>
    </div>
  );
}
