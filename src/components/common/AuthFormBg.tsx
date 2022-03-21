import { Box } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

function AuthFormBg({ children }: Props) {
  return (
    <Box
      bgColor="white"
      position="absolute"
      top="2rem"
      right="2rem"
      borderRadius="xl"
      width="32rem"
      px="2rem"
    >
      {children}
    </Box>
  );
}

export default AuthFormBg;
