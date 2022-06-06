import React from "react";
import TableSearch from "../../common/table/TableSearch";
import SectionHeader from "../../common/SectionHeader";
import PayrollTable from "./PayRollTables/PayrollTable";
import PayrollNotesTable from "./PayRollTables/PayrollNotes";
import Modal from "../../common/Modal";
import { useDisclosure, useToast } from "@chakra-ui/react";
import NewNotes from "./NewNotes/NewNotes";
import { usePayrolls } from "../../../hooks/usePayroll";
import {
  useAddPayrollNote,
  usePayrollNotes,
} from "../../../hooks/usePayrollNotes";
import { toastSuccess } from "../../../lib/toastDetails";
import Loader from "../../common/UI/Loader/Loader";

const PayRoll = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: payrollNotes } = usePayrollNotes();
  const { data: payroll, isLoading } = usePayrolls();
  const {
    mutate,
    isSuccess,
    isLoading: isSubmitting,
    isError,
    error,
  } = useAddPayrollNote();

  const toast = useToast();

  React.useEffect(() => {
    if (isSuccess) {
      toast(toastSuccess("Payroll note added successfully"));
    }
  }, [isSuccess, toast]);

  return (
    <>
      <SectionHeader title="Payroll Notes" />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <TableSearch btnLabel="Add Notes" btnClick={onOpen} />

          {payrollNotes?.PayrollNotes && (
            <PayrollNotesTable
              data={payrollNotes?.PayrollNotes}
              btnLabel="Add Notes"
              btnClick={onOpen}
              tableName="Payroll Notes"
            />
          )}
          <SectionHeader title="Payroll" />
          {payroll?.payrolls && (
            <PayrollTable data={payroll?.payrolls} tableName="Payroll" />
          )}
        </>
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <NewNotes
          onSubmit={mutate}
          isSubmitting={isSubmitting}
          isError={isError}
          error={error}
        />
      </Modal>
    </>
  );
};

export default PayRoll;
