import React, { useEffect, useState } from "react";
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
  const { data: clvData, isLoading } = useCaseFiles();
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
    dispatch(
      selectCaseFile(clvData?.cases?.find((el) => el?.id === caseFile?.id))
    );
    onOpen();
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    setData([]);
    if (clvData?.cases?.length) {
      const dataToSet = clvData?.cases?.map((b) => {
        return {
          ...b,
          nature: b?.nature ? b?.nature : "N/A",
          next_visit: b?.next_visit ? b?.next_visit : "N/A",
          legal_officer: b?.legal_officer ? b?.legal_officer : "N/A",
          referred_to: b?.referred_to?.full_name
            ? b?.referred_to?.full_name
            : "N/A",
          reason_for_referral: b?.reason_for_referral
            ? b?.reason_for_referral
            : "N/A",
          follow_up_feedback: b?.follow_up_feedback
            ? b?.follow_up_feedback
            : "N/A",
          respondentPhone: b?.respondentPhone ? b?.respondentPhone : "N/A",
          complainantDisability: b?.complainant?.disability
            ? b?.complainant?.disability
            : "N/A",
          phoneNumber: b?.complainant?.phoneNumber
            ? b?.complainant?.phoneNumber
            : "N/A",
          respondentName: b?.respondentName ? b?.respondentName : "N/A",
          fida: b?.fida ? b?.fida : "N/A",
        };
      });
      setData(dataToSet);
    }
  }, [clvData]);

  return (
    <>
      <SectionHeader title="Case Files" />
      {isLoading ? (
        <Loader />
      ) : (
        clvData?.cases && (
          <Table
            data={data}
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
