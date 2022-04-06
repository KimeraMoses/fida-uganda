import { useToast, useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";
import NewReportForm from "./NewReportForm/NewReportForm";
import ReportsTable from "./ReportTable/ReportTable";
import { useAddReport, useReports } from "../../../hooks/useReports";
import { toastSuccess } from "../../../lib/toastDetails";

const Reports = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const { data } = useReports();
  const { mutate, isLoading, isError, error, isSuccess } = useAddReport();

  useEffect(() => {
    if (isSuccess) {
      toast(toastSuccess("Report added successfully"));
      onClose();
    }
  }, [isSuccess, toast, onClose]);

  return (
    <>
      <SectionHeader title="Reports" />
      <TableSearch btnLabel="Add Report" btnClick={onOpen} />
      {data?.reports && <ReportsTable data={data?.reports} />}
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

export default Reports;
