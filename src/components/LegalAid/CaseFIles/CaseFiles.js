import React from "react";
import TableSearch from "../../common/table/TableSearch";
import SectionHeader from "../../common/SectionHeader";
import { useDisclosure } from "@chakra-ui/react";
import CaseFilesTable from "./CaseFilesTable/CaseFilesTable";
import Modal from "../../common/Modal";
import NewCaseFile from "./NewCaseFile/NewCaseFile";

const CaseFiles = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <SectionHeader title="Case Files" />
      <TableSearch btnLabel="New Case File" btnClick={onOpen} />
      <CaseFilesTable />
      <Modal isOpen={isOpen} onClose={onClose} title="Case Registration Form">
        <NewCaseFile />
      </Modal>
    </>
  );
};

export default CaseFiles;
