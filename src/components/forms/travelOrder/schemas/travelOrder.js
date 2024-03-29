import * as yup from "yup";
import { IS_REQUIRED } from "../../../../lib/constants";

export const travelOrderSchema = yup.object().shape({
  journey_start_time: yup
    .string()
    .required(`Journey Start Time ${IS_REQUIRED}`),
  journey_end_time: yup.string().required(`Journey End Time ${IS_REQUIRED}`),
  purpose: yup.string().required(`Purpose ${IS_REQUIRED}`),
  // destination: yup.string().required(`Destination ${IS_REQUIRED}`),
  project: yup.string().required(`Project ${IS_REQUIRED}`),
  project_activity: yup.string().required(`Project Activity ${IS_REQUIRED}`),
  pickup_location: yup.string().required(`Pickup Location ` + IS_REQUIRED),
  destination: yup.string().required("Destination is required"),
  date_requested: yup.string().required("Date is required"),
});

export const travelOrderInitialValues = {
  journey_start_time: "",
  journey_end_time: "",
  purpose: "",
  destination: "",
  date_requested: "",
  project: "",
  project_activity: "",
  pickup_location: "",
};
