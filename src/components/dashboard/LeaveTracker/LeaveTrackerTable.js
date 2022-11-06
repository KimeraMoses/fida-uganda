import React, {useEffect, useState} from "react";
import classes from "./LeaveTrackerTable.module.css";
import Modal from "./../../common/Modal";
import LeaveApplicationForm from "./LeaveApplicationForm/LeaveApplicationForm";
import { schema } from "./LeaveApplicationForm/schema";
import {useAddLeaveRequest, useMyLeaveRequests} from "../../../hooks/useLeaveRequest";
// import LeaveTable from "../TrackerTable/LeaveTrackerTable";
import { useDisclosure } from "@chakra-ui/react";
import FormButton from "../../common/UI/FormButton/FormButton";
import { useLeaveRequests } from "../../../hooks/useLeaveRequest";
import Loader from "../../common/UI/Loader/Loader";
import {useSelector} from "react-redux";
import Table from "../../common/TableComponent/Table";
import {leaveRequestsTableColumns} from "../../../lib/tableColumns";
import daysDifference from "../../../lib/datediff";
import {getDay, getMonthName} from "../../../lib/date";
import {useNavigate} from "react-router-dom";

const LeaveTrackerTable = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, isLoading } = useLeaveRequests();
  const { data:myLeaveRequest, isLoading: loadingMyLeaves } = useMyLeaveRequests();
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
  const navigate = useNavigate();
  const handleLeaveClick = (item) => {
     console.log(item);
    navigate(
        `/application-summary?application-type=leave&id=${item.id}`);
  };
  //get user and designation
  const {user} = useSelector((state) => state.auth);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    setUserData([]);
    if (data?.leaves?.length) {
      const dataToSet = data?.leaves?.map((b) => {
        return {
          ...b,
          leave_details: `${daysDifference(b.from, b.to)}
                                         day(s) requested from  ${getDay(b.from)}
                                          ${getMonthName(b.from)}         to 
                                          ${getDay(b.to)} ${getMonthName(b.to)} `,


        };
      });
      setUserData(dataToSet);
    }
  }, [data]);

  const [myLeaveData, setMyLeaveData] = useState([]);
  useEffect(() => {
    setMyLeaveData([]);
    if (myLeaveRequest?.leaves?.length) {
      const dataToSet = myLeaveRequest?.leaves?.map((b) => {
        return {
          ...b,
          leave_details: `${daysDifference(b.from, b.to)}
                                         day(s) requested from  ${getDay(b.from)}
                                          ${getMonthName(b.from)}         to 
                                          ${getDay(b.to)} ${getMonthName(b.to)} `,


        };
      });
      setMyLeaveData(dataToSet);
    }
  }, [myLeaveRequest]);

  return (
    <>
      {(isLoading && loadingMyLeaves) ? (
        <Loader />
      ) : (

        <div className={classes.table_container}>
          {(user.designation !== "dop" && user.designation !== "humanResources" && user.designation !== "ceo") ?(
                  <Table
                      data={myLeaveData.slice().reverse()}
                      columns={leaveRequestsTableColumns}
                      loading={loadingMyLeaves}
                      // btnLabel="New Leave request"
                      // btnClick={onOpen}
                      showActions={true}
                      onViewHandler={handleLeaveClick}
                      tableName="My Leave requests"
                      hideSearch={true}
                  />
          //     <LeaveTable
          //   type="leave"
          //   action={props.handleLeaveClick}
          //   data={myLeaveRequest ? myLeaveRequest.leaves.slice().reverse() : null}
          //   isLoading={loadingMyLeaves}
          // />
          )
          :(
              <Table
                  data={userData.slice().reverse()}
                  columns={leaveRequestsTableColumns}
                  loading={isLoading}
                  // btnLabel="New Leave request"
                  // btnClick={onOpen}
                  showActions={true}
                  onViewHandler={handleLeaveClick}
                  tableName="Leave requests"
                  hideSearch={true}
              />
          // <LeaveTable
          //     type="leave"
          //     action={props.handleLeaveClick}
          //     data={data ? data.leaves.slice().reverse() : null}
          //     isLoading={isLoading}
          // />
          )}
          <div className={classes.leave_actions_wrapper}>
            <FormButton variant="filled" onClick={onOpen}>
              New Leave Request
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
