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
  useDeleteCaseComment,
} from '../../../../../hooks/useCaseFiles';
import { toastError, toastSuccess } from '../../../../../lib/toastDetails';
import FormButton from '../../../../common/UI/FormButton/FormButton';
import Loader from '../../../../common/UI/Loader/Loader';

const UserName = ({ user, isLoggedIn = true }) => {
  let userName = '';
  if (isLoggedIn) {
    let userN = user.split(' ');
    if (userN.length < 2) {
      userName = userN[0].charAt(0);
    } else {
      userName = userN[0].charAt(0) + userN[1].charAt(0);
    }
  }
  return userName.toUpperCase();
};

const ActionForm = ({ values }) => {
  const {
    data,
    isLoading,
    isError: isLoadingError,
  } = useCaseComments(values?.id);

  const {
    mutate,
    isLoading: isAdding,
    error,
    isSuccess,
    isError,
  } = useAddCaseComment();

  const { mutate: onDelete, isLoading: isDeleting } = useDeleteCaseComment();
  const [actionId, setActionId] = useState();
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
    return <Loader />;
  }

  if (isLoadingError) {
    return <div>Error Loading Actions</div>;
  }

  const handleDelete = (action) => {
    setActionId(action.actionId);
    onDelete(action);
  };

  return (
    <div>
      {data?.CaseComments?.map((action) => (
        <ActionCard
          action={action}
          key={action.id}
          handleDelete={handleDelete}
          isDeleting={isDeleting}
          actionId={actionId}
        />
      ))}
      <Textarea
        name="comment"
        placeholder="Type here"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className={styles.add_actions_btn}>
        <FormButton
          type="button"
          variant="save"
          rounded={false}
          disabled={isDisabled}
          onClick={onClick}
        >
          Add Action
        </FormButton>
      </div>
    </div>
  );
};

export const ActionCard = ({ action, handleDelete, isDeleting, actionId }) => {
  const { user } = useSelector((state) => state.auth);
  const full_name = action?.createdBy?.full_name;

  return (
    <div className={styles.card_wrapper}>
      <div className={styles.avater_wrapper}>
        <UserName user={full_name} />
      </div>
      <div className={styles.content_wrapper}>
        <div>
          <h3>{full_name}</h3>
          <p>{action?.body}</p>
        </div>
        {user && user?.id === action?.createdBy?.id && (
          <>
            {isDeleting && actionId === action?.id ? (
              <p>Deletion in progress</p>
            ) : (
              <div
                className={styles.delete_btn}
                onClick={() =>
                  handleDelete({ actionId: action?.id, caseId: action?.case })
                }
              >
                Delete
              </div>
            )}
          </>
        )}
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
            defaultValue={referredTo?.full_name}
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
