import * as yup from "yup";
import { IS_REQUIRED } from '../../../../lib/constants';

export const requisitionSchema = yup.object().shape({
  project_name: yup.string().required(`Project ${IS_REQUIRED}`),
  budget_year: yup.string().required(`Budget ${IS_REQUIRED}`),
  type: yup.string().required(`Type ${IS_REQUIRED}`),
  unit_price: yup.string().required(`Unit Price ${IS_REQUIRED}`),
  quantity: yup.string().required(`Quantity ${IS_REQUIRED}`),
  subject_of_procurement: yup.string().required(`Subject ${IS_REQUIRED}`),
  delivery_location: yup.string().required(`Delivery Location ${IS_REQUIRED}`),
  date_required: yup.string().required(`Date Required ${IS_REQUIRED}`),
});

export const requisitionInitialValues = {
  project_name: "",
  budget_year: "",
  type: "",
  unit_price: "",
  quantity: "",
  subject_of_procurement: "",
  delivery_location: "",
  date_required: "",
};
