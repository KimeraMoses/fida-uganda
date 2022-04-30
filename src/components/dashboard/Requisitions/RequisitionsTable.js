import React from "react";
import { Table, Thead, Tbody, Tr, Td } from "@chakra-ui/react";
import classes from "../TravelOrder/Table.module.css";
import { formatDate } from "../../../lib/data";
import { TableHeadColumn } from "../../HumanResource/Approvals/ApprovalTable/ApprovedTable";

const RequisitionTable = ({ data }) => {
  return (
    <>
      <div className={classes.table_wrapper}>
        <Table
          size="sm"
          variant="striped"
          colorScheme="gray"
          className={classes.table}
        >
          <Thead className={classes.table_header}>
            <Tr>
              <TableHeadColumn title="Applicant's Name" />
              <TableHeadColumn title="Project" />
              <TableHeadColumn title="Project Activity" />
              <TableHeadColumn title="Stage" />
              <TableHeadColumn title="Status" />
              <TableHeadColumn title="Date of Application" />
            </Tr>
          </Thead>
          <Tbody>
            {data &&
              data.map((item) => {
                return (
                  <Tr>
                    <Td>{item.createdBy && item.createdBy.full_name}</Td>
                    <Td>{item.project_activity}</Td>
                    <Td>{item.purpose}</Td>
                    <Td>{item.DOPApprovalStatus}</Td>
                    <Td>{item.DOPApprovalStatus}</Td>
                    <Td>{formatDate(item.updateAt)}</Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </div>
    </>
  );
};

export default RequisitionTable;
