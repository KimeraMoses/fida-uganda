import React from "react";
import { Table, Thead, Tbody, Tr, Td } from "@chakra-ui/react";
import classes from "../../Allocations/AllocationsTable/AllocationsTable.module.css";
import styles from "./NotificationsTable.module.css";
import { TableHeadColumn } from "../../Allocations/AllocationsTable/AllocationsTable";

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
          {!!isLoading &&
            data &&
            data.Notifications &&
            data.Notifications.length &&
            data.Notifications.map((item) => {
              return (
                <Tr>
                  <Td>{item.subject}</Td>
                  <Td className={styles.data__purpose_primary_text}>
                    {item.purpose}
                  </Td>
                  <Td>{new Date(item.createdAt).toLocaleDateString()}</Td>
                  <Td>{item.members}</Td>
                </Tr>
              );
            })}
        </Tbody>
      </Table>
    </div>
  );
};

export default NotificationsTable;
