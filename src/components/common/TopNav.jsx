import { useSelector } from "react-redux";
import { SettingsIcon } from "@chakra-ui/icons";
import { Flex, Box, Text, Avatar, IconButton } from "@chakra-ui/react";

function TopNav() {
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
      <Flex gap="1.2rem" align="center">
        <IconButton
          icon={<SettingsIcon boxSize="1.4rem" color="purple.800" />}
          aria-label="Settings"
          variant="ghost"
          borderRadius="full"
        />
        <Avatar
          borderRadius="full"
          size="sm"
          src={image}
          alt={`${first_name} ${last_name}`}
        />
      </Flex>
    </Flex>
  );
}

export default TopNav;
