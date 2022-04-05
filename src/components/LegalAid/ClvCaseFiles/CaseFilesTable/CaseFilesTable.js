import React from "react";
import { Table, Thead, Tbody, Tr, Td } from "@chakra-ui/react";
import classes from "./Table.module.css";
import { TableHeadColumn } from "../../../Membership/Allocations/AllocationsTable/AllocationsTable";
import { caseFilesColumns } from "../../../../assets/tableColumns/cases";
import { formatDate } from "../../../../lib/data";

const CaseFilesTable = ({ data }) => {
  return (
    <>
      <div
        className={classes.approvals_table_wrapper}
        style={{ overflowX: "auto" }}
      >
        <Table
          variant="striped"
          size="sm"
          colorScheme="gray"
          className={classes.approval_table}
        >
          <Thead className={classes.table_header}>
            <Tr>
              {caseFilesColumns.map((column) => {
                return (
                  <TableHeadColumn
                    title={column.Headers}
                    key={column.accessor}
                  />
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => {
              return (
                <Tr key={item.id}>
                  <Td className={classes.primary_text_icon}>{item.id}</Td>
                  <Td className={classes.data__purpose_primary_text}>
                    {formatDate(item.createdAt)}
                  </Td>
                  <Td>{item.complainant.village}</Td>
                  <Td>{item.district}</Td>
                  <Td>{item.complainant.country}</Td>
                  <Td>{item.complainant.nin}</Td>
                  <Td>{item.type}</Td>
                  <Td>{formatDate(item.createdAt)}</Td>
                  <Td>{item.id}</Td>
                  <Td>{item.complainant.sex}</Td>
                  <Td>{item.complainant.name}</Td>
                  <Td>{item.complainant.age}</Td>
                  <Td>{item.complainant.numBeneficiaries}</Td>
                  <Td>{item.complainant.occupation}</Td>
                  <Td>{item.nature}</Td>
                  <Td>{item.action}</Td>
                  <Td>{item.nextVisit}</Td>
                  <Td>{item.officer}</Td>
                  <Td>{item.referredBy}</Td>
                  <Td>{item.reason}</Td>
                  <Td>{item.feedback}</Td>
                  <Td>{formatDate(item.createdAt)}</Td>
                  <Td>{item.complainant.phoneNumber}</Td>
                  <Td>{item.complainant.disability}</Td>
                  <Td>{item.respondentName}</Td>
                  <Td>{item.respondentPhone}</Td>
                  <Td>{item.fida}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </div>
    </>
  );
};

export default CaseFilesTable;
