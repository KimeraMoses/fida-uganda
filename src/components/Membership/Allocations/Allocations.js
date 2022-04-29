import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";
import Form from "../Allocations/AllocationForm/Form";
import AllocationsTable from "./AllocationsTable/AllocationsTable";
// import { allocationFormSchema } from "./AllocationForm/schema";
import {useAddAllocation} from "../../../hooks/useAllocations"
import {useMembers} from "../../../hooks/useMember";

const Allocations = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialValues = { subject: "", message: "", allocated_to: [] };

  const {isLoading, data} = useMembers()

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
          // validationSchema={allocationFormSchema}
          onSuccess={onClose}
          success={`Allocation added successfully`}
          useMutate={useAddAllocation}
          members={data && data.memebers}
        />
      )}
    </>
  );
};

export default Allocations;
