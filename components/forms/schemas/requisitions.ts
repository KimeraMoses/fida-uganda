import * as yup from "yup";
import { IS_REQUIRED } from "../../../assets/constants";

export const requisitionSchema = yup.object().shape({
  project: yup.string().required(`Project ${IS_REQUIRED}`),
  budgetYear: yup.string().required(`Budget ${IS_REQUIRED}`),
  type: yup.string().required(`Type ${IS_REQUIRED}`),
  unitPrice: yup.string().required(`Unit Price ${IS_REQUIRED}`),
  quantity: yup.string().required(`Quantity ${IS_REQUIRED}`),
  subject: yup.string().required(`Subject ${IS_REQUIRED}`),
  deliveryLocation: yup.string().required(`Delivery Location ${IS_REQUIRED}`),
  dateRequired: yup.string().required(`Date Required ${IS_REQUIRED}`),
});

export const requisitionInitialValues = {
  project: "",
  budgetYear: "",
  type: "",
  unitPrice: "",
  quantity: "",
  subject: "",
  deliveryLocation: "",
  dateRequired: "",
};
