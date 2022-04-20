import React from "react";
import { Table, Thead, Tbody, Tr, Td } from "@chakra-ui/react";
import classes from "./Table.module.css";
import { TableHeadColumn } from "../../../../Membership/Approvals/ApprovalTable/ApprovedTable";

const Data = [
  {
    stage: "Stage 1",
    userName: "Kmera Moses",
    designation: "Legal Officer",
    status: "submitted",
    remarks: "No remarks",
    date: "10/03/2022",
  },
  {
    stage: "Stage 2",
    userName: "Kmera Moses",
    designation: "Legal Officer",
    status: "Approved",
    remarks: "No remarks",
    date: "10/03/2022",
  },
  {
    stage: "Stage 3",
    userName: "Kmera Moses",
    designation: "Legal Officer",
    status: "Pending",
    remarks: "No remarks",
    date: "10/03/2022",
  },
];

const SummaryTable = () => {
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
            {Data.map((item) => {
              return (
                <Tr>
                  <Td>{item.stage}</Td>
                  <Td>{item.userName}</Td>
                  <Td>{item.designation}</Td>
                  <Td>{item.status}</Td>
                  <Td>{item.remarks}</Td>
                  <Td>{item.date}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </div>
    </>
  );
};

export default SummaryTable;
