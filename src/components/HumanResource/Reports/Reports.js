import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";
import NewReportForm from "./NewReportForm/NewReportForm";
import ReportsTable from "./ReportTable/ReportTable";
import { useAddReport, useReports } from "../../../hooks/useReports";

const Reports = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data } = useReports();
  const { mutate, isLoading, isError, error } = useAddReport();

  return (
    <>
      <SectionHeader title="Reports" />
      <TableSearch btnLabel="Add Report" btnClick={onOpen} />
      {data && <ReportsTable data={data?.reports} />}
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
