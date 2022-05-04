import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";
import Form from "./NotificationForm";
import NotificationsTable from "./NotificationsTable/NotificationTable";
import { useUsers } from "../../../hooks/useUser";
import {
  useAddNotification,
  useNotifications,
} from "../../../hooks/useNotification";

const Notifications = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const users = useUsers();
  const { data, isLoading } = useNotifications();

  const initialValues = {
    user: [],
    message: "",
    subject: "",
  };
  return (
    <div>
      <SectionHeader title="Notifications" />
      <TableSearch btnLabel="Compose" btnClick={onOpen} />
      <NotificationsTable
        data={data ? data.Notifications : null}
        isLoading={isLoading}
      />
      {isOpen && (
        <Form
          onClose={onClose}
          title="Notifications"
          initialValues={initialValues}
          // validationSchema={allocationFormSchema}
          onSuccess={onClose}
          success={`Notification added successfully`}
          useMutate={useAddNotification}
          users={users}
        />
      )}
    </div>
  );
};

export default Notifications;
