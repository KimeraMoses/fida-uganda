import { Row } from "react-table";
import { useDisclosure } from "@chakra-ui/react";
import SectionHeader from "../common/SectionHeader";
import Table from "../common/Table";
import { useClients } from "../../hooks/useClients";
import { clientsColumns } from "../../assets/tableColumns/clients";
import Modal from "../common/Modal";
import RequisitionForm from "../forms/requisition/RequisitionForm";

const Requisitions = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, isLoading } = useClients();

  const onRowClick = (row: Row) => {};

  return (
    <>
      <SectionHeader title="Requisitions" />
      <Table
        data={data?.clients}
        columns={clientsColumns}
        onRowClick={onRowClick}
        isLoading={isLoading}
        btnLabel="Add Requisition"
        btnClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose} title="Requisition">
        <RequisitionForm />
      </Modal>
    </>
  );
};

export default Requisitions;
