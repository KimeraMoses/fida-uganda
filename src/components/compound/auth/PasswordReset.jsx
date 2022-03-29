import FormHeader from "../../forms/auth/FormHeader";
import PasswordResetForm from "../../forms/auth/PasswordResetForm";
import { useResetPassword } from "../../../hooks/useUser";
import { useEffect, useMemo } from "react";
import { useToast } from "@chakra-ui/react";
import { toastSuccess } from "../../../lib/toastDetails";

function PasswordReset() {
  const toast = useToast();
  const { mutate, isLoading, isSuccess, isError, error, data } =
    useResetPassword();

  const receivedData = useMemo(() => data, [data]);

  useEffect(() => {
    if (isSuccess) {
      toast(toastSuccess(receivedData));
    }
  }, [isSuccess, receivedData, toast]);

  return (
    <>
      <FormHeader
        title="Recover Password"
        subtitle="A link will be shared to your email"
      />
      <PasswordResetForm
        onSubmit={mutate}
        isSubmitting={isLoading}
        isError={isError}
        error={error}
      />
    </>
  );
}

export default PasswordReset;
