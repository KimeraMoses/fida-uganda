import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import classes from "./Table.module.css";
import { monthsLong } from "../../../assets/text";

export const ATData = [
  {
    name: "Gross Salary",
    type: "gross",
    jan: "100,000",
    feb: "100,000",
    mar: "100,000",
    apr: "100,000",
    may: "100,000",
    jun: "100,000",
    jul: "100,000",
    aug: "100,000",
    sep: "100,000",
    oct: "100,000",
    nov: "100,000",
    dec: "100,000",
  },
  {
    name: "Net Salary",
    type: "net",
    jan: "100,000",
    feb: "100,000",
    mar: "100,000",
    apr: "100,000",
    may: "100,000",
    jun: "100,000",
    jul: "100,000",
    aug: "100,000",
    sep: "100,000",
    oct: "100,000",
    nov: "100,000",
    dec: "100,000",
  },
  {
    name: "Advance",
    type: "adv",
    jan: "100,000",
    feb: "100,000",
    mar: "100,000",
    apr: "100,000",
    may: "100,000",
    jun: "100,000",
    jul: "100,000",
    aug: "100,000",
    sep: "100,000",
    oct: "100,000",
    nov: "100,000",
    dec: "100,000",
  },
  {
    name: "Balance",
    type: "bal",
    jan: "100,000",
    feb: "100,000",
    mar: "100,000",
    apr: "100,000",
    may: "100,000",
    jun: "100,000",
    jul: "100,000",
    aug: "100,000",
    sep: "100,000",
    oct: "100,000",
    nov: "100,000",
    dec: "100,000",
  },
];

export const TableHeadColumn = (props) => {
  const { title } = props;
  return <Th>{title}</Th>;
};

const AdvanceTrackerTable = () => {
  return (
    <>
      <div className={classes.table_container}>
        <Table size="sm" variant="simple" className={classes.table__wrapper}>
          <Thead className={classes.table_header}>
            <Tr>
              <TableHeadColumn title="Month" />
              {monthsLong.map((month) => {
                return <TableHeadColumn title={month.name} key={month.value} />;
              })}
            </Tr>
          </Thead>
          <Tbody>
            {ATData.map((item) => {
              return (
                <Tr>
                  <Td
                    className={`${
                      item.type === "gross"
                        ? classes.name_column_gross
                        : item.type === "net"
                        ? classes.name_column_net
                        : item.type === "adv"
                        ? classes.name_column_advance
                        : classes.name_column_bal
                    }`}
                  >
                    {item.name}
                  </Td>
                  <Td>{item.jan ? item.jan : "Pending"}</Td>
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
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </div>
    </>
  );
};

export default AdvanceTrackerTable;
