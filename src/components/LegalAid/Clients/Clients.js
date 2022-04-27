import TableSearch from "../../common/table/TableSearch";
import SectionHeader from "../../common/SectionHeader";
import ClientsTable from "./ClientsTable/ClientsTable";
import { useAddClient, useClients } from "../../../hooks/useClients";
import { useDisclosure } from "@chakra-ui/react";
import Modal from "../../common/Modal";
import NewClientForm from "./NewClientForm/NewClientForm";
import { complainantInitialValues } from "../../../form_schemas/complainant";

const Clients = () => {
  const { data, isLoading } = useClients();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <SectionHeader title="Clients" />
      <TableSearch btnLabel="Add Client" btnClick={onOpen} />
      {data?.clients && (
        <ClientsTable data={data?.clients} isLoading={isLoading} />
      )}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="2xl"
        title="Client Registration Form"
      >
        <NewClientForm
          useMutate={useAddClient}
          onSuccess={onClose}
          success={"Added Client Successfully"}
          initialValues={complainantInitialValues}
        />
      </Modal>
    </>
  );
};

export default Clients;
