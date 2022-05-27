import React from "react";
import classes from "./LeaveTrackerTable.module.css";
import Modal from "./../../common/Modal";
import LeaveApplicationForm from "./LeaveApplicationForm/LeaveApplicationForm";
import { useAddLeaveDays } from "../../../hooks/useLeaveTracker";
import TrackerTable from "../TrackerTable/TrackerTable";
import { useDisclosure } from "@chakra-ui/react";
import FormButton from "../../common/UI/FormButton/FormButton";
import { useLeaveRequests } from "../../../hooks/useLeaveRequest";

// export const Data = [
//   {
//     details: "5 Annual leave days requested from 15 to 20 May",
//     date: "May 10, 2022",
//     status: "Pending",
//   },
//   {
//     details: "5 Annual leave days requested from 15 to 20 May",
//     date: "May 10, 2022",
//     status: "Canceled",
//   },
//   {
//     details: "5 Annual leave days requested from 15 to 20 May",
//     date: "May 10, 2022",
//     status: "approved",
//   },
// ];

const LeaveTrackerTable = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, isLoading } = useLeaveRequests();
  const leaveApplicationInitialValues = {
    reason: "",
    address_on_leave: "",
    tel_on_leave: "",
  };

  return (
    <>
      <div className={classes.table_container}>
        <TrackerTable
          type="leave"
          action={props.handleLeaveClick}
          data={data ? data.leaves : null}
          isLoading={isLoading}
        />
        <div className={classes.leave_actions_wrapper}>
          <FormButton variant="filled" onClick={onOpen}>
            New Request
          </FormButton>
        </div>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          title="FIDA Leave Application Form"
        >
          <LeaveApplicationForm
            onClose={onClose}
            initialValues={leaveApplicationInitialValues}
            onSuccess={onClose}
            success={`Leave request added successfully`}
            useMutate={useAddLeaveDays}
          />
        </Modal>
      </div>
    </>
  );
};

export default LeaveTrackerTable;
