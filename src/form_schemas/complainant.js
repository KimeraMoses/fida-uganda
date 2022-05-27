import * as Yup from "yup";

export const complainantInitialValues = {
  name: "",
  sex: "",
  email: "",
  age: "",
  phoneNumber: "",
  address: "",
  country: "",
  NIN: "",
  district: "",
  subcounty: "",
  parish: "",
  village: "",
  marital_status: "",
  accompaniedBy: "",
  occupation: "",
  place_of_work: "",
  level_of_education: "",
  preferred_language: "",
  num_beneficiaries: "",
  //   disability: "",
  //   relationship_with_respondent: "",
};

export const complainantSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  sex: Yup.string().required("Sex is required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  age: Yup.number()
    .max(150, "Age can not be more than 150")
    .required("Age is required"),
  phoneNumber: Yup.number().required("Phone Number is required"),
  address: Yup.string().required("Address is required"),
  country: Yup.string()
    .required("Country is required")
    .matches("^[A-Za-z\\s]*$", "Only use letters"),
  NIN: Yup.string()
    .required("National ID is required")
    .matches(
      "^[A-Z0-9]*$",
      "National ID can only contain numbers and capital letters"
    ),
  district: Yup.string()
    .matches("^[A-Za-z\\s]*$", "Only use letters")
    .required("District is required"),
  subcounty: Yup.string().matches("^[A-Za-z\\s]*$", "Only use letters"),
  parish: Yup.string().matches("^[A-Za-z\\s]*$", "Only use letters"),
  village: Yup.string().matches("^[A-Za-z\\s]*$", "Only use letters"),
  marital_status: Yup.string().matches("^[A-Za-z\\s]*$", "Only use letters"),
  accompaniedBy: Yup.string().matches("^[A-Za-z\\s]*$", "Only use letters"),
  occupation: Yup.string().matches("^[A-Za-z\\s]*$", "Only use letters"),
  place_of_work: Yup.string().matches("^[A-Za-z\\s]*$", "Only use letters"),
  level_of_education: Yup.string().matches("^[A-Za-z\\s]*$", "Only use letters"),
  preferred_language: Yup.string().matches("^[A-Za-z\\s]*$", "Only use letters"),
  num_beneficiaries: Yup.number().max(10, "Cannot be more than 10"),
});
