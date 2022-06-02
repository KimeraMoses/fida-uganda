import React from "react";
import SectionHeader from "../../common/SectionHeader";
import Modal from "../../common/Modal";
import { useDisclosure } from "@chakra-ui/react";
import EmployeeContractTable from "./EmployeeContractTable/EmployeeContractTable";
import NewContract from "./NewContract/NewContract";
import { useEmployees } from "../../../hooks/useEmployee";

const Employees = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data } = useEmployees();

  return (
    <>
      <SectionHeader title="Employees" />
      {data?.employees && (
        <EmployeeContractTable
          data={data?.employees}
          btnLabel="Add Employee"
          btnClick={onOpen}
          tableName="Employees table"
        />
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <NewContract />
      </Modal>
    </>
  );
};

export default Employees;
