import React from "react";
import { Table, Thead, Tbody, Tr, Td } from "@chakra-ui/react";
import classes from "../../../HumanResource/FidaAssets/FidaAssetsTable/Table.module.css";
import { TableHeadColumn } from "../../../Membership/Allocations/AllocationsTable/AllocationsTable";
import { FolderIcon } from "../../../../assets/Icons/Icons";
import styles from "./Table.module.css";

export const ProjectData = [
  {
    name: "SGBV, Nakaseke District",
    created_by: "Andrew Tebandeke",
    date_modified: "Oct 14, 2021",
  },
  {
    name: "SGBV, Nakaseke District",
    created_by: "Andrew Tebandeke",
    date_modified: "Oct 14, 2021",
  },
  {
    name: "SGBV, Nakaseke District",
    created_by: "Andrew Tebandeke",
    date_modified: "Oct 14, 2021",
  },
  {
    name: "SGBV, Nakaseke District",
    created_by: "Andrew Tebandeke",
    date_modified: "Oct 14, 2021",
  },
  {
    name: "SGBV, Nakaseke District",
    created_by: "Andrew Tebandeke",
    date_modified: "Oct 14, 2021",
  },
  {
    name: "SGBV, Nakaseke District",
    created_by: "Andrew Tebandeke",
    date_modified: "Oct 14, 2021",
  },
];

const ProjectTable = () => {
  return (
    <>
      <div className={classes.approvals_table_wrapper}>
        <Table
          variant="striped"
          colorScheme="gray"
          className={classes.approval_table}
        >
          <Thead className={styles.table_header}>
            <Tr>
              <TableHeadColumn title="Project Name" />
              <TableHeadColumn title="Created By" />
              <TableHeadColumn title="Last Modified" />
            </Tr>
          </Thead>
          <Tbody>
            {ProjectData.map((item) => {
              return (
                <Tr>
                  <Td className={classes.primary_text_icon}>
                    <FolderIcon />
                    {item.name}
                  </Td>
                  <Td className={classes.data__purpose_primary_text}>
                    {item.created_by}
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

export default ProjectTable;
