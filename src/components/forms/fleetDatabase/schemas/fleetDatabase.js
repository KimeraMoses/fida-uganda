import * as yup from "yup";
// import { IS_REQUIRED } from "../../../../lib/constants";

export const fleetDatabaseOrderSchema = yup.object().shape({
  // journey_start_time: yup
  //   .string()
  //   .required(`Journey Start Time ${IS_REQUIRED}`),
  // journey_end_time: yup.string().required(`Journey End Time ${IS_REQUIRED}`),
  // purpose: yup.string().required(`Purpose ${IS_REQUIRED}`),
  // date_requested: yup.string().required(`Date Requested ${IS_REQUIRED}`),
  // destination: yup.string().required(`Destination ${IS_REQUIRED}`),
  // project: yup.string().required(`Project ${IS_REQUIRED}`),
  // project_activity: yup.string().required(`Project Activity ${IS_REQUIRED}`),
  // pickup_location: yup.string().required(`Pickup Location ${IS_REQUIRED}`),
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
