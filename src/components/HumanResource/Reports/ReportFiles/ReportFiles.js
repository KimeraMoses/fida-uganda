import { useDisclosure, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toastSuccess } from "../../../../lib/toastDetails";
import Modal from "../../../common/Modal";
import SectionHeader from "../../../common/SectionHeader";
import TableSearch from "../../../common/table/TableSearch";
import NewReportForm from "../NewReportForm/NewReportForm";
import ReportsTable from "../ReportTable/ReportTable";
import { useReports, useAddReport } from "./../../../../hooks/useReports";

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
      <SectionHeader
        title={`Reports > ${reportFolderName.replace(/-/g, " ")}`}
      />

      <TableSearch btnLabel="Add Report" btnClick={onOpen} />
      {data?.reports && <ReportsTable data={data?.reports} isDocument={true} />}
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
