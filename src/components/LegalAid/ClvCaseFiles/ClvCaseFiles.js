import React from "react";
import TableSearch from "../../common/table/TableSearch";
import SectionHeader from "../../common/SectionHeader";
import { useDisclosure } from "@chakra-ui/react";
import CaseFilesTable from "./CaseFilesTable/CaseFilesTable";
import Modal from "../../common/Modal";
import NewCaseFile from "../CaseFIles/NewCaseFile/NewCaseFile";
import { useClvCases } from "../../../hooks/useCaseFiles";
import { resetCaseFile } from "../../../store/caseFileReducer";
import { useDispatch } from "react-redux";

const ClvCaseFiles = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data } = useClvCases();
  const dispatch = useDispatch();

  const onOpenModal = () => {
    onOpen();
    dispatch(resetCaseFile());
  };

  return (
    <>
      <SectionHeader title="CLVs Case Files" />
      <TableSearch btnLabel="CLV Case File" btnClick={onOpenModal} />

      {data && <CaseFilesTable data={data.clv_cases} />}
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
