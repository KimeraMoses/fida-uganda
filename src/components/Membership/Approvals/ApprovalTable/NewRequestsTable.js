import React from "react";
import { Table, Thead, Tbody, Tr, Td } from "@chakra-ui/react";
import classes from "./Table.module.css";
// import SectionHeader from "./SectionHeader";
import { TableHeadColumn } from "./ApprovedTable";
import { formatDate } from "../../../../lib/data";

const NewRequestsTable = ({ data }) => {
  return (
    <>
      {/* <SectionHeader title="New Requests" /> */}
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
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </div>
    </>
  );
};

export default NewRequestsTable;
