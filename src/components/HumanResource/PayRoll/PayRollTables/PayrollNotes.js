import React from "react";
import { Table, Thead, Tbody, Tr, Td } from "@chakra-ui/react";
import classes from "./Table.module.css";
import SectionHeader from "./SectionHeader";
import { TableHeadColumn } from "../../Approvals/ApprovalTable/ApprovedTable";

const PayrollNotesTable = ({ data }) => {
  return (
    <>
      <SectionHeader title="Payroll Notes" />
      <div className={classes.approvals_table_wrapper}>
        <Table
          size="sm"
          variant="striped"
          colorScheme="gray"
          className={classes.notifications_table}
        >
          <Thead
            className={`${classes.table_header} ${classes.table_text_lower}`}
          >
            <Tr>
              <TableHeadColumn title="Title" />
              <TableHeadColumn title="Month" />
              <TableHeadColumn title="Year" />
              <TableHeadColumn title="Date Written" />
              <TableHeadColumn title="Status" />
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => {
              return (
                <Tr>
                  <Td>{item.title}</Td>
                  <Td className={classes.data__purpose_primary_text}>
                    {item.month}
                  </Td>
                  <Td>{item.year}</Td>
                  <Td>{item.date_written}</Td>
                  <Td>
                    <div
                      className={`${classes.data__secondary_text} ${
                        classes.notes_status
                      } ${item.status ? classes.read : classes.unread}`}
                    >
                      <h6>{item.status ? "Read" : "Unread"}</h6>
                    </div>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </div>
    </>
  );
};

export default PayrollNotesTable;
