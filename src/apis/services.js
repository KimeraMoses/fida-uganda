import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const addService = async (service) => {
  return axiosClient.post(routes.services.addService, service);
};

export const getService = async (serviceId) => {
  return axiosClient.get(`${routes.services.base}/${serviceId}`);
};

export const deleteService = async (serviceId) => {
  return axiosClient.delete(`${routes.services.base}/${serviceId}`);
};

export const updateService = async (service) => {
  return axiosClient.patch(
    `${routes.services.editService}/${service.id}`,
    service
  );
};

export const getServices = async () => {
  return axiosClient.get(routes.services.getServices);
};
