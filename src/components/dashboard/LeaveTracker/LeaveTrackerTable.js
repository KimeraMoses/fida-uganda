import React from "react";
import classes from "./LeaveTrackerTable.module.css";
import Modal from "./../../common/Modal";
import LeaveApplicationForm from "./LeaveApplicationForm/LeaveApplicationForm";
import { schema } from "./LeaveApplicationForm/schema";
import {useAddLeaveRequest} from "../../../hooks/useLeaveRequest";
import LeaveTable from "../TrackerTable/LeaveTrackerTable";
import { useDisclosure } from "@chakra-ui/react";
import FormButton from "../../common/UI/FormButton/FormButton";
import { useLeaveRequests } from "../../../hooks/useLeaveRequest";
import Loader from "../../common/UI/Loader/Loader";
import {useSelector} from "react-redux";

const LeaveTrackerTable = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, isLoading } = useLeaveRequests();
  const leaveApplicationInitialValues = {
    reason: "",
    address_on_leave: "",
    from: "",
    to: "",
    month_of_application: "",
    tel_on_leave: "",
    duration_type: "",
    details: "",
  };

  //get user and designation
  const {user} = useSelector((state) => state.auth);

  // const { data:myLeaveRequest } = useMyLeaveRequests();
  // console.log(myLeaveRequest)
  // console.log(data)

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (

        <div className={classes.table_container}>
          {(user.designation !== "dop" && user.designation !== "humanResources" && user.designation !== "ceo") ?(
          <LeaveTable
            type="leave"
            action={props.handleLeaveClick}
            data={data ? data.leaves : null}
            isLoading={isLoading}
          />
          )
          :(
          <LeaveTable
              type="leave"
              action={props.handleLeaveClick}
              data={data ? data.leaves : null}
              isLoading={isLoading}
          />
          )}
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
              validationSchema={schema}
              onSuccess={onClose}
              success={`Leave request added successfully`}
              useMutate={useAddLeaveRequest}
            />
          </Modal>
        </div>

      )}
    </>
  );
};

export default LeaveTrackerTable;
