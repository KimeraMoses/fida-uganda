import React from "react";
import SectionHeader from "../../common/SectionHeader";
import { useDisclosure } from "@chakra-ui/react";
import CaseFilesTable from "./CaseFilesTable/CaseFilesTable";
import Modal from "../../common/Modal";
import NewCaseFile from "../CaseFIles/NewCaseFile/NewCaseFile";
import { useClvCases } from "../../../hooks/useCaseFiles";
import { resetCaseFile } from "../../../store/caseFileReducer";
import { useDispatch } from "react-redux";
import Loader from "./../../common/UI/Loader/Loader";

const ClvCaseFiles = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, isLoading } = useClvCases();
  const dispatch = useDispatch();

  const onOpenModal = () => {
    onOpen();
    dispatch(resetCaseFile());
  };

  return (
    <>
      <SectionHeader title="CLVs Case Files" />

      {isLoading ? (
        <Loader />
      ) : (
        data && (
          <CaseFilesTable
            data={data ? data.clv_cases : null}
            btnLabel="CLV Case File"
            btnClick={onOpenModal}
            tableName="CLV Case File"
          />
        )
      )}
      <Modal
        size="4xl"
        isOpen={isOpen}
        onClose={onClose}
        title="CLV Case File Registration Form"
      >
        <NewCaseFile
          isClvCaseFile={true}
          onClose={onClose}
          isNewCaseFile={true}
        />
      </Modal>
    </>
  );
};

export default ClvCaseFiles;
