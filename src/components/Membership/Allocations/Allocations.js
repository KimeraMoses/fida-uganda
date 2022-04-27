import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";
import Form from "../Allocations/AllocationForm/Form";
import AllocationsTable from "./AllocationsTable/AllocationsTable";
import { allocationFormSchema } from "./AllocationForm/schema";
import {useAddAllocation} from "../../../hooks/useAllocations"

const Allocations = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialValues = { subject: "", message: "", allocated_to: [] };
  return (
    <>
      <SectionHeader title="Allocations" />
      <TableSearch btnLabel="Send Allocation" btnClick={onOpen} />
      <AllocationsTable />
      {isOpen && (
        <Form
          onClose={onClose}
          title="Allocations"
          initialValues={initialValues}
          validationSchema={allocationFormSchema}
          onSuccess={onClose}
          success={`Allocation added successfully`}
          useMutate={useAddAllocation}
        />
      )}
    </>
  );
};

export default Allocations;
