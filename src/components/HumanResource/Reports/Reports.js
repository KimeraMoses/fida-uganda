import { useDisclosure } from "@chakra-ui/react";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";
import ReportsTable from "./ReportTable/ReportTable";
import { useReports } from "../../../hooks/useReports";
import AddNewFolder from "./AddNewFolder/AddNewFolder";

const Reports = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data } = useReports();

  return (
    <>
      <SectionHeader title="Reports" />
      <TableSearch btnLabel="Add Report" btnClick={onOpen} />
      {data?.reports && <ReportsTable data={data?.reports} />}
      <Modal isOpen={isOpen} onClose={onClose} size="xs">
        <AddNewFolder />
      </Modal>
    </>
  );
};

export default Reports;
