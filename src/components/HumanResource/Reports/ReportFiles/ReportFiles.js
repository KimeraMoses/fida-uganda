import { useDisclosure, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toastSuccess } from "../../../../lib/toastDetails";
import Modal from "../../../common/Modal";
import NewReportForm from "../NewReportForm/NewReportForm";
import FolderFilesTable from "../ReportTable/FolderFilesTable";
import { useReports, useAddReport } from "./../../../../hooks/useReports";
import ReportBreadCrumb from "./../BreadCrumb/ReportBreadCrumb";
import { FolderFileData } from "./../Reports";

const ReportFiles = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { reportFolderName } = useParams();
  const { data } = useReports();
  const { mutate, isLoading, isError, error, isSuccess } = useAddReport();
  const toast = useToast();
  useEffect(() => {
    if (isSuccess) {
      toast(toastSuccess("Report added successfully"));
      onClose();
    }
  }, [isSuccess, toast, onClose]);
  return (
    <>
      <ReportBreadCrumb
        folderName={reportFolderName.replace(/-/g, " ")}
        // folderLink="/"
        reportName="Report name"
      />

      {data?.reports && (
        <FolderFilesTable
          data={FolderFileData}
          btnLabel="Add Report"
          btnClick={onOpen}
        />
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <NewReportForm
          onClose={onClose}
          onSubmit={mutate}
          isSubmitting={isLoading}
          isError={isError}
          error={error}
        />
      </Modal>
    </>
  );
};

export default ReportFiles;
