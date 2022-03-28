import React from "react";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";
import LeaveManagementTable from "./LeaveManagementTable/LeaveManagementTable";

const Leavemanagement = () => {
  return (
    <>
      <SectionHeader title="Leave management" />
      <TableSearch showBtn={false} />
      <LeaveManagementTable />
  
    </>
  );
};

export default Leavemanagement;
