import {
  Alert,
  AlertDescription,
  AlertIcon,
  CloseButton,
} from "@chakra-ui/react";

function GenericAlert({ type, message, handleAlertClose }) {
  return (
    <Alert status={type}>
      <AlertIcon />
      <AlertDescription>{message}</AlertDescription>
      <CloseButton
        position="absolute"
        right="0.5rem"
        top="0.5rem"
        onClick={handleAlertClose}
      />
    </Alert>
  );
}

export default GenericAlert;
