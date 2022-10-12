import React, { useEffect, useState } from "react";
import SectionHeader from "../../common/SectionHeader";
import { useDisclosure } from "@chakra-ui/react";
import Modal from "../../common/Modal";
import NewCaseFile from "../CaseFIles/NewCaseFile/NewCaseFile";
import { useClvCases } from "../../../hooks/useCaseFiles";
import { resetCaseFile, selectCaseFile } from "../../../store/caseFileReducer";
import { useDispatch } from "react-redux";
import Loader from "./../../common/UI/Loader/Loader";
import Table from "../../common/TableComponent/Table";
import { caseColumns } from "../../../lib/tableColumns";

const ClvCaseFiles = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: clvCaseData, isLoading } = useClvCases();
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  const onOpenModal = () => {
    onOpen();
    dispatch(resetCaseFile());
    setIsEdit(false);
  };

  const onHandleClick = (caseFile) => {
    setIsEdit(true);
    dispatch(
      selectCaseFile(
        clvCaseData?.clv_cases?.find((el) => el?.id === caseFile?.id)
      )
    );
    onOpen();
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    setData([]);
    if (clvCaseData?.clv_cases?.length) {
      const dataToSet = clvCaseData?.clv_cases?.map((b) => {
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
  }, [clvCaseData]);

  return (
    <>
      <SectionHeader title="CLVs Case Files" />

      {isLoading ? (
        <Loader />
      ) : (
        data && (
          <Table
            data={data}
            columns={caseColumns}
            btnClick={onOpenModal}
            btnLabel="CLV Case File"
            tableName="CLV Case Files"
            loading={isLoading}
            onEditHandler={onHandleClick}
            emptyText="No clv cases"
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
