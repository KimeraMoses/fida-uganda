import { Box, Text, Heading } from "@chakra-ui/react";
import Logo from "../../common/Logo";

function FormHeader({ title, subtitle }) {
  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems="center"
      py="1rem"
      gap="2rem"
    >
      <Logo size={70} />
      <Box>
        <Text fontSize="xl" align="center" mb="0.25rem" color="purple.900">
          Welcome to
        </Text>
        <Heading
          size="xl"
          align="center"
          color="purple.900"
          fontWeight="normal"
        >
          <strong>FIDA</strong> IIMS
        </Heading>
      </Box>
      <Box alignSelf="start">
        {title && (
          <Heading size="lg" alignSelf="start" color="purple.600" mb="0.5rem">
            {title}
          </Heading>
        )}
        {subtitle && (
          <Text fontSize="md" alignSelf="start" color="purple.900">
            {subtitle}
          </Text>
        )}
      </Box>
    </Box>
  );
}

export default FormHeader;
