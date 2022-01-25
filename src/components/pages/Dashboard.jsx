import { Box, SimpleGrid } from "@chakra-ui/react";
import SectionHeader from "../common/SectionHeader";
import StatCard from "../common/StatCard";
import Requisitions from "./requisitions/Requisitions";

function Dashboard() {
  return (
    <Box>
      <SectionHeader title="Dashboard" />
      <SimpleGrid columns={3} gap="1rem" mt="2rem">
        <Requisitions />
        <StatCard />
        <StatCard />
        <StatCard />
      </SimpleGrid>
    </Box>
  );
}

export default Dashboard;
