import { useDisclosure, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toastSuccess } from "../../../../lib/toastDetails";
import Modal from "../../../common/Modal";
import NewReportForm from "../NewReportForm/NewReportForm";
import FolderFilesTable from "../ReportTable/FolderFilesTable";
import { useAddReport, useReports } from "./../../../../hooks/useReports";
import ReportBreadCrumb from "./../BreadCrumb/ReportBreadCrumb";
import { useReportFolder } from "../../../../hooks/useReportFolder";

const ReportFiles = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { reportFolderName } = useParams();
  const { data } = useReports(reportFolderName);
  const { mutate, isLoading, isError, error, isSuccess } = useAddReport();
  const toast = useToast();
  useEffect(() => {
    if (isSuccess) {
      toast(toastSuccess("Report added successfully"));
      onClose();
    }
  }, [isSuccess, toast, onClose]);
  const { data: dataReportFolder } = useReportFolder(reportFolderName);

  return (
    <>
      <ReportBreadCrumb
        root="Reports"
        rootLink="/reports"
        folderName={dataReportFolder?.reportFolder?.name.replace(/-/g, " ")}
      />

      {data?.reports && (
        <FolderFilesTable
          data={data?.reports}
          btnLabel="Add Report"
          btnClick={onOpen}
        />
      )}
      <Modal isOpen={isOpen} onClose={onClose} title="New Report Form">
        <NewReportForm
          onClose={onClose}
          onSubmit={mutate}
          isSubmitting={isLoading}
          isError={isError}
          error={error}
          folderId={dataReportFolder?.reportFolder?.id}
        />
      </Modal>
    </>
  );
};

export default ReportFiles;
