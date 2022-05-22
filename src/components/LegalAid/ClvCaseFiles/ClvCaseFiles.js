import React from "react";
import SectionHeader from "../../common/SectionHeader";
import { useDisclosure } from "@chakra-ui/react";
import CaseFilesTable from "./CaseFilesTable/CaseFilesTable";
import Modal from "../../common/Modal";
import NewCaseFile from "../CaseFIles/NewCaseFile/NewCaseFile";
import { useClvCases } from "../../../hooks/useCaseFiles";

const ClvCaseFiles = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, isLoading } = useClvCases();
  const [selectedCase, setSelectedCase] = React.useState(null);

  return (
    <>
      <SectionHeader title="CLVs Case Files" />

      {data && (
        <CaseFilesTable
          data={data ? data.clv_cases : null}
          isLoading={isLoading}
          btnLabel="CLV Case File"
          btnClick={onOpen}
        />
      )}
      <Modal
        size="4xl"
        isOpen={isOpen}
        onClose={onClose}
        title="CLV Case File Registration Form"
      >
        <NewCaseFile
          isClvCaseFile={true}
          isNew={true}
          onClose={onClose}
          caseFile={selectedCase}
          setCaseFile={setSelectedCase}
        />
      </Modal>
    </>
  );
};

export default ClvCaseFiles;
