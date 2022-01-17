import { Box } from "@chakra-ui/react";

function BackgroundImage({ children }) {
  return (
    <Box
      bgColor="gray.100"
      width="100%"
      minH="100vh"
      height="100%"
      position="relative"
    >
      {children}
    </Box>
  );
}

export default BackgroundImage;
