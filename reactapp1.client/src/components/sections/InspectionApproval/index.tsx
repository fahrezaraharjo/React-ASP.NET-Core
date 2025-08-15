import React from "react";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";

interface ApprovalData {
  approvalPath: string;
  name?: string;
  date?: string;
  sign?: string;
  comment?: string;
}

const defaultApprovalData: ApprovalData[] = [
  { approvalPath: "Technical Certified Analyst", date: "12/06/2025" },
  { approvalPath: "Supervisor Contractor" },
  { approvalPath: "Field Representative Inspection" },
  { approvalPath: "PIC Analyst" },
  { approvalPath: "PIC Engineer" },
];

const InspectionApproval: React.FC = () => {
  return (
    <div className="flex flex-col bg-white border">
      {/* Header full width */}
      <div className="bg-gray-400 text-white font-bold px-4 py-2  text-center">
        INSPECTION APPROVAL
      </div>

      {/* Grid */}
      <div className="flex-1 overflow-auto p-2">
        <Grid data={defaultApprovalData} style={{ border: "none" }} resizable>
          <Column field="approvalPath" title="Approval Path" />
          <Column field="name" title="Name" />
          <Column field="date" title="Date" />
          <Column field="sign" title="Sign (Y/N)" />
          <Column field="comment" title="Comment" />
        </Grid>
      </div>
    </div>
  );
};

export default InspectionApproval;
