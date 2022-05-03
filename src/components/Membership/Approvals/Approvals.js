import React from "react";
import ApprovedTable from "./ApprovalTable/ApprovedTable";
import NewRequestsTable from "./ApprovalTable/NewRequestsTable";
import TableSearch from "../../common/table/TableSearch";
import SectionHeader from "../../common/SectionHeader";
import { useApprovals } from "../../../hooks/useApprovals";
import SubHeading from "./../../Tasks/SubHeading/SubHeading";

const Approvals = () => {
  const { data } = useApprovals();
  return (
    <div>
      <SectionHeader title="Approvals" />
      <TableSearch showBtn={false} />
      <SubHeading title="New Request" />
      {data?.approvals && <NewRequestsTable data={data?.approvals} />}
      <SubHeading title="Approved" />
      <ApprovedTable />
    </div>
  );
};

export default Approvals;
