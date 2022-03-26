import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const getAllFleets = async () => {
  return await axiosClient.get(routes.fleet.getAllFleets);
};

export const getFleet = async (fleetId) => {
  return await axiosClient.get(`${routes.fleet.base}/${fleetId}`);
};

export const addFleet = async (fleet) => {
  return await axiosClient.post(routes.fleet.addFleet, fleet);
};

export const updateFleet = async (fleet) => {
  return await axiosClient.patch(
    `${routes.fleet.editFleet}/${fleet.id}`,
    fleet
  );
};

export const deleteFleet = async (fleetId) => {
  return await axiosClient.delete(`${routes.fleet.base}/${fleetId}`);
};

export const getFleetByProject = async (projectId) => {
  return await axiosClient.get(
    `${routes.fleet.getFleetByProject}/${projectId}`
  );
};
