import * as yup from 'yup';

export const beneficiariesInitialValues = {
  name: '',
  age: '',
  sex: '',
  location: '',
  phoneNumber: '',
};

export const beneficiariesSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  age: yup.string().required('Age is required'),
  sex: yup.string().required('Sex is required'),
  location: yup.string().required('Location is required'),
});
