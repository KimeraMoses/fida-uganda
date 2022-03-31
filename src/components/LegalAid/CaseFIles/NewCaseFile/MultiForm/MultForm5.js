import React from "react";
import classes from "../../../../Membership/Members/NewMemberForm/MultiForm/MultiForm.module.css";
import { Textarea } from "@chakra-ui/react";
import ActionButtons from "../../../../Membership/Members/NewMemberForm/MultiForm/ActionButtons/ActionButtons";

const MultForm5 = ({ nextStep, handleChange, values, Continue, Previous }) => {
  return (
    <div className={classes.form_wrapper}>
      <form>
        <div className={classes.field_wrapper}>
          <div className={classes.field_label}>
            9. What kind of support do you need, tell us your expectation?
          </div>
          <Textarea placeholder="Type here" />
        </div>
        <div className={classes.field_wrapper}>
          <div className={classes.field_label}>
            10. Comments by the legal officer.
          </div>
          <Textarea placeholder="Type here" />
        </div>
        <div className={classes.field_wrapper}>
          <div className={classes.field_label}>11. Declaration.</div>
          <p>
            I have read and discussed the above information with the officer and
            understood the risks and benefits involved, the nature and limits of
            confidentiality, and what is expected of me as a client of the legal
            aid services. I hereby instruct FIDA - Uganda to take over the
            management of my case.
          </p>
        </div>

        <ActionButtons
          step={values.step}
          Continue={Continue}
          Previous={Previous}
        />
      </form>
    </div>
  );
};

export default MultForm5;
