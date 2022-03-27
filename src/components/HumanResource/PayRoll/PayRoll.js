import React from "react";
import TableSearch from "../../common/table/TableSearch";
import SectionHeader from "../../common/SectionHeader";
import PayrollTable from "./PayRollTables/PayrollTable";
import PayrollNotesTable from "./PayRollTables/PayrollNotes";
import Modal from "../../common/Modal";
import { useDisclosure } from "@chakra-ui/react";
import NewNotes from "./NewNotes/NewNotes";

const PayRoll = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <SectionHeader title="Payroll" />
      <TableSearch btnLabel="Add Notes" btnClick={onOpen} />
      <PayrollNotesTable />
      <PayrollTable />
      <Modal isOpen={isOpen} onClose={onClose}>
        <NewNotes />
      </Modal>
    </>
  );
};

export default PayRoll;
