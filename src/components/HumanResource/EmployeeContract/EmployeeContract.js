import React from "react";
import TableSearch from "../../common/table/TableSearch";
import SectionHeader from "../../common/SectionHeader";
import Modal from "../../common/Modal";
import { useDisclosure } from "@chakra-ui/react";
import EmployeeContractTable from "./EmployeeContractTable/EmployeeContractTable";
import NewContract from "./NewContract/NewContract";

const EmployeeContract = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <SectionHeader title="Employee | Contract" />
      <TableSearch btnLabel="Add Contract" btnClick={onOpen} />
      <EmployeeContractTable />
      <Modal isOpen={isOpen} onClose={onClose}>
        <NewContract/>
      </Modal>
    </>
  );
};

export default EmployeeContract;
