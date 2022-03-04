import React from "react";
import { Button } from "@chakra-ui/react";

function SubmitButton({ isLoading, label, width = "100%" }) {
  return (
    <Button
      isLoading={isLoading}
      type="submit"
      borderRadius="full"
      bgGradient="linear(to-r, purple.400, purple.700)"
      _hover={{ bgGradient: "linear(to-r, purple.600, purple.900)" }}
      size="lg"
      w={width}
      color="white"
    >
      {label}
    </Button>
  );
}

export default SubmitButton;
