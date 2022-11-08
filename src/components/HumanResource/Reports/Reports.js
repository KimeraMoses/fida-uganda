import { useDisclosure } from "@chakra-ui/react";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
// import ReportsTable from "./ReportTable/ReportTable";
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
import {reportFolderTableColumns} from "../../../lib/tableColumns";
import Table from "../../common/TableComponent/Table";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

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

  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    setReportData([]);
    if (data?.ReportFolders?.length) {
      const dataToSet = data?.ReportFolders?.map((b) => {
        return {
          ...b,
        };
      });
      setReportData(dataToSet);
    }
  }, [data]);

  const navigate = useNavigate();
  const handleOpenFolder = (id) => {
    navigate(`/reports/${id.id}`);
  };

  return (
    <>
      <SectionHeader report_title="Reports" />
      {isLoading ? (
        <Loader />
      ) : (
        data?.ReportFolders && (
            <Table
                data={reportData}
                columns={reportFolderTableColumns}
                loading={isLoading}
                btnLabel="New Folder"
                btnClick={onOpen}
                showActions={true}
                onViewHandler={handleOpenFolder}
                tableName="Report Folders"
            />
          // <ReportsTable
          //   data={data?.ReportFolders}
          //   btnLabel="New Folder"
          //   btnClick={onOpen}
          //   tableName="Reports"
          // />
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
