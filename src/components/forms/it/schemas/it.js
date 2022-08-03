import * as yup from "yup";
//import { IS_REQUIRED } from "../../../../lib/constants";

export const itProductOrderSchema = yup.object().shape({
  project_name: yup.string().required("Project name is required"),
  budget_year: yup.string().required("Budget year is required"),
  name: yup.string().required("Name is required"),
  status: yup.string().required("Status is required"),
  brand: yup.string().required("Brand is required"),
  class: yup.string().required("Class is required"),
  description: yup.string().required("Description is required"),
  unit_price: yup.string().required("Unit price is required"),
  num_units: yup.string().required("Number of units is required"),
  amount: yup.string().required("Amount is required"),
  currency: yup.string().required("Currency is required"),
  category: yup.string().required("Category is required"),
  payment_status: yup.string().required("Payment status is required"),
  delivery_location: yup.string().required("Delivery location is required"),
  type: yup.string().required("Type is required"),
  subject_of_procurement: yup.string().required("Field is required"),
  date_required: yup.string().required("Date is required"),
  purchase_date: yup.string().required("Purchase date is required"),
  // service_provider: yup.string().required("Service is required"),
  // state: yup.string().required("State is required"),
  // expiry_date: yup.string().required("Expiry date is required"),
});

export const itComplaintOrderSchema = yup.object().shape({
  submittedBy: yup.string().required("This field is required"),
  body: yup.string().required("This field is required"),
  dueDate: yup.string().required("This field is required"),
  status: yup.string().required("This field is required"),
  remarks: yup.string().required("This field is required"),
});

export const itServiceSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  status: yup.string().required("Status is required"),
  service_provider: yup.string().required("Service is required"),
  description: yup.string().required("Description is required"),
  expiry_date: yup.string().required("Expiry date is required"),
  class: yup.string().required("Class is required"),
  category: yup.string().required("Category is required"),
  amount: yup.string().required("Amount is required"),
  currency: yup.string().required("Currency is required"),
  payment_status: yup.string().required("Payment status is required"),
  purchase_date: yup.string().required("Purchase date is required"),
});

export const itProductInitialValues = {
  project_name: "",
  budget_year: "",
  name: "",
  status: "",
  brand: "",
  class: "",
  description: "",
  unit_price: "",
  num_units: "",
  amount: "",
  currency: "",
  category: "",
  payment_status: "",
  delivery_location: "",
  type: "",
  subject_of_procurement: "",
  date_required: "",
  purchase_date: "",
};

export const itServicesInitialValues = {
  name: "",
  service_provider: "",
  description: "",
  status: "",
  class: "",
  category: "",
  amount: "",
  payment_status: "",
  currency: "",
  purchase_date: "",
  expiry_date: "",
};

export const itComplaintInitialValues = {
  submittedBy: "",
  body: "",
  dueDate: "",
  status: "",
  remarks: "",
};
