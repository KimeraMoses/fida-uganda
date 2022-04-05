import React from "react";
import { Table, Thead, Tbody, Tr, Td } from "@chakra-ui/react";
import classes from "./Table.module.css";
import { TableHeadColumn } from "../../../Membership/Allocations/AllocationsTable/AllocationsTable";
import { formatDate } from "../../../../lib/data";

export const AssetsData = [
  {
    item: "Dell Inspiroin Laptop i5",
    person: "1 Nalubega Christine",
    location: "Lwengo Branch",
    dateAquired: "21/12/2021",
  },
  {
    item: "Dell Inspiroin Laptop i5",
    person: "1 Nalubega Christine",
    location: "Lwengo Branch",
    dateAquired: "21/12/2021",
  },
  {
    item: "Dell Inspiroin Laptop i5",
    person: "1 Nalubega Christine",
    location: "Lwengo Branch",
    dateAquired: "21/12/2021",
  },
  {
    item: "Dell Inspiroin Laptop i5",
    person: "1 Nalubega Christine",
    location: "Lwengo Branch",
    dateAquired: "21/12/2021",
  },
  {
    item: "Dell Inspiroin Laptop i5",
    person: "1 Nalubega Christine",
    location: "Lwengo Branch",
    dateAquired: "21/12/2021",
  },
];

const FidaAssetsTable = ({ data }) => {
  // const { data, searchResults } = props;
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
              <TableHeadColumn title="person in possesion" />
              <TableHeadColumn title="location" />
              <TableHeadColumn title="Aquisition Date" />
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => {
              // const formatedDate = new Date(
              //   item.createdAt
              // ).toLocaleDateString();
              return (
                <Tr>
                  <Td>{item.item}</Td>
                  <Td className={classes.data__purpose_primary_text}>
                    {item.people_in_possession[0]}
                  </Td>
                  <Td>{item.location}</Td>
                  <Td>{formatDate(item.createdAt)}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </div>
    </>
  );
};

export default FidaAssetsTable;
