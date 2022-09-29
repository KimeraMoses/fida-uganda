import React from "react";
import FormButton from "../../../../../common/UI/FormButton/FormButton";
import classes from "./ActionButtons.module.css";

const ActionButtons = ({ page, onBack, disabled, limit, loading }) => {
  const firstStep = page === 1 ? true : false;
  return (
    <div
      className={`${classes.form_action_wrapper} ${
        firstStep ? classes.first_step : ""
      }`}
    >
      {page !== 1 && (
        <FormButton variant="colored" type="button" onClick={onBack}>
          Back and Continue
        </FormButton>
      )}
      <FormButton variant="colored" type="submit" disabled={disabled}>
        {loading
          ? "Saving..."
          : page !== limit
          ? "Save and Continue"
          : "Submit"}
      </FormButton>
    </div>
  );
};

export default ActionButtons;
