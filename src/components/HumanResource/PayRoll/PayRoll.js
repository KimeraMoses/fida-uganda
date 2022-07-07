import React, { useState } from "react";
import SectionHeader from "../../common/SectionHeader";
import PayrollTable from "./PayRollTables/PayrollTable";
import PayrollNotesTable from "./PayRollTables/PayrollNotes";
import Modal from "../../common/Modal";
import { toast, useDisclosure } from "@chakra-ui/react";
import NewNotes from "./NewNotes/NewNotes";
import { usePayrolls } from "../../../hooks/usePayroll";
import {
  useAddPayrollNote,
  usePayrollNotes,
} from "../../../hooks/usePayrollNotes";
import { toastError } from "../../../lib/toastDetails";
import Loader from "../../common/UI/Loader/Loader";
import { payrollNotesInitialValues, payrollNotesSchema } from "./schema";
import { TEN_MBS_IN_BYTES } from "../../../lib/constants";

const PayRoll = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: payrollNotes } = usePayrollNotes();
  const { data: payroll, isLoading } = usePayrolls();
  const [file, setFile] = useState(null);
  
  const handleFileChange = (event) => {
    console.log('event', event.target.files[0]);
    const theFile = event.target.files[0];
    if (theFile.size > TEN_MBS_IN_BYTES) {
      toast(toastError("File size should be less than 10MB"));
    } else {
      setFile(theFile);
    }
  };
  

  return (
    <>
      <SectionHeader title="Payroll Notes" />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {/* <TableSearch btnLabel="Add Notes" btnClick={onOpen} /> */}

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
      <Modal isOpen={isOpen} onClose={onClose} title="Add New Note">
        <NewNotes
          initialValues={payrollNotesInitialValues}
          validationSchema={payrollNotesSchema }
          useMutate={useAddPayrollNote}
          // useMutate={onSubmitAlert}
          onSuccess={onClose}
          success={`Note added successfully`}
          isFormData={true}
          fileName={"note"}
          handleFileChange={handleFileChange}
          file={file}
        />
      </Modal>
    </>
  );
};

export default PayRoll;
