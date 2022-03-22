import FormHeader from "../../forms/auth/FormHeader";
import LoginForm from "../../forms/auth/LoginForm";
import { useLogin } from "../../../hooks/useUser";
import { ILoginUser } from "../../../interfaces/User";

function LogIn() {
  const { mutate, isError, isLoading, error } = useLogin();

  const onSubmit = (values: ILoginUser) => {
    mutate(values);
  };

  return (
    <>
      <FormHeader title="Sign In" />
      <LoginForm
        onSubmit={onSubmit}
        isSubmitting={isLoading}
        isError={isError}
        error={error}
      />
    </>
  );
}

export default LogIn;
