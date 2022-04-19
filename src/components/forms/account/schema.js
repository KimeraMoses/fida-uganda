export const employeesInitialValues = {
  email: "",
  project: "",
  first_name: "",
  last_name: "",
  maiden_name: "",
  profession: "",
  phoneNumber: "",
  next_of_kin_name: "",
  next_of_kin_number: "",
  additional_skills: [],
  bank: "",
  account_number: "",
  tinNumber: "",
  NSSF__number: "",
  gender: "",
  other_languages: [],
  preferred_language: "",
};

export const createEmployeeObject = (values) => {
  return { ...employeesInitialValues, ...values };
};
