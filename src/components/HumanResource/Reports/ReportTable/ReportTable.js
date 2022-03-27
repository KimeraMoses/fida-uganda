import React from "react";
import { Table, Thead, Tbody, Tr, Td } from "@chakra-ui/react";
import classes from "../../FidaAssets/FidaAssetsTable/Table.module.css";
import { TableHeadColumn } from "../../../Membership/Allocations/AllocationsTable/AllocationsTable";
import { FolderIcon } from "../../../../assets/Icons/Icons";

export const ReportsData = [
  {
    name: "SGBV, Nakaseke District Employees Report ",
    date_Created: "Mar 14, 2021",
    date_modified: "Oct 14, 2021",
  },
  {
    name: "SGBV, Nakaseke District Employees Report ",
    date_Created: "Mar 14, 2021",
    date_modified: "Oct 14, 2021",
  },
  {
    name: "SGBV, Nakaseke District Employees Report ",
    date_Created: "Mar 14, 2021",
    date_modified: "Oct 14, 2021",
  },
  {
    name: "SGBV, Nakaseke District Employees Report ",
    date_Created: "Mar 14, 2021",
    date_modified: "Oct 14, 2021",
  },
  {
    name: "SGBV, Nakaseke District Employees Report ",
    date_Created: "Mar 14, 2021",
    date_modified: "Oct 14, 2021",
  },
];

const ReportsTable = () => {
  return (
    <>
      <div className={classes.approvals_table_wrapper}>
        <Table
          variant="striped"
          colorScheme="gray"
          className={classes.approval_table}
        >
          <Thead className={classes.table_header}>
            <Tr>
              <TableHeadColumn title="Name" />
              <TableHeadColumn title="Date Created" />
              <TableHeadColumn title="Date Modified" />
            </Tr>
          </Thead>
          <Tbody>
            {ReportsData.map((item) => {
              return (
                <Tr>
                  <Td className={classes.primary_text_icon}>
                    <FolderIcon />
                    {item.name}
                  </Td>
                  <Td className={classes.data__purpose_primary_text}>
                    {item.date_Created}
                  </Td>
                  <Td>{item.date_modified}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </div>
    </>
  );
};

export default ReportsTable;
