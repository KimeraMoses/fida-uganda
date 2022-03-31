import React, { useState } from "react";
import MultForm5 from "./MultiForm/MultForm5";
import MultForm4 from "./MultiForm/MultForm4";
import MultForm3 from "./MultiForm/MultForm3";
import MultForm2 from "./MultiForm/MultForm2";
import MultForm1 from "./MultiForm/MultForm1";
import MultForm6 from "./MultiForm/MultForm6";


const NewCaseFile = () => {
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
        <MultForm1
          nextStep={nextStep}
          Continue={Continue}
          handleChange={handleChange}
          values={values}
        />
      );
    case 2:
      return (
        <MultForm2
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
          Continue={Continue}
          Previous={Previous}
        />
      );
    case 3:
      return (
        <MultForm3
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
          Continue={Continue}
          Previous={Previous}
        />
      );
    case 4:
      return (
        <MultForm4
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
          Continue={Continue}
          Previous={Previous}
        />
      );
    case 5:
      return (
        <MultForm5
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
          Continue={Continue}
          Previous={Previous}
        />
      );
    case 6:
      return (
        <MultForm6
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
          Continue={Continue}
          Previous={Previous}
        />
      );
    default:
    // do nothing
  }
};

export default NewCaseFile;
