import * as Yup from 'yup';

export const caseFileInitialValues = {
  respondentName: '',
  respondentSex: '',
  respondentAge: '',
  respondentPhoneNumber: '',
  respondentCountry: '',
  respondentNIN: '',
  respondentDistrict: '',
  respondentCounty: '',
  respondentParish: '',
  respondentVillage: '',
  respondentMaritalStatus: '',
  respondentAccompaniedBy: '',
  respondentJob: '',
  respondentPlaceOfWork: '',
  respondentLevelOfEducation: '',
  respondentLanguage: '',
  respondentRelation: '',
};

export const caseFileTwoInitialValues = {
  sight: '',
  hearing: '',
  movement: '',
  remembering: '',
  dressing: '',
  speech: '',
  isDisabled: '',
};

export const caseFileThreeInitialValues = {
  about: '',
  nature: '',
  duration: '',
  hasTalkedToAnyone: '',
  details: '',
  organizationTalkedTo: '',
};

export const caseFileFourInitialValues = {
  about: '',
  beneficiaries: [],
};

export const caseFileFiveInitialValues = {
  natureOfSupport: '',
  comments: '',
};

export const caseFileSixInitialValues = {
  status: '',
  referred_to: '',
  reason_for_referral: '',
  actionsTaken: [],
};

export const caseFileOneObject = (caseFile) => {
  return {
    ...caseFileInitialValues,
    ...caseFile,
  };
};

export const caseFileSchema = Yup.object().shape({
  // searchClient: Yup.string()
  //   .matches("^[A-Za-z\\s]*$", "Only use letters")
  //   .required("Client Info is required"),
  respondentName: Yup.string().required('Name is required'),
  respondentSex: Yup.string().required('Sex is required'),
  respondentAge: Yup.number()
    .max(150, 'Age can not be more than 150')
    .required('Age is required'),
  respondentPhone: Yup.number().required('Phone Number is required'),
  respondentNIN: Yup.string()
    .required('National ID is required')
    .matches(
      '^[A-Z0-9]*$',
      'National ID can only contain numbers and capital letters'
    ),
  respondentCountry: Yup.string()
    .matches('^[A-Za-z\\s]*$', 'Only use letters')
    .required('Country is required'),
  respondentDistrict: Yup.string().matches(
    '^[A-Za-z\\s]*$',
    'Only use letters'
  ),
  respondentSubCounty: Yup.string().matches(
    '^[A-Za-z\\s]*$',
    'Only use letters'
  ),
  respondentParish: Yup.string().matches('^[A-Za-z\\s]*$', 'Only use letters'),
  respondentVillage: Yup.string().matches('^[A-Za-z\\s]*$', 'Only use letters'),
  respondentMaritalStatus: Yup.string().matches(
    '^[A-Za-z\\s]*$',
    'Only use letters'
  ),
  respondentAccompaniedBy: Yup.string().matches(
    '^[A-Za-z\\s]*$',
    'Only use letters'
  ),
  respondentJob: Yup.string().matches('^[A-Za-z\\s]*$', 'Only use letters'),
  respondentPlaceOfWork: Yup.string().matches(
    '^[A-Za-z\\s]*$',
    'Only use letters'
  ),
  respondentLevelOfEducation: Yup.string().matches(
    '^[A-Za-z\\s]*$',
    'Only use letters'
  ),
  respondentPreferredLanguage: Yup.string().matches(
    '^[A-Za-z\\s]*$',
    'Only use letters'
  ),
  respondentRelationshipWithComplainant: Yup.string().matches(
    '^[A-Za-z\\s]*$',
    'Only use letters'
  ),
});

export const clvCaseFileSchema = Yup.object().shape({
  // clvName: Yup.string()
  //   .matches("^[A-Za-z\\s]*$", "Only use letters")
  //   .required("Name is required"),
  // searchClient: Yup.string()
  //   .matches("^[A-Za-z\\s]*$", "Only use letters")
  //   .required("Client Info is required"),
  respondentName: Yup.string().required('Name is required'),
  respondentSex: Yup.string().required('Sex is required'),
  respondentAge: Yup.number()
    .max(150, 'Age can not be more than 150')
    .required('Age is required'),
  respondentPhoneNumber: Yup.number().required('Phone Number is required'),
  respondentNIN: Yup.string()
    .required('National ID is required')
    .matches(
      '^[A-Z0-9]*$',
      'National ID can only contain numbers and capital letters'
    ),
  respondentCountry: Yup.string()
    .matches('^[A-Za-z\\s]*$', 'Only use letters')
    .required('Country is required'),
  respondentDistrict: Yup.string().matches(
    '^[A-Za-z\\s]*$',
    'Only use letters'
  ),
  respondentSubCounty: Yup.string().matches(
    '^[A-Za-z\\s]*$',
    'Only use letters'
  ),
  respondentParish: Yup.string().matches('^[A-Za-z\\s]*$', 'Only use letters'),
  respondentVillage: Yup.string().matches('^[A-Za-z\\s]*$', 'Only use letters'),
  respondentMaritalStatus: Yup.string().matches(
    '^[A-Za-z\\s]*$',
    'Only use letters'
  ),
  respondentAccompaniedBy: Yup.string().matches(
    '^[A-Za-z\\s]*$',
    'Only use letters'
  ),
  respondentJob: Yup.string().matches('^[A-Za-z\\s]*$', 'Only use letters'),
  respondentPlaceOfWork: Yup.string().matches(
    '^[A-Za-z\\s]*$',
    'Only use letters'
  ),
  respondentLevelOfEducation: Yup.string().matches(
    '^[A-Za-z\\s]*$',
    'Only use letters'
  ),
  respondentPreferredLanguage: Yup.string().matches(
    '^[A-Za-z\\s]*$',
    'Only use letters'
  ),
  respondentRelationshipWithComplainant: Yup.string().matches(
    '^[A-Za-z\\s]*$',
    'Only use letters'
  ),
});

export const caseFileTwoSchema = Yup.object().shape({
  sight: Yup.string().required('Sight is required'),
  hearing: Yup.string().required('Hearing is required'),
  movement: Yup.string().required('Movement is required'),
  remembering: Yup.string().required('Remembering is required'),
  dressing: Yup.string().required('Dressing is required'),
  speech: Yup.string().required('Speech is required'),
  isDisabled: Yup.string().required('Disability is required'),
});
