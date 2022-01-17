import { Box, Flex } from "@chakra-ui/react";
import SectionHeader from "../common/SectionHeader";
import StatCard from "../common/StatCard";

function Dashboard() {
  return (
    <Box>
      <SectionHeader title="Dashboard" />
      <Flex align="center" mt="1.5rem" gap="1rem">
        <StatCard />
        <StatCard />
        <StatCard />
      </Flex>
    </Box>
  );
}

export default Dashboard;
