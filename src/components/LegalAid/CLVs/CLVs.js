import React from "react";
import TableSearch from "../../common/table/TableSearch";
import SectionHeader from "../../common/SectionHeader";
import { useDisclosure } from "@chakra-ui/react";
import Modal from "../../common/Modal";
import CLVTable from "./CLVTable/ClvTable";
import NewClvForm from "./CLVForms/NewClvForm";
import { useClvs } from "../../../hooks/useClv";

const CLVs = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data } = useClvs();

  return (
    <>
      <SectionHeader title="CLVs" />
      <TableSearch btnLabel="Add CLV" btnClick={onOpen} />
      {data && <CLVTable data={data.clvs} />}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
        // title="CLV Profiling Form"
      >
        <NewClvForm action="newClv" onClose={onClose} />
      </Modal>
    </>
  );
};

export default CLVs;
