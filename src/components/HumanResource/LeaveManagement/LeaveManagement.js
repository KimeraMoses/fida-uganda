import React from "react";
import { useUsersLeaveTrackers } from "../../../hooks/useLeaveTracker";
import SectionHeader from "../../common/SectionHeader";
import LeaveManagementTable from "./LeaveManagementTable/LeaveManagementTable";
import Loader from "./../../common/UI/Loader/Loader";

const LeaveManagement = () => {
  const { data, isLoading } = useUsersLeaveTrackers();

  return (
    <>
      <SectionHeader title="Leave management" />
      {isLoading ? (
        <Loader />
      ) : (
        data?.userTrackers && (
          <LeaveManagementTable
            showBtn={false}
            data={data?.userTrackers}
            tableName="Leave management"
          />
        )
      )}
    </>
  );
};

export default LeaveManagement;
