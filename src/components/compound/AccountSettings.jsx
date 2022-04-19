import React, { useEffect } from "react";
import SectionHeader from "../common/SectionHeader";
import AccountSettingsForm from "../forms/account/AccountSettingsForm";
import {
  useAddEmployee,
  useEmployee,
  useEditEmployee,
} from "../../hooks/useEmployee";
import { Center, Spinner, useToast } from "@chakra-ui/react";
import { toastSuccess } from "../../lib/toastDetails";

const AccountSettings = () => {
  const { data, isLoading } = useEmployee();
  const {
    mutate: onAddEmployee,
    isLoading: isSubmitting,
    isSuccess,
    isError,
    error,
  } = useAddEmployee();
  const {
    mutate: onEditEmployee,
    isLoading: isUpdating,
    isSuccess: isUpdated,
    isError: isUpdateError,
    error: updateError,
  } = useEditEmployee();

  const toast = useToast();

  useEffect(() => {
    if (isSuccess) {
      toast(toastSuccess("Successfully updated account"));
    }
    if (isUpdated) {
      toast(toastSuccess("Successfully updated account"));
    }
  }, [isSuccess, toast, isUpdated]);

  if (isLoading) {
    return (
      <>
        <SectionHeader title="Account Settings" />
        {isLoading && (
          <Center>
            <Spinner />
          </Center>
        )}
      </>
    );
  }

  return (
    <>
      <SectionHeader title="Account Settings" />
      <AccountSettingsForm
        initialValues={data && data.employee}
        onSubmit={data ? onAddEmployee : onEditEmployee}
        isSubmitting={data ? isSubmitting : isUpdating}
        isError={data ? isError : isUpdateError}
        error={data ? error : updateError}
      />
    </>
  );
};

export default AccountSettings;
