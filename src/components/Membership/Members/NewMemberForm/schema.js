import * as yup from 'yup';
//import { IS_REQUIRED } from "../../../../lib/constants";

export const initialValuesOneSchema = yup.object().shape({
  first_name: yup.string().required('First name is required'),
  last_name: yup.string().required('Last name is required'),
  address: yup.string().required('Postal address is required'),
  phoneNumber: yup.string().required('Phone number is required'),
  email: yup.string().required('Email is required'),
  employment_status: yup.string().required('Employment status is required'),
  year_of_undergraduate_completion: yup
    .string()
    .required('This field is required'),
  professional_experience: yup
    .string()
    .required('Professional experience is required'),
  membership_duration: yup.string().required('Membership duration is required'),
});

export const initialValuesOne = {
  first_name: '',
  maiden_name: '',
  last_name: '',
  address: '',
  phoneNumber: '',
  email: '',
  employment_status: '',
  year_of_undergraduate_completion: '',
  professional_experience: '',
  membership_duration: '',
  additional_skills: '',
};

export const initialValuesTwo = {
  languages: [],
  professional_experience: '',
};

export const initialValuesThree = {
  area_of_interest: [],
};

export const initialValuesFour = {
  hobbies: [],
};

export const mutateInitialValuesOne = (initialValues, values) => {
  return {
    ...initialValues,
    first_name: values.first_name,
    median_name: values.median_name,
    last_name: values.last_name,
    address: values.address,
    phoneNumber: values.phoneNumber,
    email: values.email,
    employment_status: values.employment_status,
    year_of_undergraduate_completion: values.year_of_undergraduate_completion,
    professional_experience: values.professional_experience,
    membership_duration: values.membership_duration,
    additional_skills: values.additional_skills,
    id: values?.id,
  };
};

export const mutateInitialValuesTwo = (initialValues, values) => {
  return {
    ...initialValues,
    languages: values?.languages,
    professional_experience: values?.professional_experience,
    id: values?.id,
  };
};

export const mutateInitialValuesThree = (initialValues, values) => {
  return {
    ...initialValues,
    hobbies: values?.hobbies,
    id: values?.id,
  };
};

export const mutateInitialValuesFour = (initialValues, values) => {
  return {
    ...initialValues,
    area_of_interest: values?.area_of_interest,
    id: values?.id,
  };
};

export const mutateValues = (initialValues, values) => {
  return {
    ...initialValues,
    ...values,
  };
};

export const initialValues = {
  ...initialValuesOne,
  ...initialValuesTwo,
  ...initialValuesThree,
  ...initialValuesFour,
};
