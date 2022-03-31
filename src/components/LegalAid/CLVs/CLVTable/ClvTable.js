import React from "react";
import { Table, Thead, Tbody, Tr, Td } from "@chakra-ui/react";
import classes from "../../../Membership/Allocations/AllocationsTable/AllocationsTable.module.css";
import styles from "./Table.module.css";
import { TableHeadColumn } from "../../../Membership/Allocations/AllocationsTable/AllocationsTable";
import { formatDate } from "../../../../lib/data";

export const CLVData = [
  {
    name: "Andrew Tebandeke",
    profession: "Farmer",
    phoneNumber: "0759130054",
    fida_id: "FU/LM/IDLO/0001",
    email: "kimeramoses001@gmail.com",
    address: "P.O Box 5569",
    city: "Kampala",
    open: true,
    registrationDate: "15/APR/2020",
  },
  {
    name: "Andrew Tebandeke",
    profession: "Farmer",
    phoneNumber: "0759130054",
    fida_id: "FU/LM/IDLO/0001",
    email: "kimeramoses001@gmail.com",
    address: "P.O Box 5569",
    city: "Kampala",
    open: true,
    registrationDate: "15/APR/2020",
  },
  {
    name: "Andrew Tebandeke",
    profession: "Farmer",
    phoneNumber: "0759130054",
    fida_id: "FU/LM/IDLO/0001",
    email: "kimeramoses001@gmail.com",
    address: "P.O Box 5569",
    city: "Kampala",
    open: false,
    registrationDate: "15/APR/2020",
  },
  {
    name: "Andrew Tebandeke",
    profession: "Farmer",
    phoneNumber: "0759130054",
    fida_id: "FU/LM/IDLO/0001",
    email: "kimeramoses001@gmail.com",
    address: "P.O Box 5569",
    city: "Kampala",
    open: true,
    registrationDate: "15/APR/2020",
  },
];

const CLVTable = ({ data }) => {
  return (
    <>
      <div className={classes.allocations_table_wrapper}>
        <Table
          variant="simple"
          size="sm"
          colorScheme="gray"
          className={classes.approval_table}
        >
          <Thead className={styles.table_header}>
            <Tr>
              <TableHeadColumn title="Name" secondaryText="Profession" />
              <TableHeadColumn title="Phone Number" secondaryText="Email" />
              <TableHeadColumn title="Address" secondaryText="City" />
              <TableHeadColumn
                title="FIDA ID NUMBER"
                secondaryText="Registration Date"
              />
              <TableHeadColumn title="case Status" secondaryText="" />
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => {
              return (
                <Tr>
                  <Td className={classes.data_recepient_field}>
                    <div className={classes.data__primary_text}>
                      {item.name}
                    </div>
                    <div className={classes.data__secondary_text}>
                      {item.profession}
                    </div>
                  </Td>
                  <Td className={classes.data_recepient_field}>
                    <div className={classes.data__primary_text}>
                      {item.phoneNumber}
                    </div>
                    <div className={classes.data__secondary_text}>
                      {item.email}
                    </div>
                  </Td>
                  <Td className={classes.data_recepient_field}>
                    <div className={classes.data__primary_text}>
                      {item.address}
                    </div>
                    <div className={classes.data__secondary_text}>
                      {item.city}
                    </div>
                  </Td>

                  <Td>
                    <div className={`${classes.data__primary_text}`}>
                      <div className={classes.data__primary_text}>
                        {item.fida_id}
                      </div>
                      <div className={classes.data__secondary_text}>
                        {formatDate(item.createdAt)}
                      </div>
                    </div>
                  </Td>
                  <Td>
                    <div
                      className={`${classes.allocation_status_wrapper} ${
                        item.open ? classes.paid : classes.fail
                      }`}
                    >
                      <span className={classes.status_indicator}></span>
                      <h5>{item.isActive ? "active" : "Closed"}</h5>
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

export default CLVTable;
