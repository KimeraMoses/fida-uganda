import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";
import Form from "../Allocations/AllocationForm/Form";
import AllocationsTable from "./AllocationsTable/AllocationsTable";
// import { allocationFormSchema } from "./AllocationForm/schema";
import {
  useAddAllocation,
  useAllocations,
} from "../../../hooks/useAllocations";
import { useUsers } from "../../../hooks/useUser";

const Allocations = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialValues = { subject: "", message: "", allocated_to: [] };

  const users = useUsers();

  const { data: allocations, isLoading } = useAllocations();

  return (
    <>
      <SectionHeader title="Allocations" />
      <TableSearch btnLabel="Send Allocation" btnClick={onOpen} />
      <AllocationsTable allocations={allocations} isLoading={isLoading} />
      {isOpen && (
        <Form
          onClose={onClose}
          title="Allocations"
          initialValues={initialValues}
          // validationSchema={allocationFormSchema}
          onSuccess={onClose}
          success={`Allocation added successfully`}
          useMutate={useAddAllocation}
          users={users}
        />
      )}
    </>
  );
};

export default Allocations;
