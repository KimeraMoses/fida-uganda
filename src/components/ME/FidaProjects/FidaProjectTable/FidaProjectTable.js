import React from "react";
import { Table, Thead, Tbody, Tr, Td, IconButton } from "@chakra-ui/react";
import classes from "../../../HumanResource/FidaAssets/FidaAssetsTable/Table.module.css";
import { TableHeadColumn } from "../../../Membership/Allocations/AllocationsTable/AllocationsTable";
import { FolderIcon } from "../../../../assets/Icons/Icons";
import styles from "./Table.module.css";
import { MdOutlineRemoveRedEye, MdOutlineFileDownload } from "react-icons/md";
import { IoDocumentTextSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../../../lib/data";
import withTable from "../../../../hoc/withTable";

const FidaProjectTable = ({ isDocuments, data }) => {
  const navigate = useNavigate();
  const handleOpenFolder = (name) => {
    navigate(`/fida-projects/${name}`);
  };
  return (
    <>
      <div className={classes.approvals_table_wrapper}>
        <Table variant="striped" className={classes.approval_table}>
          <Thead className={classes.table_header}>
            <Tr>
              <TableHeadColumn title={isDocuments ? "Name" : "Project Name"} />
              <TableHeadColumn title="Created by" />
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
                      {/* <FolderIcon /> */}
                      {isDocuments ? <IoDocumentTextSharp /> : <FolderIcon />}
                      {item.name}
                    </div>
                  </Td>
                  <Td className={classes.data__purpose_primary_text}>
                    {item.createdBy.full_name}
                  </Td>
                  <Td>{formatDate(item.updateAt)}</Td>
                  <Td style={{ textAlign: "center" }}>
                    <div className={styles.table_actions_wrapperr}>
                      <div className={styles.table_actions_icon_wrapper}>
                        <IconButton
                          size="sm"
                          variant="outline"
                          aria-label="Open Item"
                          icon={
                            isDocuments ? (
                              <MdOutlineFileDownload />
                            ) : (
                              <MdOutlineRemoveRedEye />
                            )
                          }
                          onClick={() =>
                            handleOpenFolder(item.name.replace(/ /g, "-"))
                          }
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

export default withTable(FidaProjectTable);
