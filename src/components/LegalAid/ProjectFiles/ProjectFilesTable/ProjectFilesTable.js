import React from "react";
import { Table, Thead, Tbody, Tr, Td, IconButton } from "@chakra-ui/react";
import classes from "../../../HumanResource/FidaAssets/FidaAssetsTable/Table.module.css";
import { TableHeadColumn } from "../../../Membership/Allocations/AllocationsTable/AllocationsTable";
import { IoDocumentTextSharp } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import withTable from "./../../../../hoc/withTable";
import { formatDate } from "../../../../lib/data";

const ProjectFilestable = ({ data }) => {
  const navigate = useNavigate();
  const handleOpenFile = (id) => {
    navigate(`/project-files/documents/${id}`);
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
                <TableHeadColumn title="Created  By" />
                <TableHeadColumn title="Last Modified" />
                <TableHeadColumn title="Actions" />
              </Tr>
            </Thead>
            <Tbody>
              {data.map((item) => {
                return (
                    <Tr key={item.id}>
                      <Td>
                        <div className={classes.primary_text_icon}>
                          <IoDocumentTextSharp />
                          {item.filename}
                        </div>
                      </Td>
                      <Td>{item.createdBy.full_name}</Td>
                      <Td className={classes.data__purpose_primary_text}>
                        {formatDate(item.createdAt)}
                      </Td>
                      <Td className={classes.table_actions_wrapper}>
                        <div className={classes.table_actions_icon_wrapper}>
                          <IconButton
                              size="xs"
                              aria-label="Edit Item"
                              icon={<MdOutlineRemoveRedEye />}
                              onClick={() => handleOpenFile(item.id)}
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

export default withTable(ProjectFilestable);
