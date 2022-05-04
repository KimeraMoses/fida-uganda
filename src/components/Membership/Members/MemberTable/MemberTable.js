import React from "react";
import { Table, Thead, Tbody, Tr, Td } from "@chakra-ui/react";
import classes from "../../Allocations/AllocationsTable/AllocationsTable.module.css";
import { TableHeadColumn } from "../../Allocations/AllocationsTable/AllocationsTable";

const MemberTable = ({ data, isLoading }) => {
  return (
    <div className={classes.allocations_table_wrapper}>
      <Table variant="simple">
        <Thead className={classes.table_header}>
          <Tr>
            <TableHeadColumn title="Name" secondaryText="Membership No." />
            <TableHeadColumn title="Phone Number" secondaryText="Email" />
            <TableHeadColumn
              title="Membershp Duration"
              secondaryText="Membership fee status"
            />
            <TableHeadColumn
              title="office Number"
              secondaryText="office email"
            />
          </Tr>
        </Thead>
        <Tbody>
          {!isLoading &&
            data.length &&
            data.map((item) => {
              return (
                <Tr>
                  <Td className={classes.data_recepient_field}>
                    <div className={classes.data__primary_text}>
                      {item.first_name + " " + item.last_name}
                    </div>
                    <div className={classes.data__secondary_text}>
                      {item.id}
                    </div>
                  </Td>
                  <Td>
                    <div className={classes.data__primary_text}>
                      {item.phoneNumber}
                    </div>
                    <div className={classes.data__secondary_text}>
                      {item.email}
                    </div>
                  </Td>
                  <Td>
                    <div className={`${classes.data__primary_text}`}>
                      {item.membership_duration}
                    </div>
                    <div
                      className={`${classes.allocation_status_wrapper} ${
                        item.hasPaid ? classes.success : classes.fail
                      } ${classes.members_status}`}
                    >
                      <span className={classes.status_indicator}></span>
                      <h5>{item.hasPaid ? "Paid" : "Pending"}</h5>
                    </div>
                  </Td>
                  <Td>
                    <div className={classes.data__primary_text}>
                      {item.officeNo}
                    </div>
                    <div className={classes.data__secondary_text}>
                      {item.officeEmail}
                    </div>
                  </Td>
                </Tr>
              );
            })}
        </Tbody>
      </Table>
    </div>
  );
};

export default MemberTable;
