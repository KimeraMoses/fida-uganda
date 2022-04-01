import React from "react";
import TableSearch from "../../common/table/TableSearch";
import SectionHeader from "../../common/SectionHeader";
import { useDisclosure } from "@chakra-ui/react";
import CaseFilesTable from "./CaseFilesTable/CaseFilesTable";
import Modal from "../../common/Modal";
import NewCaseFile from "../CaseFIles/NewCaseFile/NewCaseFile";

const ClvCaseFiles = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <SectionHeader title="CLVs Case Files" />
      <TableSearch btnLabel="New CLV Case File" btnClick={onOpen} />
      <CaseFilesTable />
      <Modal
        size="md"
        isOpen={isOpen}
        onClose={onClose}
        title="CLV Case File Regitration Form"
      >
        <NewCaseFile />
      </Modal>
    </>
  );
};

export default ClvCaseFiles;
