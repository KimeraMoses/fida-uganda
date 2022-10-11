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
import { formatDate } from "../../../lib/data";

export const caseColumns = [
  { Header: "File No.", accessor: "case_id" },
  { Header: "Name", accessor: "complainant.name" },
  { Header: "SubCounty", accessor: "complainant.village" },
  // { Header: "District", accessor: "districtOfOrigin" },
  { Header: "Nationality", accessor: "complainant.country" },
  { Header: "NIN", accessor: "complainant.NIN" },
  // { Header: "File type", accessor: "fileType" },
  {
    Header: "Date of opening",
    accessor: "createdAt",
    Cell: ({ cell: { value } }) => formatDate(value),
  },
  // { Header: "Case Number", accessor: "caseNumber" },
  { Header: "Gender", accessor: "complainant.sex" },
  { Header: "Age", accessor: "complainant.age" },
  {
    Header: "No. of beneficiaries",
    accessor: "complainant.beneficiaries",
    Cell: ({ cell: { value } }) => value?.length,
  },
  { Header: "Occupation", accessor: "complainant.occupation" },

  { Header: "Nature of problem", accessor: "nature" },
  {
    Header: "Action taken",
    accessor: "actionsTaken",
    Cell: ({ cell: { value } }) => value?.length,
  },
  { Header: "Next visit", accessor: "next_visit" },
  { Header: "Legal Officer", accessor: "legal_officer" },
  { Header: "Referred by", accessor: "referred_to.full_name" },
  { Header: "Reason for referral", accessor: "reason_for_referral" },
  { Header: "Follow up feedback", accessor: "follow_up_feedback" },
  {
    Header: "File closing date",
    accessor: "updateAt",
    Cell: ({ cell: { value } }) => formatDate(value),
  },
  { Header: "Phone Number", accessor: "respondent_contact" },
  { Header: "Disability", accessor: "complainant.disability" },
  { Header: "Respondent Name", accessor: "respondentName" },
  { Header: "Respondent Phone Number", accessor: "respondentPhone" },
  { Header: "How did you find fida", accessor: "fida" },
  // {
  //   Header: "Date Uploaded",
  //   accessor: "dateUploaded",
  //   Cell: ({ cell: { value } }) => formatDate(value),
  // },
];

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
