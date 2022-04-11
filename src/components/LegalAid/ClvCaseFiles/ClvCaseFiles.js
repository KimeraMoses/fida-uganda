import React from "react";
import TableSearch from "../../common/table/TableSearch";
import SectionHeader from "../../common/SectionHeader";
import { useDisclosure } from "@chakra-ui/react";
import CaseFilesTable from "./CaseFilesTable/CaseFilesTable";
import Modal from "../../common/Modal";
import NewCaseFile from "../CaseFIles/NewCaseFile/NewCaseFile";
import { useClvCases } from "../../../hooks/useCaseFiles";

const ClvCaseFiles = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data } = useClvCases();

  return (
    <>
      <SectionHeader title="CLVs Case Files" />
      <TableSearch btnLabel="CLV Case File" btnClick={onOpen} />
      {data && <CaseFilesTable data={data.clv_cases} />}
      <Modal
        size="4xl"
        isOpen={isOpen}
        onClose={onClose}
        title="CLV Case File Registration Form"
      >
        <NewCaseFile isClvCaseFile={true} isNew={true} onClose={onClose} />
      </Modal>
    </>
  );
};

export default ClvCaseFiles;
