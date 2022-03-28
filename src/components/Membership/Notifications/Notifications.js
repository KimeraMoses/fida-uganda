import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";
import Form from "../Allocations/AllocationForm/Form";
import NotificationsTable from "./NotificationsTable/NotificationTable";

const Notifications = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <SectionHeader title="Notifications" />
      <TableSearch btnLabel="Compose" btnClick={onOpen} />
      <NotificationsTable />
      {isOpen && <Form onClose={onClose} title="Notifications" />}
    </div>
  );
};

export default Notifications;
