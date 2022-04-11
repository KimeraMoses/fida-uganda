import React from "react";
import FormButton from "../../../../MembersActivities/NewActivityForm/Button/FormButton";
import classes from "./ActionButtons.module.css";

const ActionButtons = ({
  page,
  onForward,
  onBackward,
  isForwardLoading,
  isBackwardLoading,
  values,
}) => {
  const firstStep = page === 1 ? true : false;
  return (
    <div
      className={`${classes.form_action_wrapper} ${
        firstStep ? classes.first_step : ""
      }`}
    >
      {page !== 1 && (
        <FormButton
          variant="colored"
          type="button"
          onClick={() => onBackward(values)}
          isSubmitting={isBackwardLoading}
        >
          Back and Continue
        </FormButton>
      )}
      <FormButton
        variant="colored"
        type="button"
        onClick={() => onForward(values)}
        isSubmitting={isForwardLoading}
      >
        {page !== 6 ? "Save and Continue" : "Submit"}
      </FormButton>
    </div>
  );
};

export default ActionButtons;
