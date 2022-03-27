import React from "react";
import { Box, SimpleGrid, Heading } from "@chakra-ui/react";
import { advanceTrackerHeaders } from "../../lib/styles";
import { monthsShort } from "../../assets/text";

const AdvanceTracker = () => {
  return (
    <>
      <SimpleGrid mb={10} bgColor="white" p={5} gap={5}>
        <SimpleGrid columns={13}>
          <Box bgColor="purple.400">
            <Heading sx={advanceTrackerHeaders}>Month</Heading>
          </Box>
          {monthsShort.map((month) => (
            <Heading key={month} sx={advanceTrackerHeaders}>
              {month}
            </Heading>
          ))}
        </SimpleGrid>
        <SimpleGrid columns={13}>
          <Box bgColor="orange.400">
            <Heading sx={advanceTrackerHeaders}>Gross Salary</Heading>
          </Box>
          {monthsShort.map((month) => (
            <Heading key={month} sx={advanceTrackerHeaders}>
              {month}
            </Heading>
          ))}
        </SimpleGrid>
        <SimpleGrid columns={13}>
          <Box bgColor="lime">
            <Heading sx={advanceTrackerHeaders}>Net Salary</Heading>
          </Box>
          {monthsShort.map((month) => (
            <Heading key={month} sx={advanceTrackerHeaders}>
              {month}
            </Heading>
          ))}
        </SimpleGrid>
        <SimpleGrid columns={13}>
          <Box bgColor="blue.400">
            <Heading sx={advanceTrackerHeaders}>Advance</Heading>
          </Box>
          {monthsShort.map((month) => (
            <Heading key={month} sx={advanceTrackerHeaders}>
              {month}
            </Heading>
          ))}
        </SimpleGrid>
        <SimpleGrid columns={13}>
          <Box bgColor="green.400">
            <Heading sx={advanceTrackerHeaders}>Balance</Heading>
          </Box>
          {monthsShort.map((month) => (
            <Heading key={month} sx={advanceTrackerHeaders}>
              {month}
            </Heading>
          ))}
        </SimpleGrid>
      </SimpleGrid>
    </>
  );
};

export default AdvanceTracker;
