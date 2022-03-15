import PasswordResetForm from "../components/forms/PasswordResetForm";
import AuthLayout from "../components/AuthLayout";

const ResetPassword = () => {
  return (
    <AuthLayout
      title="Recover Password"
      subTitle="A link will be shared to your email"
    >
      <PasswordResetForm />
    </AuthLayout>
  );
};

export default ResetPassword;
