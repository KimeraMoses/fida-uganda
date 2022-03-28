import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
} from "@chakra-ui/react";
import classes from "../../Allocations/AllocationsTable/AllocationsTable.module.css";
import styles from "./NotificationsTable.module.css";
import { TableHeadColumn } from "../../Allocations/AllocationsTable/AllocationsTable";

const NotificationsData = [
  {
    subject: "AGM",
    purpose: "AGM Notification to all FIDA Members",
    date: "01/01/2022",
    members: "All",
  },
  {
    subject: "AGM",
    purpose: "AGM Notification to all FIDA Members",
    date: "01/01/2022",
    members: "All",
  },
  {
    subject: "AGM",
    purpose: "AGM Notification to all FIDA Members",
    date: "01/01/2022",
    members: "All",
  },
  {
    subject: "AGM",
    purpose: "AGM Notification to all FIDA Members",
    date: "01/01/2022",
    members: "All",
  },
  {
    subject: "AGM",
    purpose: "AGM Notification to all FIDA Members",
    date: "01/01/2022",
    members: "All",
  },
  {
    subject: "AGM",
    purpose: "AGM Notification to all FIDA Members",
    date: "01/01/2022",
    members: "All",
  },
  {
    subject: "AGM",
    purpose: "AGM Notification to all FIDA Members",
    date: "01/01/2022",
    members: "All",
  },
  {
    subject: "AGM",
    purpose: "AGM Notification to all FIDA Members",
    date: "01/01/2022",
    members: "All",
  },
];

const NotificationsTable = () => {
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
          {NotificationsData.map((item) => {
            return (
              <Tr>
                <Td>{item.subject}</Td>
                <Td className={styles.data__purpose_primary_text}>
                  {item.purpose}
                </Td>
                <Td>{item.date}</Td>
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