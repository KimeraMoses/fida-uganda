import type { NextPage } from "next";
import AuthLayout from "../components/AuthLayout";
import SignUpForm from "../components/forms/SignUpForm";

const Login: NextPage = () => {
  return (
    <AuthLayout>
      <SignUpForm />
    </AuthLayout>
  );
};

export default Login;
