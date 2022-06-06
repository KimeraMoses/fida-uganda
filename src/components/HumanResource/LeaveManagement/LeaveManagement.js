import React from "react";
import { useUsersLeaveTrackers } from "../../../hooks/useLeaveTracker";
import SectionHeader from "../../common/SectionHeader";
import LeaveManagementTable from "./LeaveManagementTable/LeaveManagementTable";

const LeaveManagement = () => {
  const { data } = useUsersLeaveTrackers();

  return (
    <>
      <SectionHeader title="Leave management" />
      {data?.userTrackers && (
        <LeaveManagementTable
          showBtn={false}
          data={data?.userTrackers}
          tableName="Leave management"
        />
      )}
    </>
  );
};

export default LeaveManagement;
