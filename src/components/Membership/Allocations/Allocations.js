import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import SectionHeader from "../../common/SectionHeader";
import Form from "../Allocations/AllocationForm/Form";
import AllocationsTable from "./AllocationsTable/AllocationsTable";
import {
  useAddAllocation,
  useAllocations,
} from "../../../hooks/useAllocations";
import { useMembers } from "../../../hooks/useMember";

const Allocations = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialValues = { subject: "", message: "", allocated_to: [] };

  const { data: membersData } = useMembers();

  const { data, isLoading } = useAllocations();
  return (
    <>
      <SectionHeader title="Allocations" />
      <AllocationsTable
        data={data?.Allocations}
        isLoading={isLoading}
        btnLabel="Send Allocation"
        btnClick={onOpen}
        tableName="Allocations"
      />
      {isOpen && (
        <Form
          onClose={onClose}
          title="Allocations"
          initialValues={initialValues}
          // validationSchema={allocationFormSchema}
          onSuccess={onClose}
          success={`Allocation added successfully`}
          useMutate={useAddAllocation}
          membersData={membersData ? membersData.Members : null}
        />
      )}
    </>
  );
};

export default Allocations;
