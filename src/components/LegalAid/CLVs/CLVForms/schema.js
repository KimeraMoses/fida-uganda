import * as Yup from "yup";

export const clvInitialValues = {
  last_name: "",
  first_name: "",
  gender: "",
  nationality: "",
  NIN: "",
  phoneNumber: "",
  email: "",
  city: "",
  address: "",
  district: "",
  subcounty: "",
  village: "",
  zone: "",
  profession: "",
  year_of_training: "",
  project: "",
  training_category: "",
  recruitmentDate: "",
  expiryDate: "",
  isActive: false,
};

export const clvSchema = Yup.object().shape({
  last_name: Yup.string().required("Last Name is required"),
  first_name: Yup.string().required("First Name is required"),
  gender: Yup.string().required("Gender is required"),
  nationality: Yup.string().required("Nationality is required"),
  NIN: Yup.string()
    .required("National Id Number is required")
    .matches(/^[0-9A-Z]+$/, "Only use capital letters and numbers"),
  phoneNumber: Yup.string()
    .required("Phone Number is required")
    .length(12, "Phone Number must be 12 digits")
    .matches(/^[0-9]{12}/, "Phone Number can only have numbers"),
  email: Yup.string().required("Email is required").email("Invalid Email"),
  city: Yup.string().matches(/^[a-zA-Z\s]+$/, "Only use letters"),
  address: Yup.string().required("Address is required"),
  district: Yup.string().matches(/^[a-zA-Z\s]+$/, "Only use letters"),
  subcounty: Yup.string().matches(/^[a-zA-Z\s]+$/, "Only use letters"),
  village: Yup.string().matches(/^[a-zA-Z\s]+$/, "Only use letters"),
  zone: Yup.string().matches(/^[0-9a-zA-Z\s]+$/, "Only use letters"),
  profession: Yup.string().matches(/^[a-zA-Z\s]+$/, "Only use letters"),
  year_of_training: Yup.string()
    .length(4, "Year should be 4 numbers long")
    .matches(/^[0-9]{4}$/, "Only use numbers"),
  project: Yup.string().required("Project is required"),
  training_category: Yup.string(),
  recruitmentDate: Yup.string(),
});
