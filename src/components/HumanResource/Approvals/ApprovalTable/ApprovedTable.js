import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import classes from "./Table.module.css";

export const ApprovalData = [
  {
    name: "Andrew Tebandeke",
    email: "nalubega12@gmail.com",
    designation: "Lawyer",
    typeOfApproval: "FIDA IIMS APPROVAL",
    dateApplied: "01/01/2022",
  },
  {
    name: "Andrew Tebandeke",
    email: "nalubega12@gmail.com",
    designation: "Lawyer",
    typeOfApproval: "LEAVE APPLICATION",
    dateApplied: "01/01/2022",
  },
  {
    name: "Andrew Tebandeke",
    email: "nalubega12@gmail.com",
    designation: "Lawyer",
    typeOfApproval: "ADVANCE REQUEST",
    dateApplied: "01/01/2022",
  },
  {
    name: "Andrew Tebandeke",
    email: "nalubega12@gmail.com",
    designation: "Lawyer",
    typeOfApproval: "ADVANCE REQUEST",
    dateApplied: "01/01/2022",
  },
  {
    name: "Andrew Tebandeke",
    email: "nalubega12@gmail.com",
    designation: "Lawyer",
    typeOfApproval: "ADVANCE REQUEST",
    dateApplied: "01/01/2022",
  },
  {
    name: "Andrew Tebandeke",
    email: "nalubega12@gmail.com",
    designation: "Lawyer",
    typeOfApproval: "ADVANCE REQUEST",
    dateApplied: "01/01/2022",
  },
];

export const TableHeadColumn = (props) => {
  const { title } = props;
  return <Th>{title}</Th>;
};

const HRApprovedTable = () => {
  return (
    <>
      <div className={classes.approvals_table_wrapper}>
        <Table
          size="sm"
          variant="simple"
          colorScheme="gray"
          className={classes.approval_table}
        >
          <Thead className={classes.table_header}>
            <Tr>
              <TableHeadColumn title="Name" />
              <TableHeadColumn title="Email" />
              <TableHeadColumn title="Designation" />
              <TableHeadColumn title="Type of Approval" />
              <TableHeadColumn title="Date Applied" />
            </Tr>
          </Thead>
          <Tbody>
            {ApprovalData.map((item) => {
              return (
                <Tr>
                  <Td>{item.name}</Td>
                  <Td className={classes.data__purpose_primary_text}>
                    {item.email}
                  </Td>
                  <Td>{item.designation}</Td>
                  <Td>{item.typeOfApproval}</Td>
                  <Td>{item.dateApplied}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </div>
    </>
  );
};

export default HRApprovedTable;
