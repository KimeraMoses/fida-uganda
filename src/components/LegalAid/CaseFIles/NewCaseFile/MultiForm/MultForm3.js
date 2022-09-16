import classes from '../../../../Membership/Members/NewMemberForm/MultiForm/MultiForm.module.css';
import { SimpleGrid } from '@chakra-ui/react';
import InputField from '../../../../common/UI/InputField/InputField';
import ActionButtons from '../../../../Membership/Members/NewMemberForm/MultiForm/ActionButtons/ActionButtons';
import SelectField from '../../../../common/SelectField';
import { trueFalseOptions } from '../../../../../lib/options';
import TextAreaField from '../../../../common/TextAreaField';
import withForm from '../../../../../hoc/withForm';
import { useDispatch } from 'react-redux';
import { selectCaseFile } from '../../../../../store/caseFileReducer';

const MultForm3 = ({ page, limit, values, onBack, isSubmitting }) => {
  const dispatch = useDispatch();

  const handleGoBack = () => {
    dispatch(selectCaseFile(values));
    onBack();
  };

  return (
    <div className={classes.form_wrapper}>
      <div className={classes.field_wrapper}>
        <SimpleGrid columns={2} spacing={2} style={{ alignItems: 'center' }}>
          <div className={classes.field_label}>
            2. Type of Issue/Matter/Case
          </div>
          <InputField name="about" placeholder="Type of Issue/Matter/Case" />
        </SimpleGrid>
      </div>
      <div className={classes.field_wrapper}>
        <SimpleGrid columns={2} spacing={2} style={{ alignItems: 'center' }}>
          <div className={classes.field_label}>
            3. Nature of Issue/Matter/Case
          </div>
          <InputField placeholder="Nature" name="nature" />
        </SimpleGrid>
      </div>
      <div className={classes.field_wrapper}>
        <SimpleGrid columns={2} spacing={2} style={{ alignItems: 'center' }}>
          <div className={classes.field_label}>
            4. How long has this been happening?
          </div>
          <InputField name="duration" placeholder="In Days" />
        </SimpleGrid>
      </div>
      <div className={classes.field_wrapper}>
        <SimpleGrid columns={2} spacing={2} style={{ alignItems: 'center' }}>
          <div className={classes.field_label}>
            5. Have you talked to anyone before?
          </div>
          <SelectField
            name="hasTalkedToAnyone"
            placeholder="Select Option"
            options={trueFalseOptions}
          />
        </SimpleGrid>
      </div>
      <div className={classes.field_wrapper}>
        <div className={classes.field_label}>
          6. Kindly provide more details about the matter/case selected in 2.
          above
        </div>
        <TextAreaField name="details" placeholder="Type here" />
      </div>
      <div className={classes.field_wrapper}>
        <div className={classes.field_label}>
          7. Tell us the person or organization and the action that was taken.
        </div>
        <TextAreaField name="organizationTalkedTo" placeholder="Type here" />
      </div>

      <ActionButtons
        page={page}
        onBack={handleGoBack}
        disabled={isSubmitting}
        limit={limit}
      />
    </div>
  );
};

export default withForm(MultForm3);
