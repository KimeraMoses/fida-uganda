import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import classes from "./LeaveTrackerTable.module.css";
import { monthsLong } from "../../../assets/text";
import Modal from "./../../common/Modal";
import { MdAdd } from "react-icons/md";
import LeaveApplicationForm from "./LeaveApplicationForm/LeaveApplicationForm";
import { useAddLeaveDays } from "../../../hooks/useLeaveTracker";

export const LTData = [
  {
    name: "Andrew Tebandeke",
    days: 21,
    pdays: 10,
    jan: "4th-10th",
    feb: 0,
    mar: "pending",
    apr: "pending",
    may: "",
    jun: "",
    jul: "",
    aug: "",
    sep: "",
    oct: "",
    nov: "",
    dec: "",
    bal: 27,
  },
];

export const TableHeadColumn = (props) => {
  const { title } = props;
  return <Th>{title}</Th>;
};

const LeaveTrackerTable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const LeaveRequest = () => {
    return (
      <IconButton
        size="xs"
        aria-label="Add Item"
        icon={<MdAdd />}
        onClick={onOpen}
      />
    );
  };

  const leaveApplicationInitialValues = {
    reason: "",
    address_on_leave: "",
    tel_on_leave: "",
  };
  return (
    <>
      <div className={classes.table_container}>
        <Table size="sm" variant="simple" className={classes.table__wrapper}>
          <Thead className={classes.table_header}>
            <Tr>
              <TableHeadColumn title="Name" />
              <TableHeadColumn title="Annual Leave days" />
              <TableHeadColumn title="Peternal/Maternal Leave days" />
              {monthsLong.map((month) => {
                return <TableHeadColumn title={month.name} key={month.value} />;
              })}
              <TableHeadColumn title="Balance" />
            </Tr>
          </Thead>
          <Tbody>
            {LTData.map((item) => {
              return (
                <Tr>
                  <Td className={classes.name_column}>{item.name}</Td>
                  <Td className={classes.data__purpose_primary_text}>
                    {item.days}
                  </Td>
                  <Td className={classes.partnal_days_column}>{item.pdays}</Td>
                  <Td className={classes.table_column_approved}>{item.jan}</Td>
                  <Td>{item.feb}</Td>
                  <Td className={classes.table_column_pending_approval}>
                    {item.mar}
                  </Td>
                  <Td className={classes.table_column_pending_approval}>
                    {item.apr}
                  </Td>
                  <Td>{item.may ? item.may : <LeaveRequest />}</Td>
                  <Td>{item.jun ? item.jun : <LeaveRequest />}</Td>
                  <Td>{item.jul ? item.jul : <LeaveRequest />}</Td>
                  <Td>{item.aug ? item.aug : <LeaveRequest />}</Td>
                  <Td>{item.sep ? item.sep : <LeaveRequest />}</Td>
                  <Td>{item.oct ? item.oct : <LeaveRequest />}</Td>
                  <Td>{item.nov ? item.nov : <LeaveRequest />}</Td>
                  <Td>{item.dec ? item.dec : <LeaveRequest />}</Td>
                  <Td>{item.bal}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
        <Modal
          //   size="2xl"
          isOpen={isOpen}
          onClose={onClose}
          title="FIDA Leave Application Form"
        >
          <LeaveApplicationForm
            onClose={onClose}
            initialValues={leaveApplicationInitialValues}
            // validationSchema={}
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
