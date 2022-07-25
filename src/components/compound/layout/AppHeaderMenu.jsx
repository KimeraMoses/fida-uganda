import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { MdSettings, MdLogout } from "react-icons/md";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Avatar,
} from "@chakra-ui/react";
import { logoutUser } from "../../../store/authReducer";

const AppHeaderMenu = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        variant="ghost"
        borderRadius="full"
      >
        <Avatar size="sm" src={user?.image} name={user?.full_name} />
      </MenuButton>
      <MenuList>
        <Link to="/account-settings">
          <MenuItem icon={<MdSettings size={20} />}>Account Settings</MenuItem>
        </Link>
        <MenuItem icon={<MdLogout size={20} />} onClick={logout}>
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default AppHeaderMenu;
