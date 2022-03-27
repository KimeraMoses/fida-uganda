import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";
import Form from "../Allocations/AllocationForm/Form";
import AllocationsTable from "./AllocationsTable/AllocationsTable";

const Allocations = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <SectionHeader title="Allocations" />
      <TableSearch btnLabel="Send Allocation" btnClick={onOpen} />
      <AllocationsTable />
      {isOpen && <Form onClose={onClose} title="Allocations"/>}
    </div>
  );
};

export default Allocations;
