import classes from '../../../../Membership/Members/NewMemberForm/MultiForm/MultiForm.module.css';
import ActionButtons from '../../../../Membership/Members/NewMemberForm/MultiForm/ActionButtons/ActionButtons';
import withForm from '../../../../../hoc/withForm';
import TextAreaField from '../../../../common/TextAreaField';
import { useDispatch } from 'react-redux';
import { selectCaseFile } from '../../../../../store/caseFileReducer';
import { Field } from 'formik';

const MultForm5 = ({ page, limit, values, onBack, isSubmitting }) => {
  const dispatch = useDispatch();

  const handleGoBack = () => {
    dispatch(selectCaseFile(values));
    onBack();
  };

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
        <label
          htmlFor="declaration"
          style={{ marginLeft: 4, marginRight: 4, color: '' }}
        >
          <Field type="checkbox" name="declaration" />I have read and discussed
          the above information with the officer and understood the risks and
          benefits involved, the nature and limits of confidentiality, and what
          is expected of me as a client of the legal aid services. I hereby
          instruct FIDA - Uganda to take over the management of my case.
        </label>
      </div>

      <ActionButtons
        page={page}
        onBack={handleGoBack}
        disabled={!values?.declaration || isSubmitting}
        limit={limit}
      />
    </div>
  );
};

export default withForm(MultForm5);
