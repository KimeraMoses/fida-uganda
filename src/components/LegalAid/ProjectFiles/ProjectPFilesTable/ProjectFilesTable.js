import React from "react";
import { Table, Thead, Tbody, Tr, Td, IconButton } from "@chakra-ui/react";
import classes from "../../../HumanResource/FidaAssets/FidaAssetsTable/Table.module.css";
import { TableHeadColumn } from "../../../Membership/Allocations/AllocationsTable/AllocationsTable";
import { IoDocumentTextSharp } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
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
              <TableHeadColumn title="Actions" />
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => {
              return (
                <Tr>
                  <Td>
                    <div className={classes.primary_text_icon}>
                      <IoDocumentTextSharp />
                      {item?.filename}
                    </div>
                  </Td>
                  <Td className={classes.data__purpose_primary_text}>
                    {item.createdBy?.id}
                  </Td>
                  <Td>{formatDate(item.updateAt)}</Td>
                  <Td style={{ textAlign: "center" }}>
                    <div className={styles.table_actions_wrapperr}>
                      <div className={styles.table_actions_icon_wrapper}>
                        <IconButton
                          size="sm"
                          variant="outline"
                          aria-label="Download Item"
                          icon={<MdOutlineFileDownload />}
                          // onClick={() =>
                          //   handleDownload()
                          // }
                        />
                      </div>
                    </div>
                  </Td>
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
