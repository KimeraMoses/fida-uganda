import { Box, Flex, Heading, IconButton } from "@chakra-ui/react";
import { MdNotifications } from "react-icons/md";
import Logo from "../../common/Logo";
import AppHeaderMenu from "./AppHeaderMenu";
import { useSelector } from "react-redux";

const AppHeader = () => {
  const { user } = useSelector((state) => state.auth);

  const firstName = user && user.first_name[0].toUpperCase() + user && user.first_name.slice(1);
  const lastName = user && user.last_name[0].toUpperCase() + user && user.last_name.slice(1);
  const fullName = `${firstName} ${lastName}`;
  return (
    <Flex p={3} width="100%" alignItems="center" boxShadow="md">
      <Box width="25%">
        <Logo size={40} />
      </Box>
      <Flex px={5} alignItems="center" width="75%">
        <Heading fontSize="md">
          Hi,{" "}
          <Box as="span" color="blackAlpha.500">
            {fullName}
          </Box>
        </Heading>
        <Flex ml="auto" alignItems="center" gap={3}>
          <IconButton
            aria-label="notifications"
            icon={<MdNotifications size={24} />}
            color="purple.800"
            variant="ghost"
            borderRadius="full"
          />
          <AppHeaderMenu />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AppHeader;
