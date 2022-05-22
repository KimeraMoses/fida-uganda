import { useState } from "react";
import SectionHeader from "../../common/SectionHeader";
import ClientsTable from "./ClientsTable/ClientsTable";
import { useClients } from "../../../hooks/useClients";
import { useDisclosure } from "@chakra-ui/react";
import Modal from "../../common/Modal";
import NewClientForm from "./NewClientForm/NewClientForm";

const Clients = () => {
  const { data, isLoading } = useClients();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [client, setClient] = useState(null);

  return (
    <>
      <SectionHeader title="Clients" />
      {data?.clients && (
        <ClientsTable
          isLoading={isLoading}
          data={data ? data.clients : null}
          btnLabel="Add Client"
          btnClick={onOpen}
        />
      )}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="2xl"
        title="Client Registration Form"
      >
        <NewClientForm
          onClose={onClose}
          client={client}
          setClient={setClient}
          isNewClient={true}
        />
      </Modal>
    </>
  );
};

export default Clients;
