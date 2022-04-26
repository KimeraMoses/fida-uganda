import React from "react";
import TableSearch from "../../common/table/TableSearch";
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
      <TableSearch btnLabel="Add Employee" btnClick={onOpen} />
      {data?.employees && <EmployeeContractTable data={data?.employees} />}
      <Modal isOpen={isOpen} onClose={onClose}>
        <NewContract />
      </Modal>
    </>
  );
};

export default Employees;
