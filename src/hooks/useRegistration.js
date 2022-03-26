import { useQuery } from "react-query";
import {
  getAllCounties,
  getAllDistricts,
  getCounty,
  getDistrict,
  getDistrictSubCounties,
} from "../apis/registration";
import { COUNTIES_KEY, DISTRICTS_KEY } from "../lib/constants";

export const useDistricts = () => {
  return useQuery(DISTRICTS_KEY, getAllDistricts);
};

export const useCounties = () => {
  return useQuery(COUNTIES_KEY, getAllCounties);
};

export const useDistrict = (districtId) => {
  return useQuery([DISTRICTS_KEY, districtId], () => getDistrict(districtId));
};

export const useCounty = (countyId) => {
  return useQuery([COUNTIES_KEY, countyId], () => getCounty(countyId));
};

export const useDistrictSubCounties = (districtId) => {
  return useQuery([DISTRICTS_KEY, districtId, COUNTIES_KEY], () =>
    getDistrictSubCounties(districtId)
  );
};
