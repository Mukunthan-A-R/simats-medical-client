import React from "react";
import { ChevronLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PatientAdmissionCard from "../../components/faculty/PatientAdmissionCard";

const FacultyAdmissionApprovals = () => {
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
    {
      id: "padm-003",
      patientName: "Vikram Joshi",
      patientId: "SMC-2023-0101",
      department: "Orthopedics",
      requestedBy: "Dr. Meena Krishnan",
      requestDate: "2023-09-18",
      urgency: "Low",
      reason: "Fracture follow-up and dressing change",
      age: 40,
      gender: "Male",
      contactNumber: "+91 91234 56789",
      existingDiagnosis: "Tibia fracture post-surgery",
      vitalSigns: {
        bp: "130/85 mmHg",
        pulse: "80 bpm",
        temp: "36.8°C",
        resp: "16/min",
        spo2: "99%",
      },
      wardPreference: "W-310",
      bedPreference: "Corner bed",
      expectedStay: "2 days",
      insuranceDetails: "Policy #HDFC-56789, HDFC Ergo Insurance",
      additionalNotes: "Post-operative dressing change scheduled every 2 days.",
      patientPhoto:
        "https://images.unsplash.com/photo-1603415526960-f8f0b0f1b3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      requestorPhoto:
        "https://images.unsplash.com/photo-1590080875831-cbe8f5f6a9b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      alerts: ["Post-surgery care"],
    },
    {
      id: "padm-004",
      patientName: "Saira Banu",
      patientId: "SMC-2023-0110",
      department: "Oncology",
      requestedBy: "Dr. Ashok Menon",
      requestDate: "2023-09-19",
      urgency: "High",
      reason: "Chemotherapy cycle 4",
      age: 49,
      gender: "Female",
      contactNumber: "+91 93456 22109",
      existingDiagnosis: "Breast carcinoma (Stage II)",
      vitalSigns: {
        bp: "118/78 mmHg",
        pulse: "90 bpm",
        temp: "37.0°C",
        resp: "17/min",
        spo2: "98%",
      },
      wardPreference: "W-220",
      bedPreference: "Window side",
      expectedStay: "4 days",
      insuranceDetails: "Policy #BAJAJ-11122, Bajaj Allianz Insurance",
      additionalNotes:
        "Requires IV line setup and antiemetic protocol pre-chemo.",
      patientPhoto:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      requestorPhoto:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      alerts: ["Chemotherapy", "Nausea management"],
    },
    {
      id: "padm-005",
      patientName: "Harish Patel",
      patientId: "SMC-2023-0123",
      department: "Gastroenterology",
      requestedBy: "Dr. Kavitha Rao",
      requestDate: "2023-09-20",
      urgency: "Medium",
      reason: "Acute gastritis and vomiting",
      age: 34,
      gender: "Male",
      contactNumber: "+91 96543 21098",
      existingDiagnosis: "Gastritis, GERD",
      vitalSigns: {
        bp: "120/80 mmHg",
        pulse: "84 bpm",
        temp: "37.4°C",
        resp: "18/min",
        spo2: "98%",
      },
      wardPreference: "W-118",
      bedPreference: "Any",
      expectedStay: "3 days",
      insuranceDetails: "Policy #ICICI-44321, ICICI Lombard Insurance",
      additionalNotes:
        "Patient is responding to PPI therapy. Mild dehydration noted.",
      patientPhoto:
        "https://images.unsplash.com/photo-1603415526815-1cfaaf60b9f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      requestorPhoto:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      alerts: ["Dehydration"],
    },
    {
      id: "padm-006",
      patientName: "Fatima Noor",
      patientId: "SMC-2023-0130",
      department: "Gynecology",
      requestedBy: "Dr. Shalini Nair",
      requestDate: "2023-09-21",
      urgency: "Medium",
      reason: "Postnatal checkup",
      age: 30,
      gender: "Female",
      contactNumber: "+91 98210 65432",
      existingDiagnosis: "Normal vaginal delivery - 5 days ago",
      vitalSigns: {
        bp: "110/70 mmHg",
        pulse: "76 bpm",
        temp: "36.7°C",
        resp: "16/min",
        spo2: "99%",
      },
      wardPreference: "W-405",
      bedPreference: "Private room",
      expectedStay: "2 days",
      insuranceDetails: "Policy #RELIANCE-56781, Reliance Health",
      additionalNotes:
        "Monitoring for postpartum bleeding and pain management.",
      patientPhoto:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      requestorPhoto:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      alerts: ["Postnatal care"],
    },
    {
      id: "padm-007",
      patientName: "Arjun Mehta",
      patientId: "SMC-2023-0138",
      department: "ENT",
      requestedBy: "Dr. Ramesh Kulkarni",
      requestDate: "2023-09-22",
      urgency: "Low",
      reason: "Chronic sinusitis evaluation",
      age: 45,
      gender: "Male",
      contactNumber: "+91 97777 88888",
      existingDiagnosis: "Chronic sinusitis",
      vitalSigns: {
        bp: "122/78 mmHg",
        pulse: "82 bpm",
        temp: "36.9°C",
        resp: "17/min",
        spo2: "98%",
      },
      wardPreference: "W-125",
      bedPreference: "Near window",
      expectedStay: "1-2 days",
      insuranceDetails: "Policy #TATA-99887, Tata AIG Insurance",
      additionalNotes: "For CT PNS and possible nasal endoscopy tomorrow.",
      patientPhoto:
        "https://images.unsplash.com/photo-1603415526833-4e3d9b6c6aa3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      requestorPhoto:
        "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      alerts: ["Dust allergy"],
    },
    {
      id: "padm-008",
      patientName: "Kiran Devi",
      patientId: "SMC-2023-0145",
      department: "Dermatology",
      requestedBy: "Dr. Sneha Iyer",
      requestDate: "2023-09-23",
      urgency: "Low",
      reason: "Severe eczema and itching",
      age: 26,
      gender: "Female",
      contactNumber: "+91 99880 77665",
      existingDiagnosis: "Eczema, Skin hypersensitivity",
      vitalSigns: {
        bp: "118/75 mmHg",
        pulse: "78 bpm",
        temp: "36.6°C",
        resp: "17/min",
        spo2: "99%",
      },
      wardPreference: "W-140",
      bedPreference: "Any",
      expectedStay: "2 days",
      insuranceDetails: "Policy #SBI-23321, SBI Health Insurance",
      additionalNotes:
        "Patient reports increased itching at night. Prescribed topical corticosteroid cream and antihistamine.",
      patientPhoto:
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      requestorPhoto:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      alerts: ["Skin sensitivity"],
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
          Admission Approvals
        </h1>
      </div>

      {patients.map((patient) => (
        <PatientAdmissionCard patient={patient}></PatientAdmissionCard>
      ))}
    </div>
  );
};

export default FacultyAdmissionApprovals;
