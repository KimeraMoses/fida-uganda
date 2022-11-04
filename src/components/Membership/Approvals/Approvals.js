import React from "react";
import SectionHeader from "../../common/SectionHeader";
import { useApprovals } from "../../../hooks/useApprovals";
import Table from "../../common/TableComponent/Table";
import { procurementApprovalTableColumns } from "../../../lib/tableColumns";
import Loader from "../../common/UI/Loader/Loader";

const Approvals = () => {
  const { data, isLoading } = useApprovals();
  return (
    <div>
      <SectionHeader title="Approvals" />
      {isLoading ? (
        <Loader />
      ) : (
      <Table
          isLoading={isLoading}
          data={data?data?.approvals : null}
          showBtn={false}
          tableName="Approvals"
          columns={ procurementApprovalTableColumns}
          hideActions
        />

      )}
    </div>
  );
};

export default Approvals;
