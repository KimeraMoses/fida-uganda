import React, { useState } from 'react';
import {
  useAddMember,
  useUpdateMember,
  useSelectedMember,
} from '../../../../hooks/useMember';
import UserDetails from './MultiForm/UserDetails';
import UserExperience from './MultiForm/UserExperience';
import UserHobbies from './MultiForm/UserHobbies';
import UserInterests from './MultiForm/UserInterests';
import { useDispatch } from 'react-redux';
import {
  initialValuesFour,
  initialValuesOne,
  initialValuesOneSchema,
  initialValuesThree,
  initialValuesTwo,
  mutateInitialValuesFour,
  mutateInitialValuesOne,
  mutateInitialValuesThree,
  mutateInitialValuesTwo,
} from './schema';
import { resetCaseFile } from '../../../../store/caseFileReducer';
import { selectMember } from '../../../../store/memberReducer';

const NewMembersForm = ({ onClose, isNew = false }) => {
  const dispatch = useDispatch();
  const selectedMember = useSelectedMember();
  const limit = 4;
  const MEMBER_ADDED = 'Member added successfully';
  const MEMBER_UPDATED = 'Member updated successfully';
  const [page, setPage] = useState(1);

  let valuesOne = initialValuesOne;
  let valuesTwo = initialValuesTwo;
  let valuesThree = initialValuesThree;
  let valuesFour = initialValuesFour;
  if (selectedMember) {
    valuesOne = mutateInitialValuesOne(initialValuesOne, selectedMember);
    valuesTwo = mutateInitialValuesTwo(initialValuesTwo, selectedMember);
    valuesThree = mutateInitialValuesThree(initialValuesThree, selectedMember);
    valuesFour = mutateInitialValuesFour(initialValuesFour, selectedMember);
  }

  const prevStep = () => {
    setPage(page - 1);
  };
  const nextStep = () => {
    setPage(page + 1);
  };

  const mutateData = (data) => {
    dispatch(selectMember(data));
    return data;
  };

  const onSubmit = (data) => {
    dispatch(resetCaseFile());
    onClose();
  };

  switch (page) {
    case 1:
      return (
        <UserDetails
          useMutate={selectedMember ? useUpdateMember : useAddMember}
          onSuccess={nextStep}
          success={selectMember ? MEMBER_UPDATED : MEMBER_ADDED}
          initialValues={valuesOne}
          validationSchema={initialValuesOneSchema}
          page={page}
          limit={limit}
        />
      );
    case 2:
      return (
        <UserExperience
          useMutate={useUpdateMember}
          onSuccess={nextStep}
          success={MEMBER_UPDATED}
          initialValues={valuesTwo}
          page={page}
          limit={limit}
          onBack={prevStep}
          mutateData={mutateData}
        />
      );
    case 3:
      return (
        <UserInterests
          useMutate={useUpdateMember}
          onSuccess={nextStep}
          success={MEMBER_UPDATED}
          initialValues={valuesThree}
          page={page}
          limit={limit}
          onBack={prevStep}
          mutateData={mutateData}
        />
      );
    case 4:
      return (
        <UserHobbies
          useMutate={useUpdateMember}
          onSuccess={onSubmit}
          success={MEMBER_UPDATED}
          initialValues={valuesFour}
          page={page}
          limit={limit}
          onBack={prevStep}
          mutateData={mutateData}
        />
      );
    default:
    // do nothing
  }
};

export default NewMembersForm;
