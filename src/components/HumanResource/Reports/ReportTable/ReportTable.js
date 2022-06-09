import React from "react";
import { Table, Thead, Tbody, Tr, Td, IconButton } from "@chakra-ui/react";
import classes from "../../FidaAssets/FidaAssetsTable/Table.module.css";
import { TableHeadColumn } from "../../../Membership/Allocations/AllocationsTable/AllocationsTable";
import { FolderIcon } from "../../../../assets/Icons/Icons";
import { formatDate } from "../../../../lib/data";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import withTable from "./../../../../hoc/withTable";

const ReportsTable = (props) => {
  const { data } = props;
  const navigate = useNavigate();
  const handleOpenFolder = (id) => {
    navigate(`/reports/${id}`);
  };

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
              <TableHeadColumn title={`Date Created`} />
              <TableHeadColumn title="Actions" />
            </Tr>
          </Thead>
          <Tbody>
            {data &&
              data.map((item) => {
                return (
                  <Tr key={item.id}>
                    <Td>
                      <div className={classes.primary_text_icon}>
                        <FolderIcon />
                        {item.name}
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
                          icon={<MdOutlineRemoveRedEye />}
                          onClick={() => handleOpenFolder(item.id)}
                        />
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

export default withTable(ReportsTable);
