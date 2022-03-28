import React from "react";
import FormButton from "../../../../MembersActivities/NewActivityForm/Button/FormButton";
import classes from "./ActionButtons.module.css";

const ActionButtons = ({ step, Continue, Previous }) => {
  const firstStep = step===1? true: false;
  return (
    <div className={`${classes.form_action_wrapper} ${firstStep? classes.first_step: ''}`}>
      {step !== 1 && (
        <FormButton variant="colored" type="button" onClick={Previous}>
          Back
        </FormButton>
      )}
      <FormButton variant="colored" type="submit" onClick={Continue}>
        {step === 4 ? "Submit" : "Next"}
      </FormButton>
    </div>
  );
};

export default ActionButtons;
