import { Heading, Text, VStack, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <VStack height="100vh" width="100%" gap="2rem">
      <Heading fontSize="9xl" mt="10rem">
        404
      </Heading>
      <VStack>
        <Text fontSize="xl">Your find your self lost in an abyss</Text>
        <Text fontSize="xl">Let's help you get home</Text>
      </VStack>
      <Button
        onClick={() => navigate("/")}
        bgColor="purple"
        color="white"
        _hover={{ bgColor: "purple.900" }}
      >
        Go Home
      </Button>
    </VStack>
  );
}

export default NotFound;
