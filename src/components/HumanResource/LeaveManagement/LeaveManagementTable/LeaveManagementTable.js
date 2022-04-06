import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import classes from "./LeaveManagentTable.module.css";

export const TableHeadColumn = ({ title }) => {
  return <Th>{title}</Th>;
};

const LeaveManagementTable = ({ data }) => {
  return (
    <>
      <div className={classes.leave_mgt_table_wrapper}>
        <Table
          size="sm"
          variant="striped"
          colorScheme="gray"
          className={classes.approval_table}
        >
          <Thead className={classes.table_header}>
            <Tr>
              <TableHeadColumn title="Name" />
              <TableHeadColumn title="Annual Leave days" />
              <TableHeadColumn title="Maternal Leave days" />
              <TableHeadColumn title="Jan" />
              <TableHeadColumn title="Feb" />
              <TableHeadColumn title="Mar" />
              <TableHeadColumn title="April" />
              <TableHeadColumn title="May" />
              <TableHeadColumn title="Jun" />
              <TableHeadColumn title="Jul" />
              <TableHeadColumn title="Aug" />
              <TableHeadColumn title="Sept" />
              <TableHeadColumn title="Oct" />
              <TableHeadColumn title="Nov" />
              <TableHeadColumn title="Dec" />
              <TableHeadColumn title="Bal" />
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => {
              return (
                <Tr key={item.user?.id}>
                  <Td>{item.user?.full_name}</Td>
                  <Td>{item.annualLeaveDays}</Td>
                  <Td>{item.part_mart_leave_days}</Td>
                  <Td>{item.jan}</Td>
                  <Td>{item.feb}</Td>
                  <Td>{item.mar}</Td>
                  <Td>{item.apr}</Td>
                  <Td>{item.may}</Td>
                  <Td>{item.jun}</Td>
                  <Td>{item.jul}</Td>
                  <Td>{item.aug}</Td>
                  <Td>{item.sep}</Td>
                  <Td>{item.oct}</Td>
                  <Td>{item.nov}</Td>
                  <Td>{item.dec}</Td>
                  <Td>{item.balance}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </div>
    </>
  );
};

export default LeaveManagementTable;
