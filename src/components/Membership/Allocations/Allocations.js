import React, { useEffect, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import SectionHeader from "../../common/SectionHeader";
import Form from "../Allocations/AllocationForm/Form";
import { allocationFormSchema } from "../Allocations/AllocationForm/schema";
import {
  useAddAllocation, useAllocations,
} from "../../../hooks/useAllocations";
import { useMembers } from "../../../hooks/useMember";
import Table from "../../common/TableComponent/Table";
import { membersAllocationsColumns } from "../../../lib/tableColumns";

const Allocations = () => {
  const { isOpen,  onClose } = useDisclosure();
  const initialValues = { subject: "", message: "", allocated_to: [] };

  const { data: membersData } = useMembers();
console.log('allocations', membersData)
  const {
    //  data:allocations,
     isLoading } = useAllocations();

  const [data, setData] = useState([]);
  useEffect(() => {
    setData([]);
    if (membersData?.Members?.length) {
      const dataToSet = membersData?.Members?.map((b) => {
        return {
          ...b,
          recipient: {
            email: b?.email,
            id: b?.id,
          },
          date: {
            date: b?.createdAt,
            time: b?.createdAt,
          },
          subject: {
            subject: b?.subject,
            body: b?.message
          }
        };
      });
      console.log('it data', dataToSet)
      setData(dataToSet);
    }
  }, [membersData]);
  return (
    <>
      <SectionHeader title="Allocations" />
      <Table
        isLoading={isLoading}
        data={data ? data : null}
        btnLabel="Add Activity"
        tableName="Members Activities"
        columns={membersAllocationsColumns}
      />
      {/* <AllocationsTable
        data={data?.Allocations}
        isLoading={isLoading}
        btnLabel="Send Allocation"
        btnClick={onOpen}
        tableName="Allocations"
      /> */}
      {isOpen && (
        <Form
          onClose={onClose}
          title="Allocations"
          initialValues={initialValues}
          validationSchema={allocationFormSchema}
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
