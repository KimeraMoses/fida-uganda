import React from "react";
// import ApprovedTable from "./ApprovalTable/ApprovedTable";
import NewRequestsTable from "./ApprovalTable/NewRequestsTable";
import TableSearch from "../../common/table/TableSearch";
import SectionHeader from "../../common/SectionHeader";
import { useApprovals } from "../../../hooks/useApprovals";

const Approvals = () => {
  const { data } = useApprovals();
  return (
    <div>
      <SectionHeader title="Approvals" />
      <TableSearch showBtn={false} />
      {/* <p>{JSON.stringify(data?.approvals[data?.approvals.length - 1], null, 2)}</p> */}
      {data?.approvals && <NewRequestsTable data={data?.approvals} />}
      {/* <ApprovedTable /> */}
    </div>
  );
};

export default Approvals;
