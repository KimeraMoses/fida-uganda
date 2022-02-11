import { useToast as chakraUseToast } from "@chakra-ui/react";

export default function useToast() {
  const toast = chakraUseToast();

  return (
    description,
    title = "Successful",
    status = "success",
    duration = 5000
  ) =>
    toast({
      title,
      description,
      status,
      duration,
      isClosable: true,
    });
}
