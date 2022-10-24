import React from "react";
import NewRequestsTable from "./ApprovalTable/NewRequestsTable";
import SectionHeader from "../../common/SectionHeader";
import { useApprovals } from "../../../hooks/useApprovals";
import SubHeading from "./../../Tasks/SubHeading/SubHeading";
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
          tableName="Fida Assets"
          columns={ procurementApprovalTableColumns}
          hideActions
        />
        /* <NewRequestsTable
          data={data ? data.approvals : null}
          isLoading={isLoading}
          showBtn={false}
          subHeading={<SubHeading title="New Request" />}
          tableName="New approval requests"
        /> */
      )}
    </div>
  );
};

export default Approvals;
