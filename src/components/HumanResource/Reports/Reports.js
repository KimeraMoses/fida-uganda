import { useDisclosure } from "@chakra-ui/react";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import ReportsTable from "./ReportTable/ReportTable";
import NewFolderForm from "./AddNewFolder/NewFolderForm";
import {
  reportFolderInitialValues,
  reportFolderValidationSchema,
} from "../../../form_schemas/reportFolder";
import {
  useAddReportFolder,
  useReportFolders,
} from "../../../hooks/useReportFolder";
import Loader from "./../../common/UI/Loader/Loader";

export const FolderFileData = [
  {
    id: 1,
    report_title: "First Quater 2022 (January to March)",
    type: "Quatery Report",
    date: "Oct 14, 2021",
  },
  {
    id: 1,
    report_title: "First Quater 2022 (January to March)",
    type: "Quatery Report",
    date: "Oct 14, 2021",
  },
  {
    id: 1,
    report_title: "First Quater 2022 (January to March)",
    type: "Quatery Report",
    date: "Oct 14, 2021",
  },
];

const Reports = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { data, isLoading } = useReportFolders();

  return (
    <>
      <SectionHeader report_title="Reports" />
      {isLoading ? (
        <Loader />
      ) : (
        data?.ReportFolders && (
          <ReportsTable
            data={data?.ReportFolders}
            btnLabel="New Folder"
            btnClick={onOpen}
            tableName="Reports"
          />
        )
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <NewFolderForm
          useMutate={useAddReportFolder}
          initialValues={reportFolderInitialValues}
          validationSchema={reportFolderValidationSchema}
          onClose={onClose}
          onSuccess={onClose}
          success={"Report Folder Added Successfully"}
        />
      </Modal>
    </>
  );
};

export default Reports;
