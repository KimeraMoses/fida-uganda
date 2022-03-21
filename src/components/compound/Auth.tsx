import { Routes, Route, Outlet } from "react-router-dom";
import AuthBgImage from "../common/AuthBgImage";
import AuthFormBg from "../common/AuthFormBg";
import PageNotFound from "../common/PageNotFound";
// import PasswordReset from "./auth/PasswordReset";
// import SignUp from "./auth/SignUp";
import LogIn from "./auth/Login";

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
        {/* <Route path="/forgotpassword" element={<PasswordReset />} /> */}
        {/* <Route path="/signup" element={<SignUp />} /> */}
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Auth;
