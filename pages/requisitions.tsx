import { SimpleGrid, Heading } from "@chakra-ui/react";
import Layout from "../components/Layout";
import Table from "../components/Table";

const Requisitions = () => {
  return (
    <Layout title="Requisitions">
      <SimpleGrid gap={5}>
        <Heading mt={5} fontSize="xl" color="purple.500">New Requests</Heading>
        <Table />
        <Heading mt={5} fontSize="xl" color="purple.500">Replied Requisitions</Heading>
        <Table />
      </SimpleGrid>
    </Layout>
  );
};

export default Requisitions;
