import { Routes, Route, Outlet } from "react-router-dom";
import AuthBgImage from "../common/AuthBgImage";
import AuthFormBg from "../common/AuthFormBg";
import PageNotFound from "../common/PageNotFound";
import PasswordReset from "./auth/PasswordReset";
import LogIn from "./auth/Login";
import SignUp from "./auth/Signup";
import CreatePassword from "./auth/CreatePassword";

function Auth() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthBgImage>
            <AuthFormBg>
              <Outlet />
            </AuthFormBg>
          </AuthBgImage>
        }
      >
        <Route index element={<LogIn />} />
        <Route path="/forgotpassword" element={<PasswordReset />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/setPassword" element={<CreatePassword />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Auth;
