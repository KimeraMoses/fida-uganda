import produce from "immer";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addEvent,
  deleteEvent,
  getAllEvents,
  getEvent,
  updateEvent,
} from "../apis/events";
import { EVENTS_KEY } from "../lib/constants";

export const useEvent = (eventId) => {
  return useQuery([EVENTS_KEY, eventId], () => getEvent(eventId));
};

export const useEvents = () => {
  return useQuery(EVENTS_KEY, getAllEvents);
};

export const useAddEvent = () => {
  const queryClient = useQueryClient();
  return useMutation(addEvent, {
    onSuccess: (data) => {
      const previousEvents = queryClient.getQueryData(EVENTS_KEY);
      if (previousEvents) {
        queryClient.setQueryData(EVENTS_KEY, (previousEvents) => {
          return produce(previousEvents, (draft) => {
            draft.events.push(data.event);
          });
        });
      } else {
        queryClient.setQueryData(EVENTS_KEY, () => {
          return { events: [data.event] };
        });
      }
    },
  });
};

export const useUpdateEvent = () => {
  const queryClient = useQueryClient();
  return useMutation(updateEvent, {
    onSuccess: (data) => {
      const previousEvents = queryClient.getQueryData(EVENTS_KEY);
      if (previousEvents) {
        queryClient.setQueryData(EVENTS_KEY, (previousEvents) => {
          return produce(previousEvents, (draft) => {
            const index = draft.events.findIndex(
              (event) => event.id === data.event.id
            );
            draft.events[index] = data.event;
          });
        });
      } else {
        queryClient.setQueryData(EVENTS_KEY, () => {
          return { events: [data.event] };
        });
      }
    },
  });
};

export const useDeleteEvent = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteEvent, {
    onSuccess: (data) => {
      const previousEvents = queryClient.getQueryData(EVENTS_KEY);
      if (previousEvents) {
        queryClient.setQueryData(EVENTS_KEY, (previousEvents) => {
          return produce(previousEvents, (draft) => {
            draft.events.filter((event) => event.id !== data.event.id);
          });
        });
      } else {
        queryClient.setQueryData(EVENTS_KEY, () => {
          return { events: [] };
        });
      }
    },
  });
};
