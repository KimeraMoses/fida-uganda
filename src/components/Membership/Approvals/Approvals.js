import React from "react";
import ApprovedTable from "./ApprovalTable/ApprovedTable";
import NewRequestsTable from "./ApprovalTable/NewRequestsTable";
import SectionHeader from "../../common/SectionHeader";
import { useApprovals } from "../../../hooks/useApprovals";
import SubHeading from "./../../Tasks/SubHeading/SubHeading";

const Approvals = () => {
  const { data } = useApprovals();
  return (
    <div>
      <SectionHeader title="Approvals" />
      {data?.approvals && (
        <NewRequestsTable
          showBtn={false}
          data={data?.approvals}
          subHeading={<SubHeading title="New Request" />}
          tableName="Approvals"
        />
      )}
      <SubHeading title="Approved" />
      <ApprovedTable />
    </div>
  );
};

export default Approvals;
