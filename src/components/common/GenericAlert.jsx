import {
  Alert as ChakraAlert,
  AlertDescription,
  AlertIcon,
  CloseButton,
} from "@chakra-ui/react";

function Alert({ type, message, handleAlertClose }) {
  return (
    <ChakraAlert status={type}>
      <AlertIcon />
      <AlertDescription>{message}</AlertDescription>
      <CloseButton
        position="absolute"
        right="0.5rem"
        top="0.5rem"
        onClick={handleAlertClose}
      />
    </ChakraAlert>
  );
}

export default Alert;
