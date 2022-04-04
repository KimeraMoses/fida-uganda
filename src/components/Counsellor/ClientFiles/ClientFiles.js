import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";
import ClientFilesTable from "./ClientFilesTable/ClientFilesTable";
import NewClientForm from "./NewClientForm/NewClientForm";

const ClientFiles = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <SectionHeader title="Client Files" />
      <TableSearch btnLabel="Add Client" btnClick={onOpen} />
      <ClientFilesTable />
      <Modal isOpen={isOpen} onClose={onClose} title="Patient Profiling Form" size="xl">
        <NewClientForm/>
      </Modal>
    </>
  );
};

export default ClientFiles;
