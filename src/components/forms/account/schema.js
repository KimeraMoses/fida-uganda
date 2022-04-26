import * as yup from "yup";

export const employeeSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  full_name: yup.string().required("Full name is required"),
  designation: yup.string().required("Designation is required"),
  project: yup.string().required("Project is required"),
});

export const employeesInitialValues = {
  email: "",
  full_name: "",
  designation: "",
  project: "",
};

export const createEmployeeObject = (values) => {
  const { full_name, email, project, designation } = values;

  return {
    ...employeesInitialValues,
    full_name,
    email,
    project: project?.id,
    designation,
  };
};
