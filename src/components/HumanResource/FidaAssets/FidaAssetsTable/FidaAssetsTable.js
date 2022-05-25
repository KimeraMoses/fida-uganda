import React from "react";
import { Table, Thead, Tbody, Tr, Td } from "@chakra-ui/react";
import classes from "./Table.module.css";
import { TableHeadColumn } from "../../../Membership/Allocations/AllocationsTable/AllocationsTable";
import { formatDate } from "../../../../lib/data";
import sortByDate from "../../../../lib/sortByDate";
import withTable from "./../../../../hoc/withTable";

const FidaAssetsTable = ({ data }) => {
  return (
    <>
      <div className={classes.approvals_table_wrapper}>
        <Table
          variant="simple"
          colorScheme="gray"
          className={classes.approval_table}
        >
          <Thead className={classes.table_header}>
            <Tr>
              <TableHeadColumn title="Item" />
              <TableHeadColumn title="person in possession" />
              <TableHeadColumn title="location" />
              <TableHeadColumn title="Acquisition Date" />
            </Tr>
          </Thead>
          <Tbody>
            {sortByDate(data).map((item) => {
              return (
                <Tr>
                  <Td>{item.name}</Td>
                  <Td>{item.person_in_possession}</Td>
                  <Td>{item.location}</Td>
                  <Td>{formatDate(item.date_delivered)}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </div>
    </>
  );
};

export default withTable(FidaAssetsTable);
