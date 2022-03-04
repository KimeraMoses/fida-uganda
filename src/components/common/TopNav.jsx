import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MdLogout, MdSettings, MdNotifications } from "react-icons/md";
import {
  Flex,
  Box,
  Text,
  Avatar,
  IconButton,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
} from "@chakra-ui/react";
import { logOut } from "../../store/reducers/auth";

function TopNav() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { last_name, first_name, image } = useSelector(
    (state) => state.auth.user
  );

  return (
    <Flex width="100%" align="center" px="2rem" py="4" boxShadow="base">
      <Text fontSize="xl" mr="auto">
        Hi{" "}
        <Box as="strong" color="purple.500" textTransform="capitalize">
          {last_name},
        </Box>{" "}
        Welcome back!
      </Text>
      <Flex gap="1rem" align="center">
        <IconButton
          color="purple.700"
          borderRadius="full"
          variant="ghost"
          icon={<MdNotifications size={24} />}
        />
        <Menu>
          <MenuButton
            color="purple.500"
            as={IconButton}
            aria-label="Options"
            variant="outline"
            borderRadius="full"
          >
            <Avatar src={image} alt={`${first_name} ${last_name}`} size="sm" />
          </MenuButton>
          <MenuList>
            <Link to="settings">
              <MenuItem icon={<MdSettings size={20} />}>
                Account settings
              </MenuItem>
            </Link>
            <MenuItem
              icon={<MdLogout size={20} />}
              onClick={(e) => {
                dispatch(logOut());
                navigate("/");
              }}
            >
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}

export default TopNav;
