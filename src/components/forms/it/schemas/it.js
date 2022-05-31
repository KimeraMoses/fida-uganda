import * as yup from "yup";
//import { IS_REQUIRED } from "../../../../lib/constants";

export const itProductOrderSchema = yup.object().shape({
  project_name: yup.string().required("Project name is required"),
  type: yup.string().required("Type is required"),
  budget_year: yup.string().required("Budget year is required"),
  unit_price: yup.string().required("Unit price is required"),
  subject_of_procurement: yup.string().required("Field is required"),
  date_required: yup.string().required("Date is required"),
  delivery_location: yup.string().required("Delivery location is required"),
  num_units: yup.string().required("Number of units is required"),
  name: yup.string().required("Name is required"),
  status: yup.string().required("Status is required"),
  description: yup.string().required("Description is required"),
  class: yup.string().required("Class is required"),
  brand: yup.string().required("Brand is required"),
  category: yup.string().required("Category is required"),
  amount: yup.string().required("Amount is required"),
  currency: yup.string().required("Currency is required"),
  payment_status: yup.string().required("Payment status is required"),
  purchase_date: yup.string().required("Purchase date is required"),
  service_provider: yup.string().required("Service is required"),
  state: yup.string().required("State is required"),
  expiry_date: yup.string().required("Expiry date is required"),
});

export const itComplaintOrderSchema = yup.object().shape({
  submittedBy: yup.string().required("This field is required"),
  body: yup.string().required("This field is required"),
  dueDate: yup.string().required("This field is required"),
  status: yup.string().required("This field is required"),
  remarks: yup.string().required("This field is required"),
})

export const itProductInitialValues = {
  project_name: "",
  type: "",
  budget_year: "",
  unit_price: "",
  subject_of_procurement: "",
  date_required: "",
  delivery_location: "",
  num_units: "",
  name: "",
  status: "",
  description: "",
  class: "",
  brand: "",
  category: "",
  amount: "",
  currency: "",
  payment_status: "",
  purchase_date: ""
};

export const itServicesInitialValues = {
  name: "",
  description: "",
  expiry_date: "",
  service_provider: "",
  state: ""
};

export const itComplaintInitialValues = {
  submittedBy: "",
  body: "",
  dueDate: "",
  status: "",
  remarks: ""
};
