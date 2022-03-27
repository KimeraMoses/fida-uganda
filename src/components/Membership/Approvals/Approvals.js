import React from "react";
import ApprovedTable from "./ApprovalTable/ApprovedTable";
import NewRequestsTable from "./ApprovalTable/NewRequestsTable";
import TableSearch from "../../common/table/TableSearch";
import SectionHeader from "../../common/SectionHeader";

const Approvals = () => {
  return (
    <div>
      <SectionHeader title="Approvals" />
      <TableSearch showBtn={false} />
      <NewRequestsTable />
      <ApprovedTable />
    </div>
  );
};

export default Approvals;
