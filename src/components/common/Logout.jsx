import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { MdLogout } from "react-icons/md";
import { logOut } from "../../store/reducers/auth";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Button
      p="2rem"
      mb="3rem"
      leftIcon={<MdLogout />}
      onClick={(e) => {
        dispatch(logOut());
        navigate("/");
      }}
    >
      Logout
    </Button>
  );
}

export default Logout;
