import React, { useEffect, useState } from "react";
import SectionHeader from "../../common/SectionHeader";
import PayrollTable from "./PayRollTables/PayrollTable";
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
import { TEN_MBS_IN_BYTES } from "../../../lib/constants";

import { payrollNotesInitialValues, payrollNotesSchema } from "./PayrollSchema";
import { payrollNotesTableColumns } from "../../../lib/tableColumns";
import Table from "../../common/TableComponent/Table";

const PayRoll = () => {
  const { isOpen, onClose } = useDisclosure();
  const { data } = usePayrollNotes();
  const { data: payroll, isLoading } = usePayrolls();
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
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

          {data?.PayrollNotes && (
            <Table
              data={data ? data?.PayrollNotes : null}
              columns={payrollNotesTableColumns}
              showBtn={false}
              loading={isLoading}
              hideActions
            />
            // <PayrollNotesTable
            //   data={payrollNotes?.PayrollNotes}
            //   btnLabel="Add Notes"
            //   btnClick={onOpen}
            //   tableName="Payroll Notes"
            // />
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
          validationSchema={payrollNotesSchema}
          useMutate={useAddPayrollNote}
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
