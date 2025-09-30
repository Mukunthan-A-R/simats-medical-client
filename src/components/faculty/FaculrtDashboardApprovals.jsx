import React from "react";
import ApprovalDashboardButton from "./ApprovalDashboardButton";
import {
  ClipboardListIcon,
  BedIcon,
  PillIcon,
  FileTextIcon,
} from "lucide-react";

const FaculrtDashboardApprovals = () => {
  return (
    <div>
      <h2 className="text-lg font-medium mb-4">Approvals</h2>
      <div className="my-4">
        <ApprovalDashboardButton
          as={ClipboardListIcon}
          caseRecords={8}
          title="Case Records Approvals"
          onNavigate={(route) => console.log("Navigate to:", route)}
        />
        <ApprovalDashboardButton
          as={FileTextIcon}
          caseRecords={10}
          title={"Discharge Summaries Approvals"}
          onNavigate={(route) => console.log("Navigate to:", route)}
        ></ApprovalDashboardButton>
        <ApprovalDashboardButton
          as={BedIcon}
          caseRecords={4}
          title={"Admission Approvals"}
          onNavigate={(route) => console.log("Navigate to:", route)}
        ></ApprovalDashboardButton>
        <ApprovalDashboardButton
          as={PillIcon}
          caseRecords={1}
          title={"Prescription Approvals"}
          onNavigate={(route) => console.log("Navigate to:", route)}
        ></ApprovalDashboardButton>
      </div>
    </div>
  );
};

export default FaculrtDashboardApprovals;
