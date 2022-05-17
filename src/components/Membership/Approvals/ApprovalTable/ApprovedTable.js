import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import classes from "./Table.module.css";

export const TableHeadColumn = (props) => {
  const { title } = props;
  return <Th>{title}</Th>;
};

const ApprovedTable = ({ data, isLoading }) => {
  const approvedRecords = data
    ? data.filter((record) => record.isApproved === true)
    : null;
  return (
    <>
      <div className={classes.approvals_table_wrapper}>
        <Table size="sm" variant="striped" className={classes.approval_table}>
          <Thead className={classes.table_header}>
            <Tr>
              <TableHeadColumn title="Applicants Name" />
              {/* <TableHeadColumn title="Designantion" /> */}
              <TableHeadColumn title="Document Type" />
              <TableHeadColumn title="Amount" />
              <TableHeadColumn title="Net Pay" />
              <TableHeadColumn title="Date of application" />
              <TableHeadColumn title="Budget Year" />
              <TableHeadColumn title="DOPApprovalStatus" />
            </Tr>
          </Thead>
          <Tbody>
            {!isLoading &&
              approvedRecords &&
              approvedRecords.length > 0 &&
              approvedRecords.map((item) => {
                return (
                  <Tr>
                    <Td>{item.user.full_name}</Td>
                    <Td className={classes.data__purpose_primary_text}>
                      {item.doc_type}
                    </Td>
                    <Td>{item.amount}</Td>
                    <Td>{item.net_pay}</Td>
                    <Td>{new Date(item.createdAt).toLocaleDateString()}</Td>
                    <Td>{item.budget_year}</Td>
                    <Td>{item.DOPApprovalStatus}</Td>
                  </Tr>
                );
              })}
            {!isLoading && approvedRecords && approvedRecords.length === 0 && (
              <Tr>
                {" "}
                <Td colSpan={7} style={{ textAlign: "center" }}>
                  No records
                </Td>
              </Tr>
            )}
            {isLoading && (
              <Tr>
                {" "}
                <Td colSpan={7} style={{ textAlign: "center" }}>
                  Loading records
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </div>
    </>
  );
};

export default ApprovedTable;
