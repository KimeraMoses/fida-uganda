import BackgroundTemplate from "../common/BackgroundTemplate";
import LogInForm from "../forms/LogInForm";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function LogIn() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  });

  return (
    <BackgroundTemplate>
      <LogInForm />
    </BackgroundTemplate>
  );
}

export default LogIn;
