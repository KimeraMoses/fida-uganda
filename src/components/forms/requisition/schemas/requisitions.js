import * as yup from "yup";
import { IS_REQUIRED } from "../../../../lib/constants";

export const requisitionSchema = yup.object().shape({
  project_name: yup.string().required(`Project ${IS_REQUIRED}`),
  budget_year: yup.string().required(`Budget ${IS_REQUIRED}`),
  type: yup.string().required(`Type ${IS_REQUIRED}`),
  delivery_location: yup.string().required(`Delivery Location ${IS_REQUIRED}`),
  date_required: yup.string().required(`Date Required ${IS_REQUIRED}`),

  //Fields not required for type ==='Activity"
  unit_price: yup.number().when("type", {
    is: (val) => val !== "Activity",
    then: yup.number().required(`unit price ${IS_REQUIRED}`),
  }),
  num_units: yup.number().when("type", {
    is: (val) => val !== "Activity",
    then: yup.number().required(`Quantity ${IS_REQUIRED}`),
  }),
  subject_of_procurement: yup.number().when("type", {
    is: (val) => val !== "Activity",
    then: yup.number().required(`uSubject ${IS_REQUIRED}`),
  }),

  //Fields required for type ==='Activity"
  activity_title: yup.string().when("type", {
    is: (val) => val === "Activity",
    then: yup.string().required(`Activity title is Required ${IS_REQUIRED}`),
  }),
  activities: yup.array().when("type", {
    is: (val) => val === "Activity",
    then: yup.array().required(`Activities are Required ${IS_REQUIRED}`),
  }),
});

export const requisitionInitialValues = {
  project_name: "",
  budget_year: "",
  type: "",
  unit_price: "",
  num_units: "",
  subject_of_procurement: "",
  delivery_location: "",
  date_required: "",
  activity_title: "" || null,
  activities: [] || null,
};
