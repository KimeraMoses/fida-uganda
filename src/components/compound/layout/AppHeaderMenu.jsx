import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutUser());
  };

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        variant="ghost"
        borderRadius="full"
      >
        <Avatar size="sm" />
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
