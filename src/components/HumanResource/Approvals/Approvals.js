import React, { useEffect, useState } from "react";
import SectionHeader from "../../common/SectionHeader";
// import HRApprovedTable from "./ApprovalTable/ApprovedTable";
import { useApprovals } from "../../../hooks/useApprovals";
import Table from "../../common/TableComponent/Table";
import { allApprovalsTableColumns } from "../../../lib/tableColumns";

const HRApprovals = () => {
  const { data: approvals, isLoading } = useApprovals();
  // console.log(approvals)

  const [data, setData] = useState([]);
  useEffect(() => {
    setData([]);
    if (approvals?.approvals?.length) {
      const dataToSet = approvals?.approvals?.map((b) => {
        return {
          ...b,
          key: b?.id,
          full_name: b?.user?.full_name
            ? b.user.full_name
            : b?.registeredBy?.full_name
            ? b.registeredBy.full_name
            : b?.createdBy?.full_name
            ? b.createdBy.full_name
            : "N/A",
          designation: b?.user?.designation
            ? b.user.designation
            : b?.createdBy?.designation
            ? b.createdBy.designation
            : "N/A",
        };
      });
      setData(dataToSet);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [approvals]);

  return (
    <div>
      <SectionHeader title="Approvals" />
      <Table
        data={data}
        columns={allApprovalsTableColumns}
        loading={isLoading}
        showBtn={false}
        hideActions={true}
        // showActions={true}
        // onEditHandler={onEditHandler}
      />
      {/*<HRApprovedTable*/}
      {/*  isLoading={isLoading}*/}
      {/*   data={data ? data.approvals : null}*/}
      {/*  showBtn={false}*/}
      {/*  tableName={'Human resource approvals'}*/}
      {/*/>*/}
    </div>
  );
};

export default HRApprovals;
