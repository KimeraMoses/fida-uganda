import LoginForm from "../components/forms/LoginForm";
import AuthLayout from "../components/AuthLayout";

const Login = () => {
  return (
    <AuthLayout title="Sign In">
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
