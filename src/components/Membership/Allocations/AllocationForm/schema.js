import * as yup from "yup";

export const allocationFormSchema = {
  allocated_to: yup.array().required("Recepients required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("A message is required") ,
};
