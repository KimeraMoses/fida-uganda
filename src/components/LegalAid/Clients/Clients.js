import SectionHeader from "../../common/SectionHeader";
import ClientsTable from "./ClientsTable/ClientsTable";
import { useClients } from "../../../hooks/useClients";
import { useDisclosure } from "@chakra-ui/react";
import Modal from "../../common/Modal";
import NewClientForm from "./NewClientForm/NewClientForm";
import { useDispatch } from "react-redux";
import { resetClient } from "../../../store/clientReducer";
import Loader from "./../../common/UI/Loader/Loader";

const Clients = () => {
  const { data, isLoading } = useClients();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const onOpenModal = () => {
    onOpen();
    dispatch(resetClient());
  };

  return (
    <>
      <SectionHeader title="Clients" />
      {isLoading ? (
        <Loader />
      ) : (
        data?.clients && (
          <ClientsTable
            isLoading={isLoading}
            data={data ? data.clients : null}
            btnLabel="Add Client"
            btnClick={onOpenModal}
            tableName="Clients"
          />
        )
      )}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="2xl"
        title="Client Registration Form"
      >
        <NewClientForm onClose={onClose} isNewClient={true} />
      </Modal>
    </>
  );
};

export default Clients;
