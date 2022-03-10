import { Box, Flex, Heading, Icon, Avatar } from "@chakra-ui/react";
import { MdNotifications } from "react-icons/md";
import Logo from "./Logo";

const AppHeader = () => {
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
          <Icon as={MdNotifications} color="purple.800" w={7} h={7} />
          <Avatar size="md" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AppHeader;
