import React from "react";
import { Table, Thead, Tbody, Tr, Td } from "@chakra-ui/react";
import classes from "./Table.module.css";
import { TableHeadColumn } from "../../../Membership/Approvals/ApprovalTable/ApprovedTable";
import { formatDate } from "../../../../lib/data";
import sortByDate from "../../../../lib/sortByDate";
import withTable from "../../../../hoc/withTable";

const AttendenceTable = ({ data }) => {
  return (
    <div className={classes.allocations_table_wrapper}>
      <Table variant="striped" size="sm">
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
          {data &&
            data.length &&
            sortByDate(data).map((item, index) => {
              return (
                <Tr key={item.index}>
                  <Td className={classes.data_field}>
                    <div className={classes.data__primary_text}>
                      {index + 1}
                    </div>
                  </Td>
                  <Td className={classes.data_field}>
                    <div className={classes.data__primary_text}>
                      {item.title}
                    </div>
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

export default withTable(AttendenceTable);
