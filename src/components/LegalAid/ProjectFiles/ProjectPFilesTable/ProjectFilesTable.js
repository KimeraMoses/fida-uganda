import React from "react";
import { Table, Thead, Tbody, Tr, Td } from "@chakra-ui/react";
import classes from "../../../HumanResource/FidaAssets/FidaAssetsTable/Table.module.css";
import { TableHeadColumn } from "../../../Membership/Allocations/AllocationsTable/AllocationsTable";
import { FolderIcon } from "../../../../assets/Icons/Icons";
import styles from "./Table.module.css";
import { formatDate } from "../../../../lib/data";

const ProjectTable = ({ data }) => {
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
            {data.map((item) => {
              return (
                <Tr>
                  <Td className={classes.primary_text_icon}>
                    <FolderIcon />
                    {item.project.name}
                  </Td>
                  <Td className={classes.data__purpose_primary_text}>
                    {item.createdBy?.full_name}
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

export default ProjectTable;
