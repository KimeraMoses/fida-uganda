import React from "react";
import { Box, SimpleGrid, Heading } from "@chakra-ui/react";
import { advanceTrackerHeaders } from "../../lib/styles";

const AdvanceTracker = () => {
  return (
    <Box mb={10} bgColor="white" p={5}>
      <SimpleGrid columns={13}>
        <Box bgColor="purple.400">
          <Heading sx={advanceTrackerHeaders}>Month</Heading>
        </Box>
        <Heading sx={advanceTrackerHeaders}>Jan</Heading>
        <Heading sx={advanceTrackerHeaders}>Feb</Heading>
        <Heading sx={advanceTrackerHeaders}>Mar</Heading>
        <Heading sx={advanceTrackerHeaders}>Apr</Heading>
        <Heading sx={advanceTrackerHeaders}>May</Heading>
        <Heading sx={advanceTrackerHeaders}>Jun</Heading>
        <Heading sx={advanceTrackerHeaders}>Jul</Heading>
        <Heading sx={advanceTrackerHeaders}>Aug</Heading>
        <Heading sx={advanceTrackerHeaders}>Sep</Heading>
        <Heading sx={advanceTrackerHeaders}>Oct</Heading>
        <Heading sx={advanceTrackerHeaders}>Nov</Heading>
        <Heading sx={advanceTrackerHeaders}>Dec</Heading>
      </SimpleGrid>
    </Box>
  );
};

export default AdvanceTracker;
