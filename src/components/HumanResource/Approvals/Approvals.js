import React from "react";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";
import HRApprovedTable from "./ApprovalTable/ApprovedTable";

const HRApprovals = () => {
  return (
    <div>
      <SectionHeader title="Approvals" />
      <TableSearch showBtn={false} />
      <HRApprovedTable />
    </div>
  );
};

export default HRApprovals;
