import React from "react";
import SectionHeader from "../../common/SectionHeader";
import { useDisclosure } from "@chakra-ui/react";
import CaseFilesTable from "./CaseFilesTable/CaseFilesTable";
import Modal from "../../common/Modal";
import NewCaseFile from "./NewCaseFile/NewCaseFile";
import { useCaseFiles } from "../../../hooks/useCaseFiles";

const CaseFiles = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, isLoading } = useCaseFiles();
  const [selectedCase, setSelectedCase] = React.useState(null);

  return (
    <>
      <SectionHeader title="Case Files" />
      {data?.cases && (
        <CaseFilesTable
          data={data ? data.cases : null}
          isLoading={isLoading}
          btnLabel="New Case File"
          btnClick={onOpen}
        />
      )}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Case Registration Form"
        size="4xl"
      >
        <NewCaseFile
          isNew={true}
          onClose={onClose}
          caseFile={selectedCase}
          setCaseFile={setSelectedCase}
        />
      </Modal>
    </>
  );
};

export default CaseFiles;
