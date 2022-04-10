import * as yup from "yup";

export const assetInitialValues = {
  name: "",
  office_in_possession: "",
  person_in_possession: "",
  budget_year: "",
  type: "",
  num_units: "",
  project: "",
  unit_price: "",
  amount: "",
  date_delivered: "",
  location: "",
};

export const assetSchema = {
  project: yup.string().required("Project is required"),
  budget_year: yup.string().required("Budget year is required"),
  type: yup.string().required("Type is required"),
  num_units: yup.string().required("Number of units is required"),
  date_delivered: yup.string().required("Date Delivered is required"),
  office_in_possession: yup
    .string()
    .required("Office in possession is required"),
  person_in_possession: yup
    .string()
    .required("Person in possession is required"),
};
