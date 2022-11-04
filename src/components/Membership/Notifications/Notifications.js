import { useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
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
  const { isOpen, onClose } = useDisclosure();
  const { data: membersData } = useMembers();
  const { data: notifications, isLoading } = useNotifications();

  const initialValues = {
    user: "",
    message: "",
    subject: "",
  };
  console.log("noti", notifications?.Notifications);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([]);
    if (notifications?.Notifications?.length) {
      const dataToSet = notifications?.Notifications?.map((b) => {
        return {
          ...b,
          membersSentNotification: {
            name: b?.user.map((person, index) => {
              if (person?.full_name) {
                if (index + 1 === b.user.length) {
                  return person?.full_name;
                } else {
                  return person?.full_name + ", ";
                }
              }
              // eslint-disable-next-line array-callback-return
              return;
            }),
          },
          date: {
            date: b?.createdAt,
          },
        };
      });
      setData(dataToSet);
    }
  }, [notifications]);
  return (
    <div>
      <SectionHeader title="Notifications" />
      <Table
        data={data ? data : null}
        columns={notificationsTableColumns}
        btnLabel="Compose"
        loading={isLoading}
        hideActions
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
