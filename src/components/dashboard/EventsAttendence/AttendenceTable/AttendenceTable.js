import React from "react";
import { Table, Thead, Tbody, Tr, Td } from "@chakra-ui/react";
import classes from "./Table.module.css";
import { TableHeadColumn } from "../../../Membership/Approvals/ApprovalTable/ApprovedTable";
import { formatDate } from "../../../../lib/data";

const AttendenceTable = ({ data }) => {
  return (
    <div className={classes.allocations_table_wrapper}>
      <Table variant="striped">
        <Thead className={classes.table_header}>
          <Tr>
            <TableHeadColumn title="No." />
            <TableHeadColumn title="Title of Event" />
            <TableHeadColumn title="Project" />
            <TableHeadColumn title="Funder" />
            <TableHeadColumn title="Date" />
            <TableHeadColumn title="Recorded by" />
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => {
            return (
              <Tr key={item.number}>
                <Td className={classes.data_field}>
                  <div className={classes.data__primary_text}>
                    {item.number}
                  </div>
                </Td>
                <Td className={classes.data_field}>
                  <div className={classes.data__primary_text}>{item.title}</div>
                </Td>
                <Td className={classes.data_field}>
                  <div className={classes.data__primary_text}>
                    {item?.project?.name}
                  </div>
                </Td>
                <Td className={classes.data_field}>
                  <div className={classes.data__primary_text}>
                    {item.funder}
                  </div>
                </Td>
                <Td className={classes.data_field}>
                  <div className={classes.data__primary_text}>
                    {formatDate(item.date)}
                  </div>
                </Td>
                <Td className={classes.data_field}>
                  <div className={classes.data__primary_text}>
                    {item?.registeredBy?.full_name}
                  </div>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </div>
  );
};

export default AttendenceTable;
