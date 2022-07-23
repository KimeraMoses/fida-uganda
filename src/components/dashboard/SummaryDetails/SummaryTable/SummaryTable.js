import React from "react";
import { Table, Thead, Tbody, Tr, Td } from "@chakra-ui/react";
import classes from "./Table.module.css";
import { TableHeadColumn } from "../../../HumanResource/Approvals/ApprovalTable/ApprovedTable";


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
          </Tbody>
        </Table>
      </div>
    </>
  );
};

export default SummaryTable;
