import React from "react";
import { Table, Thead, Tbody, Tr, Td, IconButton } from "@chakra-ui/react";
import classes from "./Table.module.css";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { TableHeadColumn } from "./ApprovedTable";
import { formatDate } from "../../../../lib/data";
import withTable from "../../../../hoc/withTable";

const NewRequestsTable = ({ data }) => {
  return (
    <>
      <div className={classes.approvals_table_wrapper}>
        <Table
          size="sm"
          variant="striped"
          colorScheme="gray"
          className={classes.notifications_table}
        >
          <Thead className={classes.table_header}>
            <Tr>
              <TableHeadColumn title="Applicants Name" />
              <TableHeadColumn title="Designation" />
              <TableHeadColumn title="Approval Type" />
              <TableHeadColumn title="Date of application" />
              <TableHeadColumn title="Actions" />
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => {
              return (
                <Tr key={item.id}>
                  <Td>{item.registeredBy?.full_name}</Td>
                  <Td className={classes.data__purpose_primary_text}>
                    {item.registeredBy?.designation}
                  </Td>
                  <Td>{item.doc_type}</Td>
                  <Td>{formatDate(item.createdAt)}</Td>
                  <Td>
                    <div className={classes.table_actions_icon_wrapper}>
                      <IconButton
                        size="xs"
                        aria-label="View Item"
                        icon={<MdOutlineRemoveRedEye />}
                        onClick={() => console.log("Clicked")}
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

export default withTable(NewRequestsTable);
