import { UseToastOptions } from "@chakra-ui/react";

export const toastError = (error: unknown): UseToastOptions => {
  const GENERIC_ERROR = "An Error Occurred";

  return {
    title: "Error",
    description: typeof error === "string" ? error : GENERIC_ERROR,
    status: "error",
    duration: 9000,
    isClosable: true,
  };
};

export const toastSuccess = (message: unknown): UseToastOptions => {
  const GENERIC_MESSAGE = "Action successful";

  return {
    title: "Success",
    description: typeof message === "string" ? message : GENERIC_MESSAGE,
    status: "success",
    duration: 4000,
    isClosable: true,
  };
};
