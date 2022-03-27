import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
} from "@chakra-ui/react";
import classes from "./Table.module.css";
import SectionHeader from "./SectionHeader";
import { ApprovalData, TableHeadColumn } from "./ApprovedTable";

const NewRequestsTable = () => {
  return (
    <>
      <SectionHeader title="New Requests" />
      <div className={classes.approvals_table_wrapper}>
        <Table
          size="sm"
          variant="striped"
          colorScheme="gray"
          className={classes.notifications_table}
        >
          <Thead className={classes.table_header}>
            <Tr>
              <TableHeadColumn title="Applicants Name" />
              <TableHeadColumn title="Designantion" />
              <TableHeadColumn title="Proffession" />
              <TableHeadColumn title="Department" />
              <TableHeadColumn title="Date of application" />
            </Tr>
          </Thead>
          <Tbody>
            {ApprovalData.map((item) => {
              return (
                <Tr>
                  <Td>{item.name}</Td>
                  <Td className={classes.data__purpose_primary_text}>
                    {item.designation}
                  </Td>
                  <Td>{item.profession}</Td>
                  <Td>{item.department}</Td>
                  <Td>{item.dateApplied}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </div>
    </>
  );
};

export default NewRequestsTable;
