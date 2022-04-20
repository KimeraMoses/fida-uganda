import { useEffect } from "react";
import SectionHeader from "../common/SectionHeader";
import AccountSettingsForm from "../forms/account/AccountSettingsForm";
import { useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useUpdateProfile } from "../../hooks/useUser";
import { toastSuccess } from "../../lib/toastDetails";
import { useNavigate } from "react-router-dom";

const AccountSettings = () => {
  const { user } = useSelector((state) => state.auth);
  const { mutate, isLoading, isSuccess, isError, error } = useUpdateProfile();
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      toast(toastSuccess("Profile updated successfully"));
      navigate("/");
    }
  }, [isSuccess, toast, navigate]);

  return (
    <>
      <SectionHeader title="Account Settings" />
      <AccountSettingsForm
        initialValues={user}
        onSubmit={mutate}
        isSubmitting={isLoading}
        isError={isError}
        error={error}
      />
    </>
  );
};

export default AccountSettings;
