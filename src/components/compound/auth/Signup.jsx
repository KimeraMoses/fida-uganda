import FormHeader from "../../forms/auth/FormHeader";
import SignUpForm from "../../forms/auth/SignUpForm";
import { useSignUp } from "../../../hooks/useUser";
import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { toastSuccess } from "../../../lib/toastDetails";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const { mutate, isLoading, isSuccess, isError, error } = useSignUp();
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      toast(
        toastSuccess(
          "You have successfully created an account. Contact Human Resources for activation"
        )
      );
      navigate("/");
    }
  }, [toast, isSuccess, navigate]);

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
