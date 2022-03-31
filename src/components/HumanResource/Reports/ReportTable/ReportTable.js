import React from "react";
import { Table, Thead, Tbody, Tr, Td } from "@chakra-ui/react";
import classes from "../../FidaAssets/FidaAssetsTable/Table.module.css";
import { TableHeadColumn } from "../../../Membership/Allocations/AllocationsTable/AllocationsTable";
import { FolderIcon } from "../../../../assets/Icons/Icons";
import { formatDate } from "../../../../lib/data";

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

const ReportsTable = ({ data }) => {
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
            {data.map((item) => {
              return (
                <Tr key={item.id}>
                  <Td className={classes.primary_text_icon}>
                    <FolderIcon />
                    {item.name}
                  </Td>
                  <Td className={classes.data__purpose_primary_text}>
                    {formatDate(item.createdAt)}
                  </Td>
                  <Td>{formatDate(item.updateAt)}</Td>
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
