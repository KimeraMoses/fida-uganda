import { Box } from "@chakra-ui/react";

function AuthFormBg({ children }) {
  return (
    <Box
      bgColor="white"
      position="absolute"
      top="2rem"
      right="2rem"
      borderRadius="xl"
      width="32rem"
      p="2rem"
    >
      {children}
    </Box>
  );
}

export default AuthFormBg;
