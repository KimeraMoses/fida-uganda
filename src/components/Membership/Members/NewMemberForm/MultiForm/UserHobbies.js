import React from 'react';
import withForm from '../../../../../hoc/withForm';
import classes from './MultiForm.module.css';
import ActionButtons from './ActionButtons/ActionButtons';
import { Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { selectMember } from '../../../../../store/memberReducer';

const UserHobbies = ({ page, limit, isSubmitting, onBack, values }) => {
  const dispatch = useDispatch();

  const handleGoBack = () => {
    dispatch(selectMember(values));
  };

  return (
    <div className={classes.form_wrapper}>
      <div className={classes.field_wrapper}>
        <div className={classes.field_label}>Hobbies</div>
        <RadioGroup colorScheme="purple" style={{ marginLeft: 15 }}>
          <Stack direction="column">
            <Radio value="1">Music</Radio>
            <Radio value="2">Reading</Radio>
            <Radio value="3">Movies</Radio>
            <Radio value="4">Excercising</Radio>
            <Radio value="5">Sports</Radio>
            <Radio value="6">Others (Specify)</Radio>
          </Stack>
        </RadioGroup>
      </div>
      <div className={classes.field_wrapper}>
        <div className={classes.field_label}>Membership Fees Structure</div>
        <p>
          Our fees structure lorem ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
        </p>
      </div>

      <ActionButtons
        page={page}
        limit={limit}
        disabled={isSubmitting}
        onBack={handleGoBack}
      />
    </div>
  );
};

export default withForm(UserHobbies);
