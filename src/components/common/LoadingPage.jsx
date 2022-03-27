import { Box, Spinner } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";

function LoadingPage() {
  return (
    <Box height="100vh" width="100%">
      <Center height="100%">
        <Spinner size="xl" />
      </Center>
    </Box>
  );
}

export default LoadingPage;
