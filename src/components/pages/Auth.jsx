import { Routes, Route } from "react-router-dom";
import BackgroundImage from "../common/BackgroundImage";
import FormBackground from "../common/FormBackground";
import LogIn from "./auth/LogIn";
import PasswordReset from "./auth/PasswordReset";
import SignUp from "./auth/SignUp";

function Auth() {
  return (
    <BackgroundImage>
      <FormBackground>
        <Routes>
          <Route path="/" index element={<LogIn />} />
          <Route path="forgotpassword" element={<PasswordReset />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </FormBackground>
    </BackgroundImage>
  );
}

export default Auth;
