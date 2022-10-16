import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import SectionHeader from "../../common/SectionHeader";
import Form from "./NotificationForm";
import { useMembers } from "../../../hooks/useMember";
import {
  useAddNotification,
  useNotifications,
} from "../../../hooks/useNotification";
import { notificationSchema } from "./schema";
import { notificationsTableColumns } from "../../../lib/tableColumns";
import Table from "../../common/TableComponent/Table";

const Notifications = () => {
  const { isOpen,  onClose } = useDisclosure();
  const { data: membersData } = useMembers();
  const { data, isLoading } = useNotifications();

  const initialValues = {
    user: "",
    message: "",
    subject: "",
  };
  return (
    <div>
      <SectionHeader title="Notifications" />
      {/* <TableSearch btnLabel="Compose" btnClick={onOpen} /> */}
      <Table
            data={data ? data.Notifications : null}
            columns={notificationsTableColumns}
        btnLabel="Compose"
            loading={isLoading}
          />
      {/* <NotificationsTable
        data={data ? data.Notifications : null}
        isLoading={isLoading}
        btnLabel="Compose"
        btnClick={onOpen}
        tableName="Notifications"
      /> */}
      {isOpen && (
        <Form
          onClose={onClose}
          title="Notifications"
          initialValues={initialValues}
          validationSchema={notificationSchema}
          onSuccess={onClose}
          success={`Notification added successfully`}
          useMutate={useAddNotification}
          membersData={membersData ? membersData.Members : null}
        />
      )}
    </div>
  );
};

export default Notifications;
