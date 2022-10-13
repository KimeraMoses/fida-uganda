import React from "react";
import { Table, Thead, Tbody, Tr, Td } from "@chakra-ui/react";
import classes from "./Table.module.css";
import { TableHeadColumn } from "../../../HumanResource/Approvals/ApprovalTable/ApprovedTable";


const travelOrderData1 = [

  {
    stage: "1",
    userName: "Kityo Masanganzira",
    designation: "Dop",
    status: "Pending",
    remarks: "No remarks",
    date: "No date",
  },
  {
    stage: "2",
    userName: "Kityo Masanganzira",
    designation: "Accountant",
    status: "Pending",
    remarks: "No remarks",
    date: "No date",
  },
  {
    stage: "3",
    userName: "Kityo Masanganzira",
    designation: "Fleet manager",
    status: "Pending",
    remarks: "No remarks",
    date: "No date",
  },
];
const travelOrderData2 = [
  {
    stage: "2",
    userName: "Kityo Masanganzira",
    designation: "Accountant",
    status: "Pending",
    remarks: "No remarks",
    date: "No date",
  },
  {
    stage: "3",
    userName: "Kityo Masanganzira",
    designation: "Fleet manager",
    status: "Pending",
    remarks: "No remarks",
    date: "No date",
  },
];
const travelOrderData3 = [
  {
    stage: "3",
    userName: "Kityo Masanganzira",
    designation: "Fleet manager",
    status: "Pending",
    remarks: "No remarks",
    date: "No date",
  },
];

const requisitionData1 = [
    {
        stage: "1",
        userName: "David Balibali",
        designation: "Dop",
        status: "Pending",
        remarks: "No remarks",
        date: "No date",
    },
    {
        stage: "2",
        userName: "Kityo Masanganzira",
        designation: "Accountant",
        status: "Pending",
        remarks: "No remarks",
        date: "No date",
    },
  {
    stage: "3",
    userName: "Kityo Masanganzira",
    designation: "Ceo",
    status: "Pending",
    remarks: "No remarks",
    date: "No date",
  },
  {
    stage: "4",
    userName: "Kityo Masanganzira",
    designation: "Procurement Officer",
    status: "Pending",
    remarks: "No remarks",
    date: "No date",
  },
];
const requisitionData2 = [

  {
    stage: "2",
    userName: "Kityo Masanganzira",
    designation: "Accountant",
    status: "Pending",
    remarks: "No remarks",
    date: "No date",
  },
  {
    stage: "3",
    userName: "Kityo Masanganzira",
    designation: "Ceo",
    status: "Pending",
    remarks: "No remarks",
    date: "No date",
  },
  {
    stage: "4",
    userName: "Kityo Masanganzira",
    designation: "Procurement Officer",
    status: "Pending",
    remarks: "No remarks",
    date: "No date",
  },
];
const requisitionData3 = [
  {
    stage: "3",
    userName: "Kityo Masanganzira",
    designation: "Ceo",
    status: "Pending",
    remarks: "No remarks",
    date: "No date",
  },
  {
    stage: "4",
    userName: "Kityo Masanganzira",
    designation: "Procurement Officer",
    status: "Pending",
    remarks: "No remarks",
    date: "No date",
  },
];
const requisitionData4 = [
  {
    stage: "4",
    userName: "Kityo Masanganzira",
    designation: "procurement Officer",
    status: "Pending",
    remarks: "No remarks",
    date: "No date",
  },
];

const leaveData1 = [

  {
    stage: "1",
    userName: "Kityo Masanganzira",
    designation: "Dop",
    status: "Pending",
    remarks: "No remarks",
    date: "No date",
  },
  {
    stage: "2",
    userName: "Kityo Masanganzira",
    designation: "Human Resources",
    status: "Pending",
    remarks: "No remarks",
    date: "No date",
  },
  {
    stage: "3",
    userName: "Kityo Masanganzira",
    designation: "Ceo",
    status: "Pending",
    remarks: "No remarks",
    date: "No date",
  },
];
const leaveData2 = [
  {
    stage: "2",
    userName: "Kityo Masanganzira",
    designation: "Human Resources",
    status: "Pending",
    remarks: "No remarks",
    date: "No date",
  },
  {
    stage: "3",
    userName: "Kityo Masanganzira",
    designation: "Ceo",
    status: "Pending",
    remarks: "No remarks",
    date: "No date",
  },
];
const leaveData3 = [
  {
    stage: "3",
    userName: "Kityo Masanganzira",
    designation: "Ceo",
    status: "Pending",
    remarks: "No remarks",
    date: "No date",
  },
];

const advanceData1 = [
  {
    stage: "1",
    userName: "David Balibali",
    designation: "Dop",
    status: "Pending",
    remarks: "No remarks",
    date: "No date",
  },
  {
    stage: "2",
    userName: "Kityo Masanganzira",
    designation: "Accountant",
    status: "Pending",
    remarks: "No remarks",
    date: "No date",
  },
  {
    stage: "3",
    userName: "Kityo Masanganzira",
    designation: "Ceo",
    status: "Pending",
    remarks: "No remarks",
    date: "No date",
  },
  {
    stage: "4",
    userName: "Kityo Masanganzira",
    designation: "Finance",
    status: "Pending",
    remarks: "No remarks",
    date: "No date",
  },
];
const advanceData2 = [

  {
    stage: "2",
    userName: "Kityo Masanganzira",
    designation: "Accountant",
    status: "Pending",
    remarks: "No remarks",
    date: "No date",
  },
  {
    stage: "3",
    userName: "Kityo Masanganzira",
    designation: "Ceo",
    status: "Pending",
    remarks: "No remarks",
    date: "No date",
  },
  {
    stage: "4",
    userName: "Kityo Masanganzira",
    designation: "Finance",
    status: "Pending",
    remarks: "No remarks",
    date: "No date",
  },
];
const advanceData3 = [
  {
    stage: "3",
    userName: "Kityo Masanganzira",
    designation: "Ceo",
    status: "Pending",
    remarks: "No remarks",
    date: "No date",
  },
  {
    stage: "4",
    userName: "Kityo Masanganzira",
    designation: "Finance",
    status: "Pending",
    remarks: "No remarks",
    date: "No date",
  },
];
const advanceData4 = [
  {
    stage: "4",
    userName: "Kityo Masanganzira",
    designation: "Finance",
    status: "Pending",
    remarks: "No remarks",
    date: "No date",
  },
];


const SummaryTable = ({ data }) => {
  // console.log(data);

  return (
    <>
      <div className={classes.table_container}>
        <Table size="sm" variant="simple" className={classes.table__wrapper}>
          <Thead className={classes.table_header}>
            <Tr>
              <TableHeadColumn title="Stage" />
              <TableHeadColumn title="Username" />
              <TableHeadColumn title="Designation" />
              <TableHeadColumn title="Status" />
              <TableHeadColumn title="Remarks" />
              <TableHeadColumn title="Date of Action taken" />
            </Tr>
          </Thead>
          <Tbody>

            {data && data.travelOrder && data.travelOrder.approval_levels &&
                data.travelOrder.approval_levels.map((item, index) => {
                  return (
                      <Tr key={index}>
                        <Td>{index + 1}</Td>
                        <Td>{item.username}</Td>
                        <Td>{item.designation}</Td>
                        <Td>{item.status}</Td>
                        <Td>{item.remarks}</Td>
                        <Td>{new Date(item.date).toLocaleString()}</Td>
                      </Tr>
                  );
                })}

            {data && data.requisition && data.requisition.approval_levels &&
                data.requisition.approval_levels.map((item, index) => {
                  return (
                      <Tr key={index}>
                        <Td>{index + 1}</Td>
                        <Td>{item.username}</Td>
                        <Td>{item.designation}</Td>
                        <Td>{item.status}</Td>
                        <Td>{item.remarks}</Td>
                        <Td>{new Date(item.date).toLocaleString()}</Td>
                      </Tr>
                  );
                })}

            {data && data.leave && data.leave.approval_levels &&
                data.leave.approval_levels.map((item, index) => {
                  return (
                      <Tr key={index}>
                        <Td>{index + 1}</Td>
                        <Td>{item.username}</Td>
                        <Td>{item.designation}</Td>
                        <Td>{item.status}</Td>
                        <Td>{item.remarks}</Td>
                        <Td>{new Date(item.date).toLocaleString()}</Td>
                      </Tr>
                  );
                })}

            {data && data.advance && data.advance.approval_levels &&
                data.advance.approval_levels.map((item, index) => {
                  return (
                      <Tr key={index}>
                        <Td>{index + 1}</Td>
                        <Td>{item.username}</Td>
                        <Td>{item.designation}</Td>
                        <Td>{item.status}</Td>
                        <Td>{item.remarks}</Td>
                        <Td>{new Date(item.date).toLocaleString()}</Td>
                      </Tr>
                  );
                })}


            {/*check for travel order remarks*/}
            {(data?.travelOrder?.approval_levels?.length === 0) &&
                travelOrderData1.map((item, index) => {
                  return(
                      <Tr key={index}>
                        <Td> {item.stage}</Td>
                        <Td>{item.userName}</Td>
                        <Td>{item.designation}</Td>
                        <Td>{item.status}</Td>
                        <Td>{item.remarks}</Td>
                        <Td>{item.date}</Td>
                      </Tr>
                  );
                })
            }
            {(data?.travelOrder?.approval_levels?.length === 1) &&
                travelOrderData2.map((item, index) => {
                  return(
                      <Tr key={index}>
                        <Td> {item.stage}</Td>
                        <Td>{item.userName}</Td>
                        <Td>{item.designation}</Td>
                        <Td>{item.status}</Td>
                        <Td>{item.remarks}</Td>
                        <Td>{item.date}</Td>
                      </Tr>
                  );
                })
            }
            {(data?.travelOrder?.approval_levels?.length === 2) &&
                travelOrderData3.map((item, index) => {
                  return(
                      <Tr key={index}>
                        <Td> {item.stage}</Td>
                        <Td>{item.userName}</Td>
                        <Td>{item.designation}</Td>
                        <Td>{item.status}</Td>
                        <Td>{item.remarks}</Td>
                        <Td>{item.date}</Td>
                      </Tr>
                  );
                })
            }

            {/*check for requisition request remarks*/}
            {(data?.requisition?.approval_levels?.length === 0) &&
                requisitionData1.map((item, index) => {
                  return(
                      <Tr key={index}>
                        <Td> {item.stage}</Td>
                        <Td>{item.userName}</Td>
                        <Td>{item.designation}</Td>
                        <Td>{item.status}</Td>
                        <Td>{item.remarks}</Td>
                        <Td>{item.date}</Td>
                      </Tr>
                  );
                })
            }
            {(data?.requisition?.approval_levels?.length === 1) &&
                requisitionData2.map((item, index) => {
                  return(
                      <Tr key={index}>
                        <Td> {item.stage}</Td>
                        <Td>{item.userName}</Td>
                        <Td>{item.designation}</Td>
                        <Td>{item.status}</Td>
                        <Td>{item.remarks}</Td>
                        <Td>{item.date}</Td>
                      </Tr>
                  );
                })
            }
            {(data?.requisition?.approval_levels?.length === 2) &&
                requisitionData3.map((item, index) => {
                  return(
                      <Tr key={index}>
                        <Td> {item.stage}</Td>
                        <Td>{item.userName}</Td>
                        <Td>{item.designation}</Td>
                        <Td>{item.status}</Td>
                        <Td>{item.remarks}</Td>
                        <Td>{item.date}</Td>
                      </Tr>
                  );
                })
            }
            {(data?.requisition?.approval_levels?.length === 3) &&
                requisitionData4.map((item, index) => {
                  return(
                      <Tr key={index}>
                        <Td> {item.stage}</Td>
                        <Td>{item.userName}</Td>
                        <Td>{item.designation}</Td>
                        <Td>{item.status}</Td>
                        <Td>{item.remarks}</Td>
                        <Td>{item.date}</Td>
                      </Tr>
                  );
                })
            }

            {/*check for leave request remarks*/}
            {(data?.leave?.approval_levels?.length === 0) &&
                leaveData1.map((item, index) => {
                  return(
                      <Tr key={index}>
                        <Td> {item.stage}</Td>
                        <Td>{item.userName}</Td>
                        <Td>{item.designation}</Td>
                        <Td>{item.status}</Td>
                        <Td>{item.remarks}</Td>
                        <Td>{item.date}</Td>
                      </Tr>
                  );
                })
            }
            {(data?.leave?.approval_levels?.length === 1) &&
                leaveData2.map((item, index) => {
                  return(
                      <Tr key={index}>
                        <Td> {item.stage}</Td>
                        <Td>{item.userName}</Td>
                        <Td>{item.designation}</Td>
                        <Td>{item.status}</Td>
                        <Td>{item.remarks}</Td>
                        <Td>{item.date}</Td>
                      </Tr>
                  );
                })
            }
            {(data?.leave?.approval_levels?.length === 2) &&
                leaveData3.map((item, index) => {
                  return(
                      <Tr key={index}>
                        <Td> {item.stage}</Td>
                        <Td>{item.userName}</Td>
                        <Td>{item.designation}</Td>
                        <Td>{item.status}</Td>
                        <Td>{item.remarks}</Td>
                        <Td>{item.date}</Td>
                      </Tr>
                  );
                })
            }

            {/*check for advance request remarks*/}
            {(data?.advance?.approval_levels?.length === 0) &&
                advanceData1.map((item, index) => {
                  return(
                      <Tr key={index}>
                        <Td> {item.stage}</Td>
                        <Td>{item.userName}</Td>
                        <Td>{item.designation}</Td>
                        <Td>{item.status}</Td>
                        <Td>{item.remarks}</Td>
                        <Td>{item.date}</Td>
                      </Tr>
                  );
                })
            }
            {(data?.advance?.approval_levels?.length === 1) &&
                advanceData2.map((item, index) => {
                  return(
                      <Tr key={index}>
                        <Td> {item.stage}</Td>
                        <Td>{item.userName}</Td>
                        <Td>{item.designation}</Td>
                        <Td>{item.status}</Td>
                        <Td>{item.remarks}</Td>
                        <Td>{item.date}</Td>
                      </Tr>
                  );
                })
            }
            {(data?.advance?.approval_levels?.length === 2) &&
                advanceData3.map((item, index) => {
                  return(
                      <Tr key={index}>
                        <Td> {item.stage}</Td>
                        <Td>{item.userName}</Td>
                        <Td>{item.designation}</Td>
                        <Td>{item.status}</Td>
                        <Td>{item.remarks}</Td>
                        <Td>{item.date}</Td>
                      </Tr>
                  );
                })
            }
            {(data?.advance?.approval_levels?.length === 3) &&
                advanceData4.map((item, index) => {
                  return(
                      <Tr key={index}>
                        <Td> {item.stage}</Td>
                        <Td>{item.userName}</Td>
                        <Td>{item.designation}</Td>
                        <Td>{item.status}</Td>
                        <Td>{item.remarks}</Td>
                        <Td>{item.date}</Td>
                      </Tr>
                  );
                })
            }
          </Tbody>
        </Table>
      </div>
    </>
  );
};

export default SummaryTable;
