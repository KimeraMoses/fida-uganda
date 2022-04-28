import React, { useState } from "react";
import UserDetails from "./MultiForm/UserDetails";
import UserExperience from "./MultiForm/UserExperience";
import UserHobbies from "./MultiForm/UserHobbies";
import UserInterests from "./MultiForm/UserInterests";

const NewMembersForm = () => {
  const [values, setValues] = useState({
    step: 1,
    full_name: "",
    postal_address: "",
    phone_number: "",
    email: "",
    employment_sector: "",
    study_completion_yr: "",
    membership_duration: "",
    language: "",
    professional_experience: [],
    area_of_interest: [],
    hobbies: [],
  });

  const prevStep = () => {
    setValues({ ...values, step: values.step - 1 });
  };
  const nextStep = () => {
    setValues({ ...values, step: values.step + 1 });
  };

  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  // handle field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  switch (values.step) {
    case 1:
      return (
        <UserDetails
          nextStep={nextStep}
          Continue={Continue}
          handleChange={handleChange}
          values={values}
          initialValues={""}
          validationSchema={""}
          onSuccess={""}
          success={""}
          useMutate={() => {}}
        />
      );
    case 2:
      return (
        <UserExperience
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
          Continue={Continue}
          Previous={Previous}
          initialValues={""}
          validationSchema={""}
          onSuccess={""}
          success={""}
          useMutate={() => {}}
        />
      );
    case 3:
      return (
        <UserInterests
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
          Continue={Continue}
          Previous={Previous}
          initialValues={""}
          validationSchema={""}
          onSuccess={""}
          success={""}
          useMutate={() => {}}
        />
      );
    case 4:
      return (
        <UserHobbies
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
          Continue={Continue}
          Previous={Previous}
          initialValues={""}
          validationSchema={""}
          onSuccess={""}
          success={""}
          useMutate={() => {}}
        />
      );
    default:
    // do nothing
  }
};

export default NewMembersForm;
