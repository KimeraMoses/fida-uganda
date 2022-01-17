import { MoonIcon, StarIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      gap="2rem"
      bgColor="ghostwhite"
    >
      <Box flex="1" pos="relative">
        <StarIcon
          boxSize="2rem"
          color="yellow.500"
          pos="absolute"
          left="2rem"
        />
        <StarIcon
          boxSize="2rem"
          color="yellow.500"
          pos="absolute"
          top="50%"
          right="5rem"
        />
        <StarIcon
          boxSize="2rem"
          color="yellow.500"
          pos="absolute"
          right="20rem"
          top="5rem"
        />
        <MoonIcon boxSize="30rem" color="blue.200" />
      </Box>
      <Flex flex="1" flexDir="column" gap="2rem">
        <Heading as="h1" color="purple.500" fontSize="12rem">
          404
        </Heading>
        <Flex flexDirection="column">
          <Heading color="gray.700" mb="1" size="lg">
            LOOKS LIKE YOU'RE LOST
          </Heading>
          <Text fontSize="lg" color="gray.500">
            You just wondered into deep space
          </Text>
          <Button
            alignSelf="flex-start"
            mt="2rem"
            variant="ghost"
            bgColor="gray.200"
            onClick={() => navigate("/")}
            color="purple.600"
          >
            Go Home
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default NotFound;
