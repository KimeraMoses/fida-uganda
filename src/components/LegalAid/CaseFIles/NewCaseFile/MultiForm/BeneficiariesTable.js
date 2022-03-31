import React from "react";
import { Table, Thead, Tbody, Tr, Td } from "@chakra-ui/react";
import classes from "./Table.module.css";
import { TableHeadColumn } from "../../../../Membership/Allocations/AllocationsTable/AllocationsTable";

export const Data = [
  {
    num: 1,
    name: "Kigozi Nickson",
    age: 23,
    sex: "Male",
    location: "Kampala",
    phone: "+256777226644",
  },
  {
    num: 2,
    name: "Kigozi Nickson",
    age: 23,
    sex: "Male",
    location: "Kampala",
    phone: "+256777226644",
  },
];

const BenTable = () => {
  return (
    <>
      <div className={classes.approvals_table_wrapper}>
        <Table
          variant="striped"
          colorScheme="gray"
          size="sm"
          className={classes.approval_table}
        >
          <Thead className={classes.table_header}>
            <Tr>
              <TableHeadColumn title="No" />
              <TableHeadColumn title="Name" />
              <TableHeadColumn title="Age" />
              <TableHeadColumn title="Sex" />
              <TableHeadColumn title="Location" />
              <TableHeadColumn title="Tel No." />
            </Tr>
          </Thead>
          <Tbody>
            {Data.map((item) => {
              return (
                <Tr>
                  <Td>{item.num}</Td>
                  <Td className={classes.primary_text_icon}>{item.name}</Td>
                  <Td className={classes.data__purpose_primary_text}>
                    {item.age}
                  </Td>
                  <Td>{item.sex}</Td>
                  <Td>{item.location}</Td>
                  <Td>{item.phone}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </div>
    </>
  );
};

export default BenTable;
