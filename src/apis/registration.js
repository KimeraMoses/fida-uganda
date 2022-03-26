import axiosClient from "../lib/axiosClient";
import { routes } from "../lib/routes";

export const getAllDistricts = async () => {
  return await axiosClient.get(routes.registration.getDistricts);
};

export const getAllCounties = async () => {
  return await axiosClient.get(routes.registration.getAllCounties);
};

export const getDistrict = async (districtId) => {
  return await axiosClient.get(
    `${routes.registration.getDistrict}/${districtId}`
  );
};

export const getCounty = async (countyId) => {
  return await axiosClient.get(`${routes.registration.getCounty}/${countyId}`);
};

export const getDistrictSubCounties = async (districtId) => {
  return await axiosClient.get(
    `${routes.registration.getDistrictSubCounty}/${districtId}`
  );
};
