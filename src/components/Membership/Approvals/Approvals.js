import React from "react";
import ApprovedTable from "./ApprovalTable/ApprovedTable";
import NewRequestsTable from "./ApprovalTable/NewRequestsTable";
import TableSearch from "../../common/table/TableSearch";
import SectionHeader from "../../common/SectionHeader";
import { useApprovals } from "../../../hooks/useApprovals";
import SubHeading from "./../../Tasks/SubHeading/SubHeading";

const Approvals = () => {
  const { data, isLoading } = useApprovals();
  return (
    <div>
      <SectionHeader title="Approvals" />
      <TableSearch showBtn={false} />
      <SubHeading title="New Request" />
      {data?.approvals && (
        <NewRequestsTable
          data={data ? data.approvals : null}
          isLoading={isLoading}
        />
      )}
      <SubHeading title="Approved" />
      <ApprovedTable
        data={data ? data.approvals : null}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Approvals;
