import React from "react";
import { Table, Thead, Tbody, Tr, Td } from "@chakra-ui/react";
import classes from "../../Allocations/AllocationsTable/AllocationsTable.module.css";
import styles from "./NotificationsTable.module.css";
import { TableHeadColumn } from "../../Allocations/AllocationsTable/AllocationsTable";
import sortByDate from "../../../../lib/sortByDate";
import withTable from "./../../../../hoc/withTable";

const NotificationsTable = ({ data, isLoading }) => {
  return (
    <div className={classes.allocations_table_wrapper}>
      <Table variant="simple" className={styles.notifications_table}>
        <Thead className={classes.table_header}>
          <Tr>
            <TableHeadColumn title="Subject" />
            <TableHeadColumn title="Purpose of Notification" />
            <TableHeadColumn title="Date the Notification was sent" />
            <TableHeadColumn title="Members to whom the Notification was sent" />
          </Tr>
        </Thead>
        <Tbody>
          {!isLoading &&
            data &&
            data.length &&
            sortByDate(data).map((item) => {
              return (
                <Tr>
                  <Td className={styles.subject_wrapper}>{item.subject}</Td>
                  <Td className={styles.body_wrapper}>{item.message}</Td>
                  <Td>{new Date(item.createdAt).toLocaleDateString()}</Td>
                  <Td>
                    {item.user.map((person, index) => {
                      if (index + 1 === item.user.length) {
                        return person.full_name;
                      } else {
                        return person.full_name + ", ";
                      }
                    })}
                  </Td>
                </Tr>
              );
            })}
        </Tbody>
      </Table>
    </div>
  );
};

export default withTable(NotificationsTable);
