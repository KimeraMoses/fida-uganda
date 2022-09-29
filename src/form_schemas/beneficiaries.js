import * as yup from "yup";

export const beneficiariesInitialValues = {
  name: "",
  age: "",
  sex: "",
  location: "",
  phoneNumber: "",
};

export const activitiesInitialValues = {
  item: "",
  qty: "",
  unit: "",
};

export const beneficiariesSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  age: yup.string().required("Age is required"),
  sex: yup.string().required("Sex is required"),
  location: yup.string().required("Location is required"),
});

export const activitySchema = yup.object().shape({
  item: yup.string().required("Item is required"),
  qty: yup.string().required("Quantity is required"),
  unit: yup.string().required("Unit Price is required"),
});
