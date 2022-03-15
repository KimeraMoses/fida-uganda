import { Box } from "@chakra-ui/react";
import LoginForm from "../components/forms/LoginForm";

const Login = () => {
  return (
    <Box h="100vh" display="flex" alignItems="center" justifyContent="center">
      <LoginForm />
    </Box>
  );
};

export default Login;
