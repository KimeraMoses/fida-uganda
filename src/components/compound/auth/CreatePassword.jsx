import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetPassword } from "../../../hooks/useUser";
import CreatePasswordForm from "../../forms/auth/CreatePasswordForm";
import FormHeader from "../../forms/auth/FormHeader";

const CreatePassword = () => {
  const navigate = useNavigate();
  const { mutate, isError, isLoading, isSuccess, error } = useSetPassword();

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess, navigate]);

  return (
    <>
      <FormHeader title="Create Password" subtitle="Setup your password to login" />
      <CreatePasswordForm
        isError={isError}
        error={error}
        isSubmitting={isLoading}
        onSubmit={mutate}
      />
    </>
  );
};

export default CreatePassword;
