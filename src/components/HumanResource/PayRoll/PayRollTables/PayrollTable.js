import React from "react";
import { Table, Thead, Tbody, Tr, Td } from "@chakra-ui/react";
import classes from "../../../Membership/Allocations/AllocationsTable/AllocationsTable.module.css";
import styles from "./Table.module.css";
import { TableHeadColumn } from "../../../Membership/Allocations/AllocationsTable/AllocationsTable";

export const PayrollData = [
  {
    name: "Andrew Tebandeke",
    salary: "800,000",
    recruitmentDate: "14/APR/2020",
    advance: "350,000",
    Balance: "45000000",
    role: "Lawyer",
    paid: true,
  },
  {
    name: "Andrew Tebandeke",
    salary: "800,000",
    recruitmentDate: "14/APR/2020",
    advance: "350,000",
    Balance: "45000000",
    role: "Lawyer",
    paid: false,
  },
  {
    name: "Andrew Tebandeke",
    salary: "800,000",
    recruitmentDate: "14/APR/2020",
    advance: "350,000",
    Balance: "45000000",
    role: "Lawyer",
    paid: true,
  },
  {
    name: "Andrew Tebandeke",
    salary: "800,000",
    recruitmentDate: "14/APR/2020",
    advance: "350,000",
    Balance: "45000000",
    role: "Lawyer",
    paid: false,
  },
  
];

const PayrollTable = () => {
  return (
    <>
      <div className={classes.allocations_table_wrapper}>
        <Table
          variant="simple"
          colorScheme="gray"
          className={classes.approval_table}
        >
          <Thead className={styles.table_header}>
            <Tr>
              <TableHeadColumn title="Name" secondaryText="Role" />
              <TableHeadColumn title="Salary (UGX)" secondaryText="" />
              <TableHeadColumn
                title="payment Status"
                secondaryText="Recruitment Date"
              />
              <TableHeadColumn
                title="Advance (UGX)"
                secondaryText="Balance (UGX)"
              />
            </Tr>
          </Thead>
          <Tbody>
            {PayrollData.map((item) => {
              return (
                <Tr>
                <Td className={classes.data_recepient_field}>
                  <div className={classes.data__primary_text}>
                    {item.name}
                  </div>
                  <div className={classes.data__secondary_text}>
                    {item.role}
                  </div>
                </Td>
                <Td>
                  <div className={classes.data__primary_text}>{item.salary}</div>
                </Td>
                <Td>
                  <div
                    className={`${classes.allocation_status_wrapper} ${
                      item.paid ? classes.paid : classes.balance
                    }`}
                  >
                    <span className={classes.status_indicator}></span>
                    <h5>{item.paid ? "Paid" : "Balance"}</h5>
                  </div>
                  <div className={classes.data__secondary_text}>
                    {item.recruitmentDate}
                  </div>
                </Td>
                <Td>
                  <div
                    className={`${classes.data__primary_text} ${classes.subject__title}`}
                  >
                    - {item.advance}
                  </div>
                  <div className={classes.data__secondary_text}>
                    <p>{item.Balance}</p>
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

export default PayrollTable;
