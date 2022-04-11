import React from "react";
import TableSearch from "../../common/table/TableSearch";
import SectionHeader from "../../common/SectionHeader";
import { useDisclosure } from "@chakra-ui/react";
import CaseFilesTable from "./CaseFilesTable/CaseFilesTable";
import Modal from "../../common/Modal";
import NewCaseFile from "./NewCaseFile/NewCaseFile";
import { useCaseFiles } from "../../../hooks/useCaseFiles";

const CaseFiles = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data } = useCaseFiles();

  return (
    <>
      <SectionHeader title="Case Files" />
      <TableSearch btnLabel="New Case File" btnClick={onOpen} />
      {data?.cases && <CaseFilesTable data={data?.cases} />}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Case Registration Form"
        size="4xl"
      >
        <NewCaseFile isNew={true} onClose={onClose} />
      </Modal>
    </>
  );
};

export default CaseFiles;
