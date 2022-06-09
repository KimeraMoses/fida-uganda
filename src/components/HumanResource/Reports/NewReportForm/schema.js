import * as yup from "yup";

export const initialValues = {
  report_title: "",
  supervisor_name: "",
  date: "",
  reporting_period: "",
  type: "",
  folder: "",
};

export const reportSchema = yup.object().shape({
  report_title: yup.string().required("Report Title is required"),
  // supervisor_name: yup.string().required("Supervisor's Name is required"),
  reporting_period: yup.string().required("Reporting period is required"),
  type: yup.string().required("Report Type is required"),
});

export const addFolderIdToReport = (folderId) => {
  return {
    ...initialValues,
    folder: folderId,
  };
};
