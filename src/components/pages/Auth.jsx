import { Routes, Route, Outlet } from "react-router-dom";
import BackgroundImage from "../common/BackgroundImage";
import FormBackground from "../common/FormBackground";
import PageNotFound from "../common/PageNotFound";
import LogIn from "./auth/LogIn";
import PasswordReset from "./auth/PasswordReset";
import SignUp from "./auth/SignUp";

function Auth() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <BackgroundImage>
            <FormBackground>
              <Outlet />
            </FormBackground>
          </BackgroundImage>
        }
      >
        <Route index element={<LogIn />} />
        <Route path="/forgotpassword" element={<PasswordReset />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Auth;
