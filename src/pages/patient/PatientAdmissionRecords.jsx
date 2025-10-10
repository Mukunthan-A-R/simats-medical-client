import React from "react";
import PatientAdmissionHistoryCard from "../../components/patient/PatientAdmissionHistoryCard";
import {
  ActivityIcon,
  ArrowLeftFromLineIcon,
  ArrowRightFromLineIcon,
  BedIcon,
  CheckCircleIcon,
  CheckIcon,
  ChevronLeftIcon,
  ClipboardCheckIcon,
  ClipboardListIcon,
  StethoscopeIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const PatientAdmissionRecords = () => {
  const navigate = new useNavigate();

  const admissionsData = [
    {
      id: "adm-002",
      admissionDate: "2023-08-10",
      dischargeDate: null,
      wardNumber: "W-205",
      bedNumber: "B-04",
      admittedUnder: "Dr. Robert Miller",
      department: "Pulmonology",
      dischargeStatus: "Active",
      reason: "Severe respiratory distress",
      diagnosis: "Acute Exacerbation of COPD",
      hasDischargeSummary: false,
    },
    {
      id: "adm-001",
      admissionDate: "2023-05-15",
      dischargeDate: "2023-05-22",
      wardNumber: "W-301",
      bedNumber: "B-12",
      admittedUnder: "Dr. Sarah Johnson",
      department: "Cardiology",
      dischargeStatus: "Completed",
      reason: "Chest pain and shortness of breath",
      diagnosis: "Unstable Angina",
      hasDischargeSummary: true,
      dischargeSummary: {
        chiefComplaints: "Chest pain and shortness of breath for 2 days",
        historyOfPresentIllness:
          "Patient presented with sudden onset of chest pain radiating to left arm, associated with shortness of breath and diaphoresis. Pain was described as crushing and rated 8/10 in severity.",
        pastMedicalHistory:
          "Hypertension (10 years), Type 2 Diabetes Mellitus (5 years), Hyperlipidemia (7 years)",
        medications: [
          {
            name: "Aspirin",
            dosage: "81mg",
            frequency: "Once daily",
          },
          {
            name: "Metoprolol",
            dosage: "25mg",
            frequency: "Twice daily",
          },
          {
            name: "Atorvastatin",
            dosage: "40mg",
            frequency: "Once daily at bedtime",
          },
          {
            name: "Nitroglycerin",
            dosage: "0.4mg",
            frequency: "As needed for chest pain",
          },
        ],
        labResults: [
          {
            test: "Troponin I",
            result: "0.8 ng/mL",
            reference: "<0.04 ng/mL",
            interpretation: "Elevated",
          },
          {
            test: "CK-MB",
            result: "12 ng/mL",
            reference: "<5 ng/mL",
            interpretation: "Elevated",
          },
          {
            test: "BNP",
            result: "420 pg/mL",
            reference: "<100 pg/mL",
            interpretation: "Elevated",
          },
          {
            test: "Creatinine",
            result: "1.1 mg/dL",
            reference: "0.7-1.3 mg/dL",
            interpretation: "Normal",
          },
        ],
        procedures: [
          {
            name: "Coronary Angiography",
            date: "2023-05-16",
            findings: "70% stenosis of LAD, 50% stenosis of RCA",
            performer: "Dr. James Wilson",
          },
          {
            name: "Echocardiogram",
            date: "2023-05-17",
            findings:
              "EF 45%, regional wall motion abnormality in anterior wall",
            performer: "Dr. Emily Carter",
          },
        ],
        hospitalCourse:
          "Patient was admitted to Cardiology unit and started on dual antiplatelet therapy, beta-blockers, and statins. Coronary angiography revealed significant LAD stenosis requiring PCI with drug-eluting stent placement. Post-procedure course was uneventful with resolution of symptoms. Patient was monitored for 48 hours post-procedure with no complications.",
        dischargeDiagnosis:
          "Unstable Angina, Coronary Artery Disease with LAD stenosis s/p PCI",
        dischargeMedications: [
          {
            name: "Aspirin",
            dosage: "81mg",
            frequency: "Once daily",
            duration: "Indefinite",
          },
          {
            name: "Clopidogrel",
            dosage: "75mg",
            frequency: "Once daily",
            duration: "12 months",
          },
          {
            name: "Metoprolol",
            dosage: "50mg",
            frequency: "Twice daily",
            duration: "Indefinite",
          },
          {
            name: "Atorvastatin",
            dosage: "80mg",
            frequency: "Once daily at bedtime",
            duration: "Indefinite",
          },
          {
            name: "Nitroglycerin",
            dosage: "0.4mg",
            frequency: "As needed for chest pain",
            duration: "Indefinite",
          },
        ],
        followUpInstructions: [
          {
            specialist: "Cardiologist (Dr. Sarah Johnson)",
            timeframe: "2 weeks",
            notes: "Bring all medications and discharge summary",
          },
          {
            specialist: "Primary Care Physician",
            timeframe: "1 month",
            notes: "For medication reconciliation and risk factor management",
          },
        ],
        activityRestrictions:
          "No heavy lifting (>10 lbs) for 1 week. May resume light activities as tolerated. Driving restricted for 3 days. May return to work in 2 weeks if desk job, 4 weeks if physical labor.",
        diet: "Low sodium, low fat diet. Limit caffeine and alcohol intake.",
        dischargingPhysician: "Dr. Sarah Johnson",
        attendingPhysician: "Dr. Robert Chen",
        signatures: {
          dischargingPhysician: {
            name: "Dr. Sarah Johnson",
            date: "2023-05-22",
            signature:
              "https://www.docsketch.com/assets/vip-signatures/vip-signature-3-c06e59b048f5b4727aea01411f5799efdfa1288a8aa0529131b1d901a4ee8bac.jpg",
          },
          attendingPhysician: {
            name: "Dr. Robert Chen",
            date: "2023-05-22",
            signature:
              "https://www.docsketch.com/assets/vip-signatures/vip-signature-2-a1d4eb79f6c9a06ccd1e5a1ec38f117f987aef3917e8a846c4c4a8e46c37708d.jpg",
          },
        },
      },
    },
    // Rehabilitation unit admission (previously rehabilitation center)
    {
      id: "adm-005",
      admissionDate: "2023-02-20",
      dischargeDate: "2023-03-15",
      wardNumber: "R-103",
      bedNumber: "B-07",
      admittedUnder: "Dr. Jessica Williams",
      department: "Physical Medicine and Rehabilitation",
      dischargeStatus: "Completed",
      reason: "Intensive rehabilitation following right femur ORIF",
      diagnosis: "Post-surgical rehabilitation of right femur fracture",
      hasDischargeSummary: true,
      relatedAdmissionId: "adm-004",
      activityLog: [
        {
          date: "2023-02-20",
          time: "02:45 PM",
          action: "Admission",
          description: "Patient admitted to Rehabilitation Unit",
          performedBy: "Dr. Jessica Williams",
          icon: <BedIcon size={14} className="text-white" />,
        },
        {
          date: "2023-02-21",
          time: "09:30 AM",
          action: "Initial Assessment",
          description: "Comprehensive rehabilitation assessment completed",
          performedBy: "Dr. Jessica Williams",
          icon: <ClipboardCheckIcon size={14} className="text-white" />,
        },
        {
          date: "2023-02-22",
          time: "10:00 AM",
          action: "Therapy Started",
          description: "Physical therapy program initiated",
          performedBy: "PT Team",
          icon: <ActivityIcon size={14} className="text-white" />,
        },
        {
          date: "2023-03-10",
          time: "11:15 AM",
          action: "Progress Assessment",
          description: "Patient showing significant improvement in mobility",
          performedBy: "Dr. Jessica Williams",
          icon: <CheckIcon size={14} className="text-white" />,
        },
        {
          date: "2023-03-14",
          time: "02:00 PM",
          action: "Discharge Planning",
          description: "Patient ready for discharge with home therapy plan",
          performedBy: "Dr. Jessica Williams",
          icon: <ClipboardListIcon size={14} className="text-white" />,
        },
        {
          date: "2023-03-15",
          time: "11:00 AM",
          action: "Discharge",
          description: "Patient discharged with home exercise program",
          performedBy: "Dr. Jessica Williams",
          icon: <CheckCircleIcon size={14} className="text-white" />,
        },
      ],
      dischargeSummary: {
        chiefComplaints: "Limited mobility and pain following right femur ORIF",
        historyOfPresentIllness:
          "Patient was transferred from Orthopedics department on February 20, 2023 following ORIF of right femur fracture. Patient sustained the fracture in a motor vehicle accident and required intensive rehabilitation services.",
        pastMedicalHistory: "No significant past medical history",
        medications: [
          {
            name: "Acetaminophen",
            dosage: "500mg",
            frequency: "Every 6 hours as needed for pain",
          },
          {
            name: "Oxycodone",
            dosage: "5mg",
            frequency: "Every 6 hours as needed for breakthrough pain",
          },
        ],
        labResults: [],
        procedures: [
          {
            name: "Physical Therapy",
            date: "February 21 - March 15, 2023",
            findings:
              "Progressive improvement in range of motion and weight bearing capacity",
            performer: "PT Department",
          },
          {
            name: "Occupational Therapy",
            date: "February 23 - March 13, 2023",
            findings: "Improvement in activities of daily living and self-care",
            performer: "OT Department",
          },
          {
            name: "Gait Training",
            date: "March 1 - March 15, 2023",
            findings:
              "Progressed from non-weight bearing to partial weight bearing with assistive device",
            performer: "PT Department",
          },
        ],
        hospitalCourse:
          "Patient was admitted to Rehabilitation Unit following ORIF of right femur. Initial assessment revealed significant limitations in mobility and activities of daily living. A comprehensive rehabilitation program was implemented including physical therapy, occupational therapy, and pain management. Patient demonstrated excellent progress throughout the rehabilitation course, advancing from non-weight bearing to partial weight bearing status with assistive devices. By discharge, patient demonstrated independence with mobility using crutches and ability to perform basic activities of daily living.",
        dischargeDiagnosis:
          "Status post ORIF right femur with successful rehabilitation course",
        dischargeMedications: [
          {
            name: "Acetaminophen",
            dosage: "500mg",
            frequency: "Every 6 hours as needed for pain",
            duration: "As needed",
          },
        ],
        followUpInstructions: [
          {
            specialist:
              "Physical Medicine & Rehabilitation (Dr. Jessica Williams)",
            timeframe: "2 weeks",
            notes: "For assessment of home program progress",
          },
          {
            specialist: "Orthopedic Surgeon (Dr. Michael Chang)",
            timeframe: "4 weeks",
            notes: "For surgical follow-up and X-ray",
          },
          {
            specialist: "Outpatient Physical Therapy",
            timeframe: "1 week",
            notes: "Continue therapy 3 times per week for 4 weeks",
          },
        ],
        activityRestrictions:
          "Partial weight bearing on right lower extremity with crutches. Gradually increase weight bearing as tolerated and as directed by physical therapist. No driving until cleared by physician. Avoid stairs when possible; use proper technique as instructed when necessary.",
        diet: "Regular diet with adequate protein and calcium intake to promote bone healing.",
        dischargingPhysician: "Dr. Jessica Williams",
        attendingPhysician: "Dr. Jessica Williams",
        signatures: {
          dischargingPhysician: {
            name: "Dr. Jessica Williams",
            date: "2023-03-15",
            signature:
              "https://www.docsketch.com/assets/vip-signatures/vip-signature-5-2c41c2be5a627cd74c4d6ce7b69a0d9b0e05aa7247c22a798a821852572787e9.jpg",
          },
          attendingPhysician: {
            name: "Dr. Jessica Williams",
            date: "2023-03-15",
            signature:
              "https://www.docsketch.com/assets/vip-signatures/vip-signature-5-2c41c2be5a627cd74c4d6ce7b69a0d9b0e05aa7247c22a798a821852572787e9.jpg",
          },
        },
        transferDetails: {
          transferredFrom: "Orthopedics Department",
          transferDate: "2023-02-20",
          transferTime: "02:45 PM",
          referringDoctor: {
            name: "Dr. Michael Chang",
            department: "Orthopedics",
            reason:
              "For intensive physical therapy and rehabilitation services",
            notes:
              "Patient requires specialized rehabilitation services following surgery",
          },
          rehabilitationProgram: {
            type: "Comprehensive Orthopedic Rehabilitation",
            duration: "23 days",
            components: [
              "Physical Therapy - 2x daily",
              "Occupational Therapy - 1x daily",
              "Pain Management",
              "Gait Training",
              "Therapeutic Exercise",
            ],
            outcomes:
              "Patient achieved partial weight bearing status and independence with assistive devices",
          },
        },
      },
    },
    {
      id: "adm-004",
      admissionDate: "2023-02-18",
      dischargeDate: "2023-02-20",
      wardNumber: "W-401",
      bedNumber: "B-15",
      admittedUnder: "Dr. Michael Chang",
      department: "Orthopedics",
      dischargeStatus: "Transferred",
      transferredTo: "Rehabilitation Unit",
      receivingDoctor: "Dr. Jessica Williams",
      receivingDoctorSpecialty: "Physical Medicine and Rehabilitation",
      transferReason:
        "For intensive physical therapy and rehabilitation services",
      transferNotes:
        "Patient requires specialized rehabilitation services following surgery",
      reason: "Fracture of right femur",
      diagnosis: "Compound Fracture",
      hasDischargeSummary: true,
      relatedAdmissionId: "adm-005",
      activityLog: [
        {
          date: "2023-02-18",
          time: "09:45 AM",
          action: "Admission",
          description: "Patient admitted to Orthopedics department",
          performedBy: "Dr. Michael Chang",
          icon: <BedIcon size={14} className="text-white" />,
        },
        {
          date: "2023-02-18",
          time: "11:30 AM",
          action: "Procedure",
          description: "ORIF of Right Femur performed",
          performedBy: "Dr. Michael Chang",
          icon: <StethoscopeIcon size={14} className="text-white" />,
        },
        {
          date: "2023-02-19",
          time: "10:15 AM",
          action: "Assessment",
          description:
            "Post-operative assessment - patient requires intensive rehabilitation",
          performedBy: "Dr. Michael Chang",
          icon: <ClipboardCheckIcon size={14} className="text-white" />,
        },
        {
          date: "2023-02-19",
          time: "02:30 PM",
          action: "Transfer Initiated",
          description: "Transfer to Rehabilitation Unit initiated",
          performedBy: "Dr. Michael Chang",
          icon: <ArrowRightFromLineIcon size={14} className="text-white" />,
        },
        {
          date: "2023-02-20",
          time: "09:00 AM",
          action: "Transfer Accepted",
          description: "Transfer request accepted by Rehabilitation Unit",
          performedBy: "Dr. Jessica Williams",
          icon: <CheckIcon size={14} className="text-white" />,
        },
        {
          date: "2023-02-20",
          time: "02:45 PM",
          action: "Transfer Completed",
          description: "Patient transferred to Rehabilitation Unit",
          performedBy: "Dr. Michael Chang",
          icon: <ArrowLeftFromLineIcon size={14} className="text-white" />,
        },
      ],
      dischargeSummary: {
        chiefComplaints:
          "Right thigh pain and inability to bear weight following motor vehicle accident",
        historyOfPresentIllness:
          "Patient was involved in a motor vehicle accident as a passenger. Patient sustained a right femur fracture when the vehicle was hit from the side.",
        pastMedicalHistory: "No significant past medical history",
        medications: [
          {
            name: "None",
            dosage: "",
            frequency: "",
          },
        ],
        labResults: [
          {
            test: "Hemoglobin",
            result: "13.5 g/dL",
            reference: "13.5-17.5 g/dL",
            interpretation: "Normal",
          },
          {
            test: "WBC",
            result: "12.5 x 10^9/L",
            reference: "4.5-11.0 x 10^9/L",
            interpretation: "Slightly Elevated",
          },
        ],
        procedures: [
          {
            name: "Open Reduction Internal Fixation (ORIF) of Right Femur",
            date: "2023-02-18",
            findings: "Successful fixation with intramedullary nail",
            performer: "Dr. Michael Chang",
          },
        ],
        hospitalCourse:
          "Patient underwent successful ORIF of right femur fracture. Post-operative course was uneventful. Patient was mobilized with physical therapy but requires intensive rehabilitation. Decision was made to transfer to Rehabilitation Unit for specialized care.",
        dischargeDiagnosis: "Right Femur Fracture s/p ORIF",
        dischargeMedications: [
          {
            name: "Acetaminophen",
            dosage: "500mg",
            frequency: "Every 6 hours as needed for pain",
            duration: "7 days",
          },
          {
            name: "Oxycodone",
            dosage: "5mg",
            frequency: "Every 6 hours as needed for breakthrough pain",
            duration: "5 days",
          },
        ],
        followUpInstructions: [
          {
            specialist: "Orthopedic Surgeon (Dr. Michael Chang)",
            timeframe: "2 weeks",
            notes: "For wound check and X-ray",
          },
        ],
        activityRestrictions:
          "Non-weight bearing on right lower extremity. Use assistive devices as instructed by physical therapy.",
        diet: "Regular diet with adequate protein and calcium intake.",
        dischargingPhysician: "Dr. Michael Chang",
        attendingPhysician: "Dr. Michael Chang",
        signatures: {
          dischargingPhysician: {
            name: "Dr. Michael Chang",
            date: "2023-02-20",
            signature:
              "https://www.docsketch.com/assets/vip-signatures/vip-signature-1-6d1b7a82d3b9d79e2d9b6096fabe3e61b4efbea4a2bc1dc0c2b21fc22cc45d0c.jpg",
          },
          attendingPhysician: {
            name: "Dr. Michael Chang",
            date: "2023-02-20",
            signature:
              "https://www.docsketch.com/assets/vip-signatures/vip-signature-1-6d1b7a82d3b9d79e2d9b6096fabe3e61b4efbea4a2bc1dc0c2b21fc22cc45d0c.jpg",
          },
        },
        transferDetails: {
          transferredTo: "Rehabilitation Unit",
          transferDate: "2023-02-20",
          transferTime: "02:45 PM",
          initiatedBy: {
            name: "Dr. Michael Chang",
            department: "Orthopedics",
            reason:
              "For intensive physical therapy and rehabilitation services",
            notes:
              "Patient requires specialized rehabilitation services following surgery",
          },
          acceptedBy: {
            name: "Dr. Jessica Williams",
            specialty: "Physical Medicine and Rehabilitation",
            date: "2023-02-20",
            time: "09:00 AM",
            notes: "Patient accepted for comprehensive rehabilitation program",
            signature:
              "https://www.docsketch.com/assets/vip-signatures/vip-signature-5-2c41c2be5a627cd74c4d6ce7b69a0d9b0e05aa7247c22a798a821852572787e9.jpg",
          },
        },
      },
    },
    {
      id: "adm-003",
      admissionDate: "2022-11-03",
      dischargeDate: "2022-11-15",
      wardNumber: "W-102",
      bedNumber: "B-08",
      admittedUnder: "Dr. Emily Rodriguez",
      department: "Gastroenterology",
      dischargeStatus: "Completed",
      reason: "Abdominal pain and vomiting",
      diagnosis: "Acute Pancreatitis",
      hasDischargeSummary: true,
      dischargeSummary: {
        chiefComplaints:
          "Severe abdominal pain and persistent vomiting for 2 days",
        historyOfPresentIllness:
          "Patient presented with sudden onset of severe epigastric pain radiating to the back, associated with nausea and vomiting. Pain was exacerbated by eating and not relieved by over-the-counter pain medications.",
        pastMedicalHistory:
          "Gallstones (diagnosed 1 year ago), Hypertension (5 years)",
        medications: [
          {
            name: "Lisinopril",
            dosage: "10mg",
            frequency: "Once daily",
          },
        ],
        labResults: [
          {
            test: "Lipase",
            result: "1200 U/L",
            reference: "10-60 U/L",
            interpretation: "Significantly Elevated",
          },
          {
            test: "Amylase",
            result: "450 U/L",
            reference: "30-110 U/L",
            interpretation: "Elevated",
          },
          {
            test: "WBC",
            result: "14.5 x 10^9/L",
            reference: "4.5-11.0 x 10^9/L",
            interpretation: "Elevated",
          },
          {
            test: "CRP",
            result: "180 mg/L",
            reference: "<5 mg/L",
            interpretation: "Significantly Elevated",
          },
        ],
        procedures: [
          {
            name: "Abdominal Ultrasound",
            date: "2022-11-04",
            findings:
              "Multiple gallstones, gallbladder wall thickening, enlarged pancreas with peripancreatic fluid",
            performer: "Dr. James Wilson",
          },
          {
            name: "CT Abdomen with contrast",
            date: "2022-11-05",
            findings:
              "Acute interstitial edematous pancreatitis, no necrosis, no pseudocyst",
            performer: "Dr. Patricia Martinez",
          },
          {
            name: "ERCP with sphincterotomy",
            date: "2022-11-08",
            findings: "Successful bile duct clearance, no residual stones",
            performer: "Dr. Emily Rodriguez",
          },
        ],
        hospitalCourse:
          "Patient was admitted with gallstone-induced acute pancreatitis. Initial management included NPO status, IV fluids, pain management, and antiemetics. ERCP with sphincterotomy was performed on day 5 of admission. Patient's symptoms gradually improved with resolution of pain and normalization of diet. Laparoscopic cholecystectomy was planned as an outpatient procedure.",
        dischargeDiagnosis: "Acute Gallstone Pancreatitis, Cholelithiasis",
        dischargeMedications: [
          {
            name: "Lisinopril",
            dosage: "10mg",
            frequency: "Once daily",
            duration: "Indefinite",
          },
          {
            name: "Pantoprazole",
            dosage: "40mg",
            frequency: "Once daily",
            duration: "30 days",
          },
          {
            name: "Acetaminophen",
            dosage: "500mg",
            frequency: "Every 6 hours as needed for pain",
            duration: "7 days",
          },
        ],
        followUpInstructions: [
          {
            specialist: "Gastroenterologist (Dr. Emily Rodriguez)",
            timeframe: "2 weeks",
            notes: "For follow-up and surgical planning",
          },
          {
            specialist: "General Surgeon",
            timeframe: "3 weeks",
            notes: "For evaluation for laparoscopic cholecystectomy",
          },
        ],
        activityRestrictions:
          "Avoid strenuous activity for 2 weeks. Resume normal activities as tolerated.",
        diet: "Low fat diet. Avoid alcohol completely. Small, frequent meals recommended.",
        dischargingPhysician: "Dr. Emily Rodriguez",
        attendingPhysician: "Dr. Emily Rodriguez",
        signatures: {
          dischargingPhysician: {
            name: "Dr. Emily Rodriguez",
            date: "2022-11-15",
            signature:
              "https://www.docsketch.com/assets/vip-signatures/vip-signature-6-4c9c0a0c4caef4be2ef9a8fcc5c7bb2d9f9e0f1b2c4c95f3b43cc97f6b0c3942.jpg",
          },
          attendingPhysician: {
            name: "Dr. Emily Rodriguez",
            date: "2022-11-15",
            signature:
              "https://www.docsketch.com/assets/vip-signatures/vip-signature-6-4c9c0a0c4caef4be2ef9a8fcc5c7bb2d9f9e0f1b2c4c95f3b43cc97f6b0c3942.jpg",
          },
        },
      },
    },
  ];

  const sortedAdmissions = [...admissionsData].sort((a, b) => {
    return (
      new Date(b.admissionDate).getTime() - new Date(a.admissionDate).getTime()
    );
  });

  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
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
        <h2 className="text-xl text-blue-900 font-medium">Admission Records</h2>
      </div>
      <div className="rounded-xl overflow-hidden">
        {sortedAdmissions.map((admission) => (
          <PatientAdmissionHistoryCard
            key={admission.id}
            admission={admission}
          />
        ))}
      </div>
    </div>
  );
};

export default PatientAdmissionRecords;
