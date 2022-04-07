import FormHeader from "../../forms/auth/FormHeader";
import SignUpForm from "../../forms/auth/SignUpForm";
import { useSignUp } from "../../../hooks/useUser";
import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { toastSuccess } from "../../../lib/toastDetails";

function SignUp() {
  const { mutate, isLoading, isSuccess, isError, error } = useSignUp();
  const toast = useToast();

  useEffect(() => {
    if (isSuccess) {
      toast(
        toastSuccess(
          "You have successfully created an account. Contact Human Resources for activation"
        )
      );
    }
  }, [toast, isSuccess]);

  return (
    <>
      <FormHeader title="Sign Up" />
      <SignUpForm
        onSubmit={mutate}
        isSubmitting={isLoading}
        isError={isError}
        error={error}
      />
    </>
  );
}

export default SignUp;
