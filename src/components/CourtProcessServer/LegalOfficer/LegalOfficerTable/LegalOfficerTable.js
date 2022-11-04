import React from "react";
import { Table, Thead, Tbody, Tr, Td } from "@chakra-ui/react";
import classes from "../../../Membership/Allocations/AllocationsTable/AllocationsTable.module.css";
import styles from "./Table.module.css";
import { TableHeadColumn } from "../../../Membership/Allocations/AllocationsTable/AllocationsTable";
import sortByDate from "../../../../lib/sortByDate";
import withTable from "../../../../hoc/withTable";

const LegalOfficerTable = ({ data }) => {
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
              <TableHeadColumn title="User Status" />
              <TableHeadColumn
                title="Recruitment Date"
                secondaryText="CLV Expiry"
              />
            </Tr>
          </Thead>
          <Tbody>
            {sortByDate(data).map((item) => {
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
                    <div className={classes.data__primary_text}>{item.tel}</div>
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
                    <div
                      className={`${classes.allocation_status_wrapper} ${
                        item.active ? classes.paid : classes.fail
                      }`}
                    >
                      <span className={classes.status_indicator}></span>
                      <h5>{item.active ? "active" : "closed"}</h5>
                    </div>
                  </Td>

                  <Td>
                    <div className={`${classes.data__primary_text}`}>
                      <div className={classes.data__primary_text}>
                        {item.date}
                      </div>
                      <div className={classes.data__secondary_text}>
                        {item.date}
                      </div>
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

export default withTable(LegalOfficerTable);
