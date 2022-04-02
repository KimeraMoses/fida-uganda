import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";
import FidaProjectTable from "./FidaProjectTable/FidaProjectTable";
import NewFidaProjectForm from "./NewFidaProject/NewFidaProjectForm";

const FidaProjects = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <SectionHeader title="Fida Projects" />
      <TableSearch btnLabel="Add Project" btnClick={onOpen} />
      <FidaProjectTable/>
      <Modal isOpen={isOpen} onClose={onClose} title="Project Profiling Form">
        <NewFidaProjectForm />
      </Modal>
    </>
  );
};

export default FidaProjects;
