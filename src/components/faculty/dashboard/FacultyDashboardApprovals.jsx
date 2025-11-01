import React from "react";
import ApprovalDashboardButton from "./ApprovalDashboardButton";
import {
  ClipboardListIcon,
  BedIcon,
  PillIcon,
  FileTextIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const FacultyDashboardApprovals = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="text-lg font-medium mb-4">Approvals</h2>
      <div className="my-4">
        <ApprovalDashboardButton
          as={ClipboardListIcon}
          caseRecords={8}
          title="Case Records Approvals"
          onNavigate={() => navigate("/faculty/case-record-approvals/123")}
        />
        <ApprovalDashboardButton
          as={FileTextIcon}
          caseRecords={10}
          title={"Discharge Summaries Approvals"}
          onNavigate={() =>
            navigate("/faculty/discharge-summary-approvals/123")
          }
        ></ApprovalDashboardButton>
        <ApprovalDashboardButton
          as={BedIcon}
          caseRecords={4}
          title={"Admission Approvals"}
          onNavigate={() => navigate("/faculty/admission-approvals/123")}
        ></ApprovalDashboardButton>
        <ApprovalDashboardButton
          as={PillIcon}
          caseRecords={1}
          title={"Prescription Approvals"}
          onNavigate={() => navigate("/faculty/prescription-approvals/123")}
        ></ApprovalDashboardButton>
      </div>
    </div>
  );
};

export default FacultyDashboardApprovals;
