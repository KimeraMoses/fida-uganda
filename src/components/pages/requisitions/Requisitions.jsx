import React from "react";
import StatCard from "../../common/StatCard";
import GenericModal from "../../common/GenericModal";
import { useDisclosure } from "@chakra-ui/react";
import Table from "../../common/Table";
import { dummyDataRequisitions } from "../../../defaultData/dummyData";
import { requisitionColumns } from "../../tables/requisitions/requisitions";
import RequisitionsForm from "../../forms/requisitions/Requisitions";

function Requisitions() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: isOpenModal,
    onClose: onCloseModal,
    onOpen: onOpenModal,
  } = useDisclosure();

  const openTable = () => {
    onOpen();
  };

  const openForm = () => {
    onOpenModal();
  };

  return (
    <>
      <StatCard title="Requisitions" value={5} onClick={openTable} />
      <GenericModal isOpen={isOpen} onClose={onClose}>
        <Table
          data={dummyDataRequisitions}
          columns={requisitionColumns}
          btnLabel={"New Requisition"}
          btnClick={openForm}
        />
      </GenericModal>
      <GenericModal isOpen={isOpenModal} onClose={onCloseModal}>
        <RequisitionsForm />
      </GenericModal>
    </>
  );
}

export default Requisitions;
