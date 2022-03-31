import React from "react";
import TableSearch from "../../common/table/TableSearch";
import SectionHeader from "../../common/SectionHeader";
import { useDisclosure } from "@chakra-ui/react";
import Modal from "../../common/Modal";
import CLVTable from "./CLVTable/ClvTable";

const CLVs = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <SectionHeader title="CLVs" />
      <TableSearch btnLabel="Add CLV" btnClick={onOpen} />
      <CLVTable />
      <Modal isOpen={isOpen} onClose={onClose}>
        New CLV file
      </Modal>
    </>
  );
};

export default CLVs;
