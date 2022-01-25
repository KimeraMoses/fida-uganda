import { AddIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import React from "react";

function SubmitButton({ isDisabled, loading }) {
  return (
    <Button
      leftIcon={<AddIcon />}
      isDisabled={isDisabled}
      isLoading={loading}
      type="submit"
      color="white"
      bgColor="purple.500"
      borderRadius="full"
      mt="1.5rem"
      _hover={{ bgColor: "purple.800" }}
    >
      Add Complaint
    </Button>
  );
}

export default SubmitButton;
