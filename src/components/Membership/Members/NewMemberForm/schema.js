import * as yup from "yup";
//import { IS_REQUIRED } from "../../../../lib/constants";

export const initialValuesOneSchema = yup.object().shape({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  address: yup.string().required("Postal address is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  email: yup.string().required("Email is required"),
  employment_status: yup.string().required("Employment status is required"),
  year_of_undergraduate_completion: yup
    .string()
    .required("This field is required"),
  //professional_experience: yup.string().required("Professional experience is required"),
  membership_duration: yup.string().required("Membership duration is required"),
});

export const initialValuesOne = {
  first_name: "",
  maiden_name: "",
  last_name: "",
  address: "",
  phoneNumber: "",
  email: "",
  employment_status: "",
  year_of_undergraduate_completion: "",
  professional_experience: "",
  membership_duration: "",
  additional_skills: "",
};

export const initialValuesTwo = {
  languages: [],
  professional_experience: "",
};

export const initialValuesThree = {
  area_of_interest: [],
};

export const initialValuesFour = {
  hobbies: [],
};
