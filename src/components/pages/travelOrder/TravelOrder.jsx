import React from "react";
import StatCard from "../../common/StatCard";
import GenericModal from "../../common/GenericModal";
import { useDisclosure } from "@chakra-ui/react";
import Table from "../../common/Table";
import { dummyDataTravel } from "../../../defaultData/dummyData";
import { travelOrderColumns } from "../../tables/travelOrder/travelOrder";
import TravelForm from "../../forms/travelOrder/TravelForm";

function TravelOrder() {
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
      <StatCard title="Travel Order" value={2} onClick={openTable} />
      <GenericModal isOpen={isOpen} onClose={onClose}>
        <Table
          data={dummyDataTravel}
          columns={travelOrderColumns}
          btnLabel={"New Travel Order"}
          btnClick={openForm}
        />
      </GenericModal>
      <GenericModal isOpen={isOpenModal} onClose={onCloseModal}>
        <TravelForm />
      </GenericModal>
    </>
  );
}

export default TravelOrder;
