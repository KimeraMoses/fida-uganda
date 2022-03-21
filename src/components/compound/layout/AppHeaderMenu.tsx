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

const AppHeaderMenu = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
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
