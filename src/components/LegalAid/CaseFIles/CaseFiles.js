import React from "react";
import SectionHeader from "../../common/SectionHeader";
import { useDisclosure } from "@chakra-ui/react";
import CaseFilesTable from "./CaseFilesTable/CaseFilesTable";
import Modal from "../../common/Modal";
import NewCaseFile from "./NewCaseFile/NewCaseFile";
import { useCaseFiles } from "../../../hooks/useCaseFiles";
import { useDispatch } from "react-redux";
import { resetCaseFile } from "../../../store/caseFileReducer";

const CaseFiles = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data } = useCaseFiles();
  const dispatch = useDispatch();

  const onOpenModal = () => {
    onOpen();
    dispatch(resetCaseFile());
  };

  return (
    <>
      <SectionHeader title="Case Files" />
      {data?.cases && (
        <CaseFilesTable
          data={data ? data.cases : null}
          btnLabel="New Case File"
          btnClick={onOpenModal}
          tableName="Case Files"
        />
      )}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Case Registration Form"
        size="4xl"
      >
        <NewCaseFile
          isClvCaseFile={false}
          onClose={onClose}
          isNewCaseFile={true}
        />
      </Modal>
    </>
  );
};

export default CaseFiles;
