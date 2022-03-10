import { useRouter } from "next/router";
import {
  Box,
  Flex,
  Heading,
  Avatar,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { MdNotifications, MdSettings, MdLogout } from "react-icons/md";
import Logo from "./Logo";

const AppHeader = () => {
  const router = useRouter();

  const navigateToAccountSettings = () => {
    router.push("/account-settings");
  };

  return (
    <Flex p={5} width="100%" alignItems="center" boxShadow="md">
      <Box width="25%">
        <Logo />
      </Box>
      <Flex px={5} alignItems="center" width="75%">
        <Heading fontSize="md">
          Hi,{" "}
          <Box as="span" color="blackAlpha.500">
            Sam Smith
          </Box>
        </Heading>
        <Flex ml="auto" alignItems="center" gap={5}>
          <IconButton
            aria-label="notifications"
            icon={<MdNotifications size={26} />}
            color="purple.800"
            variant="ghost"
            borderRadius="full"
          />
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              variant="ghost"
              borderRadius="full"
            >
              <Avatar size="md" />
            </MenuButton>
            <MenuList>
              <MenuItem
                icon={<MdSettings size={20} />}
                onClick={navigateToAccountSettings}
              >
                Account Settings
              </MenuItem>
              <MenuItem icon={<MdLogout size={20} />}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AppHeader;
