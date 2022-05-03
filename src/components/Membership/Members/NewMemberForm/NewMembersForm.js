import React, { useState } from "react";
import { useAddMember, useUpdateMember } from "../../../../hooks/useMember";
import UserDetails from "./MultiForm/UserDetails";
import UserExperience from "./MultiForm/UserExperience";
import UserHobbies from "./MultiForm/UserHobbies";
import UserInterests from "./MultiForm/UserInterests";

const NewMembersForm = ({ onClose }) => {
  const limit = 4;
  const MEMBER_ADDED = "Member added successfully";
  const MEMBER_UPDATED = "Member updated successfully";
  const [page, setPage] = useState(1);

  const initialValuesOne = {
    first_name: "",
    median_name: "",
    last_name: "",
    postal_address: "",
    phone_number: "",
    email: "",
    employment_status: "",
    year_of_undergraduate_completion: "",
    professional_experience: "",
    membership_duration: "",
  };

  const initialValuesTwo = {
    languages: [],
    professional_experience: "",
  };

  const initialValuesThree = {
    area_of_interest: [],
  };

  const initialValuesFour = {
    hobbies: [],
  };

  const prevStep = () => {
    setPage(page - 1);
  };
  const nextStep = () => {
    setPage(page + 1);
  };

  switch (page) {
    case 1:
      return (
        <UserDetails
          useMutate={useAddMember}
          onSuccess={nextStep}
          success={MEMBER_ADDED}
          initialValues={initialValuesOne}
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
          initialValues={initialValuesTwo}
          page={page}
          limit={limit}
          onBack={prevStep}
        />
      );
    case 3:
      return (
        <UserInterests
          useMutate={useUpdateMember}
          onSuccess={nextStep}
          success={MEMBER_UPDATED}
          initialValues={initialValuesThree}
          page={page}
          limit={limit}
          onBack={prevStep}
        />
      );
    case 4:
      return (
        <UserHobbies
          useMutate={useUpdateMember}
          onSuccess={onClose}
          success={MEMBER_UPDATED}
          initialValues={initialValuesFour}
          page={page}
          limit={limit}
          onBack={prevStep}
        />
      );
    default:
    // do nothing
  }
};

export default NewMembersForm;
