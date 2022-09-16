import * as yup from "yup";
import { IS_REQUIRED } from "../../../../lib/constants";


export const requisitionSchema = yup.object().shape({
  project_name: yup.string().required(`Project ${IS_REQUIRED}`),
  budget_year: yup.string().required(`Budget ${IS_REQUIRED}`),
  type: yup.string().required(`Type ${IS_REQUIRED}`),
  unit_price: yup.number().required(`Unit Price ${IS_REQUIRED}`),
  num_units: yup.number().required(`Quantity ${IS_REQUIRED}`),
  subject_of_procurement: yup.string().required(`Subject ${IS_REQUIRED}`),
  delivery_location: yup.string().required(`Delivery Location ${IS_REQUIRED}`),
  date_required: yup.string().required(`Date Required ${IS_REQUIRED}`),
});

export const fleetDatabaseOrderSchema = yup.object().shape({
  vehicle_make: yup.string().required(`Vehicle make ${IS_REQUIRED}`),
  vehicle_number: yup.string().required(`Vehicle number ${IS_REQUIRED}`),
  vehicle_model: yup.string().required(`Model ${IS_REQUIRED}`),
  driver_first_name: yup.string().required(`First name Requested ${IS_REQUIRED}`),
  driver_surname: yup.string().required(`Surname ${IS_REQUIRED}`),
  // project: yup.string().required(`Project ${IS_REQUIRED}`),
  driver_email: yup.string().required(`Email ${IS_REQUIRED}`),
  driver_phone: yup.string().required(`Phone number ${IS_REQUIRED}`),
  driver_address: yup.string().required(`Address Location ${IS_REQUIRED}`),
  region_of_operation: yup.string().required(`Region ${IS_REQUIRED}`),
});

export const fleetDatabaseInitialValues = {
  vehicle_make: "",
  vehicle_number: "",
  vehicle_model: "",
  driver_first_name: "",
  driver_surname: "",
  driver_email: "",
  driver_phone: "",
  driver_address: "",
  region_of_operation: "",
  project: "",
};
