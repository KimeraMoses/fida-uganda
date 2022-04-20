import React, { useEffect } from "react";
import TableSearch from "../../common/table/TableSearch";
import SectionHeader from "../../common/SectionHeader";
import ClientsTable from "./ClientsTable/ClientsTable";
import { useAddClient, useClients } from "../../../hooks/useClients";
import { useDisclosure, useToast } from "@chakra-ui/react";
import Modal from "../../common/Modal";
import NewClientForm from "./NewClientForm/NewClientForm";
import { toastError, toastSuccess } from "../../../lib/toastDetails";

const Clients = () => {
  const { data } = useClients();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { mutate, isLoading, isSuccess, isError, error } = useAddClient();
  const toast = useToast();

  useEffect(() => {
    if (isError) {
      toast(toastError(error));
    }
    if (isSuccess) {
      toast(toastSuccess("Client added successfully"));
      onClose();
    }
  }, [isSuccess, onClose, toast, isError, error]);

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
        <NewClientForm onSubmit={mutate} isSubmitting={isLoading} />
      </Modal>
    </>
  );
};

export default Clients;
