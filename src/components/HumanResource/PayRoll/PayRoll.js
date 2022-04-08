import React from "react";
import TableSearch from "../../common/table/TableSearch";
import SectionHeader from "../../common/SectionHeader";
import PayrollTable from "./PayRollTables/PayrollTable";
import PayrollNotesTable from "./PayRollTables/PayrollNotes";
import Modal from "../../common/Modal";
import { useDisclosure } from "@chakra-ui/react";
import NewNotes from "./NewNotes/NewNotes";
import { usePayrolls } from "../../../hooks/usePayroll";

const PayRoll = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data } = usePayrolls();
  return (
    <>
      <SectionHeader title="Payroll" />
      <TableSearch btnLabel="Add Notes" btnClick={onOpen} />
      <PayrollNotesTable />
      {data?.payrolls && <PayrollTable data={data?.payrolls} />}
      <Modal isOpen={isOpen} onClose={onClose}>
        <NewNotes />
      </Modal>
    </>
  );
};

export default PayRoll;
