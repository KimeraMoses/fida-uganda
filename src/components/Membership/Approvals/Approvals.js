import React from "react";
import ApprovedTable from "./ApprovalTable/ApprovedTable";
import NewRequestsTable from "./ApprovalTable/NewRequestsTable";
import SectionHeader from "../../common/SectionHeader";
import { useApprovals } from "../../../hooks/useApprovals";
import SubHeading from "./../../Tasks/SubHeading/SubHeading";

const Approvals = () => {
  const { data, isLoading } = useApprovals();
  return (
    <div>
      <SectionHeader title="Approvals" />
      {data?.approvals && (
        <NewRequestsTable
          data={data ? data.approvals : null}
          isLoading={isLoading}
          showBtn={false}
          subHeading={<SubHeading title="New Request" />}
          tableName="New approval requests"
        />
      )}
    </div>
  );
};

export default Approvals;
