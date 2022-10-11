import React, { useState } from "react";
import SectionHeader from "../../common/SectionHeader";
import { useDisclosure } from "@chakra-ui/react";
import Modal from "../../common/Modal";
import NewCaseFile from "./NewCaseFile/NewCaseFile";
import { useCaseFiles } from "../../../hooks/useCaseFiles";
import { useDispatch } from "react-redux";
import { resetCaseFile, selectCaseFile } from "../../../store/caseFileReducer";
import Loader from "./../../common/UI/Loader/Loader";
import Table from "../../common/TableComponent/Table";
import { caseColumns } from "../../../lib/tableColumns";



const CaseFiles = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, isLoading } = useCaseFiles();
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  const onCloseModal = () => {
    onClose();
    dispatch(resetCaseFile());
  };

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

  console.log("case file", data);
  return (
    <>
      <SectionHeader title="Case Files" />
      {isLoading ? (
        <Loader />
      ) : (
        data?.cases && (
          <Table
            data={data.cases}
            columns={caseColumns}
            btnClick={onOpenModal}
            btnLabel="New Case File"
            tableName="Case Files"
            loading={isLoading}
            onEditHandler={onHandleClick}
          />
        )
      )}
      <Modal
        isOpen={isOpen}
        onClose={onCloseModal}
        title="Case Registration Form"
        size="4xl"
      >
        <NewCaseFile
          isClvCaseFile={false}
          onClose={onCloseModal}
          isNewCaseFile={isEdit ? false : true}
        />
      </Modal>
    </>
  );
};

export default CaseFiles;
