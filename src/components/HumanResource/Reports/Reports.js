import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";
import ReportsTable from "./ReportTable/ReportTable";

const Reports = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <SectionHeader title="Reports" />
      <TableSearch btnLabel="Add Report" btnClick={onOpen} />
      <ReportsTable />
      <Modal isOpen={isOpen} onClose={onClose} title="New Report">
        {/* <NewAsset /> */}
        New Report Form
      </Modal>
    </>
  );
};

export default Reports;
