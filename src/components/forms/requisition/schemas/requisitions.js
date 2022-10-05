import * as yup from "yup";
import { IS_REQUIRED } from "../../../../lib/constants";


export const activityRequisitionSchema = yup.object().shape({
  project_name: yup.string().required(`Project ${IS_REQUIRED}`),
  budget_year: yup.string().required(`Budget ${IS_REQUIRED}`),
  type: yup.string().required(`Type ${IS_REQUIRED}`),
  delivery_location: yup.string().required(`Delivery Location ${IS_REQUIRED}`),
  date_required: yup.string().required(`Date Required ${IS_REQUIRED}`),
  activity_title: yup.string().required(`Activity title is Required ${IS_REQUIRED}`),
  activities: yup.array().required(`Activities are Required ${IS_REQUIRED}`),
});

export const activityRequisitionInitialValues = {
  project_name: "",
  type: "",
  budget_year: "",
  delivery_location: "",
  date_required: "",
  activity_title: '',
  activities: [],
};

export const requisitionSchema = yup.object().shape({
  project_name: yup.string().required(`Project ${IS_REQUIRED}`),
  budget_year: yup.string().required(`Budget ${IS_REQUIRED}`),
  type: yup.string().required(`Type ${IS_REQUIRED}`),
  unit_price: yup.number().required(`unit price ${IS_REQUIRED}`),
  num_units: yup.number().required(`Quantity ${IS_REQUIRED}`),
  subject_of_procurement: yup.string().required(`Subject ${IS_REQUIRED}`),
  delivery_location: yup.string().required(`Delivery Location ${IS_REQUIRED}`),
  date_required: yup.string().required(`Date Required ${IS_REQUIRED}`),
  activity_title: yup.string().required(`Activity title is Required ${IS_REQUIRED}`),
  activities: yup.array().required(`Activities are Required ${IS_REQUIRED}`),
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
  // activity_title: '' || null,
  // activities: [] || null
};
