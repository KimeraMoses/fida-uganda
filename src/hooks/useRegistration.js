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

export const useDistrictOptions = () => {
  const { data } = useDistricts();
  if (data?.districts) {
    return data?.districts.map((district) => ({
      id: district.id,
      name: district.name,
    }));
  }
  return [];
};

export const useCounties = () => {
  return useQuery(COUNTIES_KEY, getAllCounties);
};

export const useCountyOptions = () => {
  const { data } = useCounties();
  if (data?.counties) {
    return data?.counties.map((county) => ({
      id: county.id,
      name: county.name,
    }));
  }
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

export const useSubCountyOptions = (districtId) => {
  const { data } = useDistrictSubCounties(districtId);
  if (data?.sub_counties) {
    return data?.sub_counties.map((subCounty) => ({
      ...subCounty,
      id: subCounty.id,
      name: subCounty.name,
    }));
  }
};
