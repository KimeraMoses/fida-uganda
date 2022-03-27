import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import classes from "./Table.module.css";
import SectionHeader from "./SectionHeader";

export const ApprovalData = [
  {
    name: "Andrew Tebandeke",
    designation: "M & E",
    dateApplied: "Oct 14, 2021",
    dateApproved: "Oct 14, 2021",
    source: "Website",
    approvedBy: "Membership Co...",
    profession: "Lawyer",
    department: "Legal Aid",
  },
  {
    name: "Kimera Moses",
    designation: "Legal Officer",
    dateApplied: "Oct 14, 2021",
    dateApproved: "Oct 14, 2021",
    source: "Website",
    approvedBy: "Membership Co...",
    profession: "Lawyer",
    department: "Legal Aid",
  },
  {
    name: "Andrew Tebandeke",
    designation: "M & E",
    dateApplied: "Oct 14, 2021",
    dateApproved: "Oct 14, 2021",
    source: "Website",
    approvedBy: "Membership Co...",
    profession: "Lawyer",
    department: "Legal Aid",
  },
  {
    name: "Andrew Tebandeke",
    designation: "M & E",
    dateApplied: "Oct 14, 2021",
    dateApproved: "Oct 14, 2021",
    source: "Website",
    approvedBy: "Membership Co...",
    profession: "Lawyer",
    department: "Legal Aid",
  },
];

export const TableHeadColumn = (props) => {
  const { title } = props;
  return <Th>{title}</Th>;
};

const ApprovedTable = () => {
  return (
    <>
      <SectionHeader title="Approved" />
      <div className={classes.approvals_table_wrapper}>
        <Table
          size="sm"
          variant="striped"
          colorScheme="gray"
          className={classes.approval_table}
        >
          <Thead className={classes.table_header}>
            <Tr>
              <TableHeadColumn title="Applicants Name" />
              <TableHeadColumn title="Designantion" />
              <TableHeadColumn title="Date of application" />
              <TableHeadColumn title="Date Approved" />
              <TableHeadColumn title="Source" />
              <TableHeadColumn title="Approved By" />
            </Tr>
          </Thead>
          <Tbody>
            {ApprovalData.map((item) => {
              return (
                <Tr>
                  <Td>{item.name}</Td>
                  <Td className={classes.data__purpose_primary_text}>
                    {item.designation}
                  </Td>
                  <Td>{item.dateApplied}</Td>
                  <Td>{item.dateApproved}</Td>
                  <Td>{item.source}</Td>
                  <Td>{item.approvedBy}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </div>
    </>
  );
};

export default ApprovedTable;
