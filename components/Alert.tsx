import {
  Alert as ChakraAlert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  VStack,
} from "@chakra-ui/react";

type Props = {
  title: string;
  description: string | null;
  status: "success" | "warning" | "error" | "info";
  onClose: () => void;
};

const Alert = ({ status, title, description, onClose }: Props) => {
  return (
    <ChakraAlert status={status}>
      <AlertIcon />
      <VStack alignItems="start" spacing={0} ml={2}>
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
      </VStack>
      <CloseButton
        position="absolute"
        right="8px"
        top="20px"
        onClick={onClose}
      />
    </ChakraAlert>
  );
};

export default Alert;
