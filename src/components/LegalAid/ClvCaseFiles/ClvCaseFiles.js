import React, { useState } from "react";
import SectionHeader from "../../common/SectionHeader";
import { useDisclosure } from "@chakra-ui/react";
import Modal from "../../common/Modal";
import NewCaseFile from "../CaseFIles/NewCaseFile/NewCaseFile";
import { useClvCases } from "../../../hooks/useCaseFiles";
import { resetCaseFile, selectCaseFile } from "../../../store/caseFileReducer";
import { useDispatch } from "react-redux";
import Loader from "./../../common/UI/Loader/Loader";
import { caseColumns } from "../CaseFIles/CaseFiles";
import Table from "../../common/TableComponent/Table";

const ClvCaseFiles = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, isLoading } = useClvCases();
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  const onOpenModal = () => {
    onOpen();
    dispatch(resetCaseFile());
    setIsEdit(false);
  };

  const onHandleClick = (caseFile) => {
    setIsEdit(true);
    dispatch(selectCaseFile(caseFile));
    onOpen();
  };

  return (
    <>
      <SectionHeader title="CLVs Case Files" />

      {isLoading ? (
        <Loader />
      ) : (
        data && (
          <Table
            data={data.clv_cases}
            columns={caseColumns}
            btnClick={onOpenModal}
            btnLabel="CLV Case File"
            tableName="CLV Case Files"
            loading={isLoading}
            onEditHandler={onHandleClick}
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
          isNewCaseFile={isEdit ? false : true}
        />
      </Modal>
    </>
  );
};

export default ClvCaseFiles;
