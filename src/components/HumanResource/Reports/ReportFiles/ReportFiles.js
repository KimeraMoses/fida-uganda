import { useDisclosure, useToast } from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import { toastSuccess } from "../../../../lib/toastDetails";
import Modal from "../../../common/Modal";
import NewReportForm from "../NewReportForm/NewReportForm";
// import FolderFilesTable from "../ReportTable/FolderFilesTable";
import { useAddReport, useReports } from "../../../../hooks/useReports";
import ReportBreadCrumb from "./../BreadCrumb/ReportBreadCrumb";
import { useReportFolder } from "../../../../hooks/useReportFolder";
import Loader from "./../../../common/UI/Loader/Loader";
import {reportFilesTableColumns} from "../../../../lib/tableColumns";
import Table from "../../../common/TableComponent/Table";

const ReportFiles = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { reportFolderName } = useParams();
  const { data } = useReports(reportFolderName);
  const {
    mutate,
    isLoading: isSubmitting,
    isError,
    error,
    isSuccess,
  } = useAddReport();
  const toast = useToast();
  useEffect(() => {
    if (isSuccess) {
      toast(toastSuccess("Report added successfully"));
      onClose();
    }
  }, [isSuccess, toast, onClose]);
  const { data: dataReportFolder, isLoading } =
    useReportFolder(reportFolderName);

  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    setReportData([]);
    if (data?.reports?.length) {
      const dataToSet = data?.reports?.map((b) => {
        return {
          ...b,
        };
      });
      setReportData(dataToSet);
    }
  }, [data]);

  const navigate = useNavigate();
  const handleOpenFile = (id) => {
    navigate(`/reports/reportFolder/${id.id}`);
  };

  return (
    <>
      <ReportBreadCrumb
        root="Reports"
        rootLink="/reports"
        folderName={dataReportFolder?.reportFolder?.name.replace(/-/g, " ")}
      />

      {isLoading ? (
        <Loader />
      ) : (
        data?.reports && (
            <Table
                data={reportData}
                columns={reportFilesTableColumns}
                loading={isLoading}
                btnLabel="Add Report"
                btnClick={onOpen}
                showActions={true}
                onViewHandler={handleOpenFile}
                tableName="Reports"
            />
          // <FolderFilesTable
          //   data={data?.reports}
          //   btnLabel="Add Report"
          //   btnClick={onOpen}
          // />
        )
      )}
      <Modal isOpen={isOpen} onClose={onClose} title="New Report Form">
        <NewReportForm
          onClose={onClose}
          onSubmit={mutate}
          isSubmitting={isSubmitting}
          isError={isError}
          error={error}
          folderId={dataReportFolder?.reportFolder?.id}
        />
      </Modal>
    </>
  );
};

export default ReportFiles;
