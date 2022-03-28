import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import classes from "./LeaveManagentTable.module.css";

export const LeaveData = [
  {
    name: "Male Staff",
    annual_lv_days: 21,
    maternal_lv_days: 10,
    jan: 4,
    feb: 0,
    mar: 5,
    apr: 3,
    may: 6,
    jun: 9,
    jul: 0,
    aug: 0,
    sept: 5,
    nov: 5,
    dec: 0,
    balance: 77,
  },
  {
    name: "Female Staff",
    annual_lv_days: 21,
    maternal_lv_days: 10,
    jan: 4,
    feb: 0,
    mar: 5,
    apr: 3,
    may: 6,
    jun: 9,
    jul: 0,
    aug: 0,
    sept: 5,
    oct: 0,
    nov: 5,
    dec: 0,
    balance: 77,
  },
  {
    name: "Female Staff",
    annual_lv_days: 21,
    maternal_lv_days: 10,
    jan: 4,
    feb: 0,
    mar: 5,
    apr: 3,
    may: 6,
    jun: 9,
    jul: 0,
    aug: 0,
    sept: 5,
    oct: 0,
    nov: 5,
    dec: 0,
    balance: 77,
  },
  
];

export const TableHeadColumn = (props) => {
  const { title } = props;
  return <Th>{title}</Th>;
};

const LeaveManagementTable = () => {
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
            {LeaveData.map((item) => {
              return (
                <Tr>
                  <Td>{item.name}</Td>
                  <Td>{item.annual_lv_days}</Td>
                  <Td>{item.maternal_lv_days}</Td>
                  <Td>{item.jan}</Td>
                  <Td>{item.feb}</Td>
                  <Td>{item.mar}</Td>
                  <Td>{item.apr}</Td>
                  <Td>{item.may}</Td>
                  <Td>{item.jun}</Td>
                  <Td>{item.jul}</Td>
                  <Td>{item.aug}</Td>
                  <Td>{item.sept}</Td>
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
