import produce from "immer";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addNotification,
  getNotifications,
} from "../apis/notifications";
import { NOTIFICATION_KEY } from "../lib/constants";



export const useNotifications = () => {
  return useQuery(NOTIFICATION_KEY, getNotifications);
};

export const useAddNotification = () => {
  const queryClient = useQueryClient();
  return useMutation(addNotification, {
    onSuccess: (data) => {
      const previousNotifications = queryClient.getQueryData(NOTIFICATION_KEY);
      if (previousNotifications) {
        queryClient.setQueryData(NOTIFICATION_KEY, (previousNotifications) => {
          return produce(previousNotifications, (draft) => {
            draft.Notifications.push(data.notification);
          });
        });
      } else {
        queryClient.setQueryData(NOTIFICATION_KEY, () => {
          return { notifications: [data.notification] };
        });
      }
    },
  });
};
