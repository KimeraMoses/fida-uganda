import { useDisclosure } from "@chakra-ui/react";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import ReportsTable from "./ReportTable/ReportTable";
import { useReports } from "../../../hooks/useReports";
import NewFolderForm from "./AddNewFolder/NewFolderForm";
import { onSubmitAlert } from "../../../lib/deleteInProd";
import {
  reportFolderInitialValues,
  reportFolderValidationSchema,
} from "../../../form_schemas/reportFolder";
import { useReportFolders } from "../../../hooks/useReportFolder";

export const FolderFileData = [
  {
    id: 1,
    title: "First Quater 2022 (January to March)",
    type: "Quatery Report",
    date: "Oct 14, 2021",
  },
  {
    id: 1,
    title: "First Quater 2022 (January to March)",
    type: "Quatery Report",
    date: "Oct 14, 2021",
  },
  {
    id: 1,
    title: "First Quater 2022 (January to March)",
    type: "Quatery Report",
    date: "Oct 14, 2021",
  },
];

const Reports = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data } = useReports();
  const { data: reportFolders } = useReportFolders();

  return (
    <>
      <SectionHeader title="Reports" />
      {data?.reports && (
        <ReportsTable
          data={data?.reports}
          btnLabel="New Folder"
          btnClick={onOpen}
          tableName="Reports"
        />
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <NewFolderForm
          useMutate={onSubmitAlert}
          initialValues={reportFolderInitialValues}
          validationSchema={reportFolderValidationSchema}
          onClose={onClose}
        />
      </Modal>
    </>
  );
};

export default Reports;
