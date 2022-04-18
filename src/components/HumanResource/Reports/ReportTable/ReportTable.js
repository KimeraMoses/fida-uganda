import React from "react";
import { Table, Thead, Tbody, Tr, Td, IconButton } from "@chakra-ui/react";
import classes from "../../FidaAssets/FidaAssetsTable/Table.module.css";
import { TableHeadColumn } from "../../../Membership/Allocations/AllocationsTable/AllocationsTable";
import { FolderIcon } from "../../../../assets/Icons/Icons";
import { formatDate } from "../../../../lib/data";
import { MdEdit } from "react-icons/md";

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
              <TableHeadColumn title="Actions" />
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => {
              return (
                <Tr key={item.id}>
                  <Td>
                    <div className={classes.primary_text_icon}>
                      <FolderIcon />
                      {item.filename}
                    </div>
                  </Td>
                  <Td className={classes.data__purpose_primary_text}>
                    {formatDate(item.createdAt)}
                  </Td>
                  <Td className={classes.table_actions_wrapper}>
                    <div className={classes.table_actions_icon_wrapper}>
                      <IconButton
                        size="xs"
                        aria-label="Edit Item"
                        icon={<MdEdit />}
                        // onClick={() => onEditHandler(item)}
                      />
                    </div>
                    {/* {formatDate(item.updateAt)} */}
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

export default ReportsTable;
