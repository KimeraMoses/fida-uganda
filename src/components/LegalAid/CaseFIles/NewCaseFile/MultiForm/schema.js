import * as Yup from "yup";

export const caseFileInitialValues = {
  respondentName: "",
  respondentSex: "",
  respondentAge: "",
  respondentPhoneNumber: "",
  respondentCountry: "",
  respondentNIN: "",
  respondentDistrict: "",
  respondentSubCounty: "",
  respondentParish: "",
  respondentVillage: "",
  respondentMaritalStatus: "",
  respondentAccompaniedBy: "",
  respondentJob: "",
  respondentPlaceOfWork: "",
  respondentLevelOfEducation: "",
  respondentPreferredLanguage: "",
  respondentRelationshipWithComplainant: "",
};

export const caseFileTwo = {
  sight: "",
  hearing: "",
  movement: "",
  remembering: "",
  dressing: "",
  speech: "",
  isDisabled: "",
  nature: "",
  action: "",
  hasTalkedToAnyone: "",
  wasActionTaken: "",
  actionsTaken: "",
  reason_for_referral: "",
  type: "",
  organizationTalkedTo: "",
  details: "",
  duration: "",
  search: "",
};

export const caseFileOneObject = (caseFile) => {
  return {
    ...caseFileInitialValues,
    ...caseFile,
  };
};

export const caseFileSchema = Yup.object().shape({
  respondentName: Yup.string().required("Name is required"),
  respondentSex: Yup.string().required("Sex is required"),
  respondentAge: Yup.string().required("Age is required"),
  respondentPhoneNumber: Yup.string().required("Phone Number is required"),
});

export const caseFileTwoSchema = Yup.object().shape({
  sight: Yup.string().required("Sight is required"),
  hearing: Yup.string().required("Hearing is required"),
  movement: Yup.string().required("Movement is required"),
  remembering: Yup.string().required("Remembering is required"),
  dressing: Yup.string().required("Dressing is required"),
  speech: Yup.string().required("Speech is required"),
  isDisabled: Yup.string().required("Disability is required"),
});
