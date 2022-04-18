import React from "react";
import { Table, Thead, Tbody, Tr, Td } from "@chakra-ui/react";
import classes from "./Table.module.css";
import { TableHeadColumn } from "../../../Membership/Approvals/ApprovalTable/ApprovedTable";

const AllocationsData = [
  {
    number: "1",
    title: "SGBV Refresher training",
    project: "SGBV Nakasongola",
    funder: "DFG",
    date: "02/02/2022",
    recorded_by: "Kimera Moses",
  },
  {
    number: "1",
    title: "SGBV Refresher training",
    project: "SGBV Nakasongola",
    funder: "DFG",
    date: "02/02/2022",
    recorded_by: "Kimera Moses",
  },
  {
    number: "1",
    title: "SGBV Refresher training",
    project: "SGBV Nakasongola",
    funder: "DFG",
    date: "02/02/2022",
    recorded_by: "Kimera Moses",
  },
  {
    number: "1",
    title: "SGBV Refresher training",
    project: "SGBV Nakasongola",
    funder: "DFG",
    date: "02/02/2022",
    recorded_by: "Kimera Moses",
  },
];

const AttendenceTable = () => {
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
          {AllocationsData.map((item) => {
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
                    {item.project}
                  </div>
                </Td>
                <Td className={classes.data_field}>
                  <div className={classes.data__primary_text}>
                    {item.funder}
                  </div>
                </Td>
                <Td className={classes.data_field}>
                  <div className={classes.data__primary_text}>{item.date}</div>
                </Td>
                <Td className={classes.data_field}>
                  <div className={classes.data__primary_text}>
                    {item.recorded_by}
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
