import { ChevronLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PatientDischargeCard from "./PatientDischargeCard";
import PatientCaseApprovalCard from "../../components/faculty/PatientCaseApprovalCard";

const FacultyCaseApproval = () => {
  const navigate = useNavigate();

  const patients = [
    {
      id: "padm-001",
      patientName: "Ravi Kumar",
      patientId: "SMC-2023-0078",
      department: "Cardiology",
      requestedBy: "Dr. Priya Sharma",
      requestDate: "2023-09-15",
      urgency: "Medium",
      reason: "Chest pain and arrhythmia",
      age: 62,
      gender: "Male",
      contactNumber: "+91 98765 43210",
      existingDiagnosis: "Hypertension, Diabetes Mellitus Type 2",
      vitalSigns: {
        bp: "145/90 mmHg",
        pulse: "88 bpm",
        temp: "37.2°C",
        resp: "18/min",
        spo2: "97%",
      },
      wardPreference: "W-205",
      bedPreference: "Any",
      expectedStay: "5-7 days",
      insuranceDetails: "Policy #HLTI-45678, Apollo Health Insurance",
      additionalNotes:
        "Patient is on blood thinners. Has a history of MI 2 years ago. Current ECG shows ST depression in leads V3-V5.",
      patientPhoto:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      requestorPhoto:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      alerts: ["Diabetes", "On Blood Thinners", "History of MI"],
    },
    {
      id: "padm-002",
      patientName: "Ananya Singh",
      patientId: "SMC-2023-0092",
      department: "Neurology",
      requestedBy: "Dr. Rajesh Patel",
      requestDate: "2023-09-17",
      urgency: "High",
      reason: "Recurrent seizures",
      age: 28,
      gender: "Female",
      contactNumber: "+91 87654 32109",
      existingDiagnosis: "Epilepsy, Migraine",
      vitalSigns: {
        bp: "125/80 mmHg",
        pulse: "96 bpm",
        temp: "37.8°C",
        resp: "22/min",
        spo2: "98%",
      },
      wardPreference: "W-103",
      bedPreference: "Near nursing station",
      expectedStay: "3-5 days",
      insuranceDetails: "Policy #STAR-78901, Star Health Insurance",
      additionalNotes:
        "Patient had 3 episodes of seizures in the last 24 hours. Currently on Levetiracetam 500mg BD. Last seizure episode was 4 hours ago. Patient is pregnant (14 weeks).",
      patientPhoto:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      requestorPhoto:
        "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      alerts: ["Pregnancy", "Epilepsy", "Migraine"],
    },
  ];

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
          Case Record Approval
        </h1>
      </div>

      {patients.map((patient) => (
        <>
          <PatientCaseApprovalCard patient={patient} />
          <PatientDischargeCard patient={patient} />
        </>
      ))}
    </div>
  );
};

export default FacultyCaseApproval;
