import * as Yup from "yup";

export const caseFileInitialValues = {
  complainantName: "",
  complainantSex: "",
  complainantAge: "",
  complainantPhoneNumber: "",
  complainantCountry: "",
  complainantNIN: "",
  complainantDistrict: "",
  complainantSubCounty: "",
  complainantParish: "",
  complainantVillage: "",
  complainantMaritalStatus: "",
  complainantAccompaniedBy: "",
  complainantJob: "",
  complainantPlaceOfWork: "",
  complainantLevelOfEducation: "",
  complainantPreferredLanguage: "",
  complainantRelationshipWithRespondent: "",
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
  respondentRelationshipWithRespondent: "",
  sight: "",
  hearing: "",
  movement: "",
  remembering: "",
  dressing: "",
  speech: "",
  isDisabled: "",
};

export const caseFileObject = (caseFile) => {
  return {
    ...caseFileInitialValues,
    ...caseFile,
    ...caseFile?.clv,
    ...caseFile?.complainant,
  };
};

export const caseFileSchema = Yup.object().shape({
  complainantName: Yup.string().required("Name is required"),
  complainantSex: Yup.string().required("Sex is required"),
  complainantAge: Yup.string().required("Age is required"),
  complainantPhoneNumber: Yup.string().required("Phone Number is required"),
  complainantCountry: Yup.string().required("Country is required"),
  complainantNIN: Yup.string().required("NIN is required"),
  complainantDistrict: Yup.string().required("District is required"),
  complainantSubCounty: Yup.string().required("Sub County is required"),
  complainantParish: Yup.string().required("Parish is required"),
  complainantVillage: Yup.string().required("Village is required"),
  complainantMaritalStatus: Yup.string().required("Marital Status is required"),
  complainantAccompaniedBy: Yup.string().required("Accompanied by is required"),
  complainantJob: Yup.string().required("Job is required"),
  complainantPlaceOfWork: Yup.string().required("Place of work is required"),
  complainantLevelOfEducation: Yup.string().required(
    "Level of education is required"
  ),
  complainantPreferredLanguage: Yup.string().required(
    "Preferred language is required"
  ),
  complainantRelationshipWithRespondent: Yup.string().required(
    "Relationship is required"
  ),
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
