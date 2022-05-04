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
              title="Address"
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
                    <div className={classes.data__primary_text}>{item.id}</div>
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
                      {item.address}
                    </div>
                    <div
                      className={`${classes.data__secondary_text} ${
                        classes.members_status
                      } ${item.status ? classes.sucess : classes.fail}`}
                    >
                      <h6>{item.hasPaid ? "Paid" : "Pending"}</h6>
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
