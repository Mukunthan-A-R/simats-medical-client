import { ChevronLeftIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import PatientReportFilter from "../../components/patient/PatientReportFilter";
import PatientsReportHeader from "../../components/patient/PatientsReportHeader";
import PatientReportTable from "../../components/patient/PatientReportTable";

const PatientReport = () => {
  const navigate = useNavigate();

  const reportsData = [
    {
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
      iconType: "TestTubeIcon",
      images: [
        {
          title: "Blood Smear Analysis",
          description:
            "Peripheral blood smear showing normal red blood cells, white blood cells, and platelets under 100x magnification.",
          url: "https://img.medscapestatic.com/pi/meds/ckb/89/38389.jpg",
          type: "image",
        },
      ],
      findings: [
        {
          name: "Hemoglobin",
          value: "14.2 g/dL",
          reference: "13.5–17.5 g/dL",
          status: "normal",
        },
        {
          name: "WBC Count",
          value: "7.5 x 10⁹/L",
          reference: "4.5–11.0 x 10⁹/L",
          status: "normal",
        },
        {
          name: "Platelet Count",
          value: "250 x 10⁹/L",
          reference: "150–450 x 10⁹/L",
          status: "normal",
        },
      ],
    },
    {
      id: "MR-2023-1190",
      date: "2023-05-15",
      time: "09:30 AM",
      type: "Laboratory",
      reportName: "Liver Function Test (LFT)",
      department: "Pathology",
      performedBy: "Lab Tech. Sarah Johnson",
      supervisedBy: "Dr. Emily Rodriguez",
      status: "Pending",
      findingsStatus: "pending",
      iconType: "TestTubeIcon",
      images: [],
      findings: [],
    },
    {
      id: "MR-2023-0879",
      date: "2023-03-22",
      time: "09:15 AM",
      type: "Laboratory",
      reportName: "Lipid Profile",
      department: "Pathology",
      performedBy: "Lab Tech. Jennifer Lee",
      supervisedBy: "Dr. Emily Rodriguez",
      status: "Completed",
      findingsStatus: "abnormal",
      iconType: "TestTubeIcon",
      images: [
        {
          title: "Lipid Profile Chart",
          description:
            "Graphical representation of patient's lipid values compared to reference ranges.",
          url: "https://www.researchgate.net/publication/343949968/figure/fig1/AS:931908042375169@1599691547511/Lipid-profile-of-the-study-population-The-data-shown-represent-the-mean-standard.png",
          type: "image",
        },
      ],
      findings: [
        {
          name: "Total Cholesterol",
          value: "210 mg/dL",
          reference: "<200 mg/dL",
          status: "abnormal",
        },
        {
          name: "LDL Cholesterol",
          value: "130 mg/dL",
          reference: "<100 mg/dL",
          status: "abnormal",
        },
        {
          name: "HDL Cholesterol",
          value: "45 mg/dL",
          reference: ">40 mg/dL",
          status: "normal",
        },
        {
          name: "Triglycerides",
          value: "175 mg/dL",
          reference: "<150 mg/dL",
          status: "abnormal",
        },
      ],
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
        <h1 className="text-xl font-semibold text-blue-900">Patient Report</h1>
      </div>
      <PatientReportFilter />

      <PatientsReportHeader></PatientsReportHeader>
      <PatientReportTable reports={reportsData} />
    </div>
  );
};

export default PatientReport;
