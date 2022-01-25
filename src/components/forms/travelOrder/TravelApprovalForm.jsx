import { Box, Button, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";

function TravelApprovalForm() {
  const onRejection = (e) => {};

  const onApproval = (e) => {};

  return (
    <Box as="div" p="3rem">
      <Heading size="lg" mb="1rem">
        FIDA Travel Approval Form
      </Heading>
      <SimpleGrid columns={2} gap={4} mb="1.5rem">
        <Button variantColor="green" size="lg" mr="2rem">
          Approve
        </Button>
        <Button variantColor="red" size="lg">
          Reject
        </Button>
      </SimpleGrid>
    </Box>
  );
}

export default TravelApprovalForm;
