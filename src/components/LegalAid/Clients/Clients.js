import React from "react";
import TableSearch from "../../common/table/TableSearch";
import SectionHeader from "../../common/SectionHeader";
import ClientsTable from "./ClientsTable/ClientsTable";
import { useClients } from "../../../hooks/useClients";
import { useDisclosure } from "@chakra-ui/react";
import Modal from "../../common/Modal";
import NewClientForm from "./NewClientForm/NewClientForm";

const Clients = () => {
  const { data } = useClients();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <SectionHeader title="Clients" />
      <TableSearch btnLabel="Add Client" btnClick={onOpen} />
      {data?.clients && <ClientsTable data={data?.clients} />}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="2xl"
        title="Client Registration Form"
      >
        <NewClientForm />
      </Modal>
    </>
  );
};

export default Clients;
