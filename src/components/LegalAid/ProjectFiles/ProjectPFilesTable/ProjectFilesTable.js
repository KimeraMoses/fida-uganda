import React from "react";
import { Table, Thead, Tbody, Tr, Td, IconButton } from "@chakra-ui/react";
import classes from "../../../common/table/TableStyles.module.css";
import { TableHeadColumn } from "../../../Membership/Allocations/AllocationsTable/AllocationsTable";
import { IoDocumentTextSharp } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import withTable from "./../../../../hoc/withTable";

const ProjectFilesTable = ({ data }) => {
  return (
    <>
      <div className={classes.table_wrapper}>
        <Table
          variant="striped"
          colorScheme="gray"
          size="sm"
          className={classes.table}
        >
          <Thead className={classes.table_header}>
            <Tr>
              <TableHeadColumn title="Project Name" />
              <TableHeadColumn title="Report Type" />
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
                      {item?.title}
                    </div>
                  </Td>
                  <Td>{item.type}</Td>
                  <Td>{item.date}</Td>
                  <Td style={{ textAlign: "center" }}>
                    <div className={classes.table_actions_icon_wrapper}>
                      <IconButton
                        size="sm"
                        variant="outline"
                        aria-label="Download Item"
                        icon={<MdOutlineRemoveRedEye />}
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

export default withTable(ProjectFilesTable);
