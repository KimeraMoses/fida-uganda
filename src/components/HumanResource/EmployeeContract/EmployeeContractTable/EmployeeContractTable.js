import React from "react";
import { Table, Thead, Tbody, Tr, Td } from "@chakra-ui/react";
import classes from "../../../Membership/Allocations/AllocationsTable/AllocationsTable.module.css";
import styles from "./Table.module.css";
import { TableHeadColumn } from "../../../Membership/Allocations/AllocationsTable/AllocationsTable";

export const EmployeeData = [
  {
    name: "Andrew Tebandeke",
    phone: "0784658626",
    sex: "Female",
    district: "Kampala",
    email: "nalubega12@gmail.com",
    dob: "21.12.90",
    nin: "CME90122167DME",
    recruitmentDate: "02/02/22",
    terminationDate: "02/02/23",
    last_login: "14/APR/2020",
    role: "Lawyer",
    active: false,
  },
  {
    name: "Andrew Tebandeke",
    phone: "0784658626",
    district: "Kampala",
    sex: "Female",
    email: "nalubega12@gmail.com",
    dob: "21.12.90",
    nin: "CME90122167DME",
    recruitmentDate: "02/02/22",
    terminationDate: "02/02/23",
    last_login: "14/APR/2020",
    role: "Lawyer",
    active: true,
  },
  {
    name: "Andrew Tebandeke",
    phone: "0784658626",
    district: "Kampala",
    sex: "Female",
    email: "nalubega12@gmail.com",
    dob: "21.12.90",
    nin: "CME90122167DME",
    recruitmentDate: "02/02/22",
    terminationDate: "02/02/23",
    last_login: "14/APR/2020",
    role: "Lawyer",
    active: true,
  },
  {
    name: "Nalubega Christine",
    phone: "0784658626",
    district: "Kampala",
    sex: "Female",
    email: "nalubega12@gmail.com",
    dob: "21.12.90",
    nin: "CME90122167DME",
    recruitmentDate: "02/02/22",
    terminationDate: "02/02/23",
    last_login: "14/APR/2020",
    role: "Lawyer",
    active: false,
  },
];

const EmployeeContractTable = () => {
  return (
    <>
      <div className={classes.allocations_table_wrapper}>
        <Table
          size="sm"
          variant="simple"
          colorScheme="gray"
          className={classes.approval_table}
        >
          <Thead className={styles.table_header}>
            <Tr>
              <TableHeadColumn title="Name" secondaryText="Role" />
              <TableHeadColumn title="Phone Number" secondaryText="Email" />
              <TableHeadColumn title="Sex" secondaryText="District" />
              <TableHeadColumn title="Date of Birth" secondaryText="NIN" />
              <TableHeadColumn
                title="Hiring Date"
                secondaryText="Termination Date"
              />
              <TableHeadColumn
                title="Working Status"
                secondaryText="Last Login"
              />
            </Tr>
          </Thead>
          <Tbody>
            {EmployeeData.map((item) => {
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
                    <div className={classes.data__primary_text}>
                      {item.phone}
                    </div>
                    <div className={classes.data__secondary_text}>
                      {item.email}
                    </div>
                  </Td>
                  <Td>
                    <div className={classes.data__primary_text}>{item.sex}</div>
                    <div className={classes.data__secondary_text}>
                      {item.district}
                    </div>
                  </Td>

                  <Td>
                    <div
                      className={`${classes.data__primary_text} ${classes.subject__title}`}
                    >
                      {item.dob}
                    </div>
                    <div className={classes.data__secondary_text}>
                      <p>{item.nin}</p>
                    </div>
                  </Td>
                  <Td>
                    <div
                      className={`${classes.data__primary_text} ${classes.subject__title}`}
                    >
                      {item.recruitmentDate}
                    </div>
                    <div className={classes.data__secondary_text}>
                      <p>{item.terminationDate}</p>
                    </div>
                  </Td>
                  <Td>
                    <div
                      className={`${`${classes.allocation_status_wrapper} ${classes.working_status}`} ${
                        item.active ? classes.paid : classes.balance
                      }`}
                    >
                      <span className={classes.status_indicator}></span>
                      <h5>{item.active ? "Active" : "On Leave"}</h5>
                    </div>
                    <div
                      className={`${classes.data__secondary_text} ${styles.last_login_date}`}
                    >
                      {item.last_login}
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

export default EmployeeContractTable;