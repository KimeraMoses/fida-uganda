import classes from "../../../../Membership/Members/NewMemberForm/MultiForm/MultiForm.module.css";
import ActionButtons from "../../../../Membership/Members/NewMemberForm/MultiForm/ActionButtons/ActionButtons";
import withForm from "../../../../../hoc/withForm";
import TextAreaField from "../../../../common/TextAreaField";

const MultForm5 = ({ page, limit, onBack, isSubmitting }) => {
  return (
    <div className={classes.form_wrapper}>
      <div className={classes.field_wrapper}>
        <div className={classes.field_label}>
          9. What kind of support do you need, tell us your expectation?
        </div>
        <TextAreaField name="natureOfSupport" placeholder="Type here" />
      </div>
      <div className={classes.field_wrapper}>
        <div className={classes.field_label}>
          10. Comments by the legal officer.
        </div>
        <TextAreaField name="comments" placeholder="Type here" />
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
        page={page}
        onBack={onBack}
        disabled={isSubmitting}
        limit={limit}
      />
    </div>
  );
};

export default withForm(MultForm5);
