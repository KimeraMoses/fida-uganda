import * as Yup from "yup";

export const projectInitialValues = {
  name: "",
  funder: "",
  duration: "",
  donor_funds: "",
  districts_of_operation: "",
  subcounties_of_operation: "",
  parishes_of_operation: "",
  villages_of_operation: "",
  targetGroup: "",
  startDate: "",
  endDate: "",
};

export const projectSchema = Yup.object().shape({
  name: Yup.string().required("Project Name is required"),
  funder: Yup.string().required("Funder is required"),
  duration: Yup.string().required("Duration is required"),
  donor_funds: Yup.string().required("Donor Funds is required"),
  districts_of_operation: Yup.string().required("District is required"),
  subcounties_of_operation: Yup.string().required("Subcounty is required"),
  parishes_of_operation: Yup.string().required("Parish is required"),
  villages_of_operation: Yup.string().required("Village is required"),
  targetGroup: Yup.string().required("Target Group is required"),
  startDate: Yup.string().required("Start Date is required"),
  endDate: Yup.string().required("End Date is required"),
});
