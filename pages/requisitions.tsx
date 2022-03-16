import { SimpleGrid, Heading, Button, useDisclosure } from "@chakra-ui/react";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Modal from "../components/Modal";
import RequisitionForm from "../components/forms/RequisitionForm";

const Requisitions = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Layout title="Requisitions">
      <Button onClick={onOpen}>Open Modal</Button>
      <SimpleGrid gap={5}>
        <Heading mt={5} fontSize="xl" color="purple.500">
          New Requests
        </Heading>
        <Table />
        <Heading mt={5} fontSize="xl" color="purple.500">
          Replied Requisitions
        </Heading>
        <Table />
      </SimpleGrid>
      <Modal isOpen={isOpen} onClose={onClose} title="Requisition Form">
        <RequisitionForm />
      </Modal>
    </Layout>
  );
};

export default Requisitions;
