import FormHeader from "../../forms/auth/FormHeader";
import PasswordResetForm from "../../forms/auth/PasswordResetForm";

function PasswordReset() {
  return (
    <>
      <FormHeader
        title="Recover Password"
        subtitle="A link will be shared to your email"
      />
      <PasswordResetForm />
    </>
  );
}

export default PasswordReset;
