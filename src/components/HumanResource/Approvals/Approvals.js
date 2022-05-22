import React from "react";
import SectionHeader from "../../common/SectionHeader";
import HRApprovedTable from "./ApprovalTable/ApprovedTable";

const HRApprovals = () => {
  return (
    <div>
      <SectionHeader title="Approvals" />
      <HRApprovedTable
        // isLoading={isLoading}
        // data={data ? data.data : null}
        showBtn={false}
      />
    </div>
  );
};

export default HRApprovals;
