import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const addEvent = async (event) => {
  return axiosClient.post(routes.events.addEvent, event);
};

export const getEvent = async (eventId) => {
  return axiosClient.get(`${routes.events.base}/${eventId}`);
};

export const deleteEvent = async (eventId) => {
  return axiosClient.delete(`${routes.events.base}/${eventId}`);
};

export const updateEvent = async (event) => {
  return axiosClient.patch(`${routes.events.editEvent}/${event.id}`, event);
};

export const getAllEvents = async () => {
  return axiosClient.get(routes.events.getEvents);
};
