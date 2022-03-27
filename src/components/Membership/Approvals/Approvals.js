import React from "react";
import ApprovedTable from "./ApprovalTable/ApprovedTable";
import NewRequestsTable from "./ApprovalTable/NewRequestsTable";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";

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
