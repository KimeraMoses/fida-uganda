import { useEffect } from 'react';
import classes from '../../../../Membership/Members/NewMemberForm/MultiForm/MultiForm.module.css';
import { SimpleGrid, Textarea, useToast } from '@chakra-ui/react';
import ActionButtons from '../../../../Membership/Members/NewMemberForm/MultiForm/ActionButtons/ActionButtons';
import styles from './MultForm6.module.css';
import withForm from '../../../../../hoc/withForm';
import TextAreaField from '../../../../common/TextAreaField';
import SelectField from '../../../../common/SelectField';
import { caseFileStatusOptions } from '../../../../../lib/options';
import SearchableField from '../../../../common/UI/SearchableField/SearchableField';
import { useUsers } from '../../../../../hooks/useUser';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectCaseFile } from '../../../../../store/caseFileReducer';
import {
  useAddCaseComment,
  useCaseComments,
} from '../../../../../hooks/useCaseFiles';
import { toastError, toastSuccess } from '../../../../../lib/toastDetails';

const ActionForm = ({ values }) => {
  const {
    data,
    isLoading,
    isError: isLoadingError,
  } = useCaseComments(values.id);
  const {
    mutate,
    isLoading: isAdding,
    error,
    isSuccess,
    isError,
  } = useAddCaseComment();
  const { user } = useSelector((state) => state.auth);
  const [value, setValue] = useState('');
  const toast = useToast();
  const success = 'Added an action';
  const isDisabled = isAdding || !value;

  useEffect(() => {
    if (isError) {
      toast(toastError(error));
    }
    if (isSuccess) {
      toast(toastSuccess(success));
      setValue('');
    }
  }, [toast, isError, error, isSuccess, success]);

  const onClick = () => {
    const actions = { case: values.id, body: value, createdBy: user.id };
    mutate(actions);
  };

  if (isLoading) {
    return <div>Loading Actions...</div>;
  }

  if (isLoadingError) {
    return <div>Error Loading Actions</div>;
  }

  return (
    <div>
      {data?.CaseComments?.map((action) => (
        <ActionCard action={action} key={action.id} />
      ))}
      <Textarea
        name="comment"
        placeholder="Type here"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className={styles.add_actions_btn}>
        <button
          type="button"
          className="fida__fm_btn fida__btn_outlined"
          disabled={isDisabled}
          onClick={onClick}
        >
          Add Action
        </button>
      </div>
    </div>
  );
};

export const ActionCard = ({ action }) => {
  const full_name = action?.createdBy?.full_name;
  const image = action?.createdBy?.image;

  return (
    <div className={styles.card_wrapper}>
      <div
        className={styles.avater_wrapper}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      ></div>
      <div className={styles.content_wrapper}>
        <h4>{full_name}</h4>
        <h6>{action?.body}</h6>
      </div>
    </div>
  );
};

const MultForm6 = ({
  page,
  limit,
  onBack,
  isSubmitting,
  setReferredTo,
  referredTo,
  values,
  setFieldValue,
}) => {
  const users = useUsers();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleGoBack = () => {
    dispatch(selectCaseFile(values));
    onBack();
  };

  const addAction = (value) => {
    const action = { userId: user?.id, action: value };
    setFieldValue('actionsTaken', [...values?.actionsTaken, action]);
  };

  return (
    <div className={classes.form_wrapper}>
      <div className={classes.field_wrapper}>
        <SimpleGrid columns={2} spacing={2} style={{ alignItems: 'center' }}>
          <div className={classes.field_label}>12. Status</div>
          <SelectField
            name="status"
            placeholder="Select option"
            options={caseFileStatusOptions}
          />
        </SimpleGrid>
      </div>
      <div className={classes.field_wrapper}>
        <SimpleGrid columns={2} spacing={2} style={{ alignItems: 'center' }}>
          <div className={classes.field_label}>13. Refer Case</div>
          <SearchableField
            placeholder="Search person"
            data={users}
            setSelectedItem={setReferredTo}
            selectedItem={referredTo.full_name}
            name="referredTo"
          />
        </SimpleGrid>
      </div>

      <div className={classes.field_wrapper}>
        <div className={classes.field_label}>14. Reason for referal.</div>
        <TextAreaField name="reason_for_referral" placeholder="Type here" />
      </div>
      <div className={classes.field_wrapper}>
        <div className={classes.field_label}>15. Action Taken. </div>
        <div className={styles.action_taken_wrapper}>
          <ActionForm values={values} addAction={addAction} />
        </div>
      </div>

      <ActionButtons
        page={page}
        onBack={handleGoBack}
        loading={isSubmitting}
        disabled={isSubmitting}
        limit={limit}
      />
    </div>
  );
};

export default withForm(MultForm6);
