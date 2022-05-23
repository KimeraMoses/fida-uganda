import { useDisclosure } from "@chakra-ui/react";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import ReportsTable from "./ReportTable/ReportTable";
import { useReports } from "../../../hooks/useReports";
import AddNewFolder from "./AddNewFolder/AddNewFolder";

const Reports = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data } = useReports();

  return (
    <>
      <SectionHeader title="Reports" />
      {data?.reports && (
        <ReportsTable
          data={data?.reports}
          btnLabel="Add Report"
          btnClick={onOpen}
        />
      )}
      <Modal isOpen={isOpen} onClose={onClose} size="xs">
        <AddNewFolder />
      </Modal>
    </>
  );
};

export default Reports;
