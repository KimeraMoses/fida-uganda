import * as yup from "yup";

export const memberSchema = yup.object().shape({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  maiden_name: yup.string().required("Maiden name is required"),
  profession: yup.string().required("Profession is required"),
  email: yup.string().email("Invalid email").required("Project is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  address: yup.string().required("Address is required"),
  employment_status: yup.string().required("Employment status is required"),
  membership_duration: yup.string().required("membership duration is required"),
  additional_skills: yup.array(),
  year_of_undergraduate_completion: yup.string().required("Year of undergraduate completion is required"),
  professional_experience: yup.string().required("Project is required"),
//   hasPaid: yup.bool().required("Project is required"),
  other_languages: yup.array,
  preferred_language: yup.string().required("Preferred language is required"),
});

export const memberInitialValues = yup.object().shape({
    first_name: "",
    last_name: "",
    maiden_name:"",
    profession: "",
    email: "",
    phoneNumber: "",
    address: "",
    employment_status: "",
    membership_duration: "",
    additional_skills:[],
    year_of_undergraduate_completion: "",
    professional_experience: "",
    other_languages: [],
    preferred_language: "",
  });
