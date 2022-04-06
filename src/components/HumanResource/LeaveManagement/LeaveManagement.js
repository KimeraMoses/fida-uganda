import React from "react";
import { useUsersLeaveTrackers } from "../../../hooks/useLeaveTracker";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";
import LeaveManagementTable from "./LeaveManagementTable/LeaveManagementTable";

const LeaveManagement = () => {
  const { data } = useUsersLeaveTrackers();

  return (
    <>
      <SectionHeader title="Leave management" />
      <TableSearch showBtn={false} />
      {data?.userTrackers && <LeaveManagementTable data={data?.userTrackers} />}
    </>
  );
};

export default LeaveManagement;
