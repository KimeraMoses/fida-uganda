import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";
import FidaApprovedTable from "./FidaApprovalTable/FidaApprovedTable";
import NewEmployeeForm from "./NewEmployeeForm/NewEmployeeForm";

const FidaApprovals = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <SectionHeader title="FIDA IIMS approvals" />
      <TableSearch btnLabel="Add employee" btnClick={onOpen} />
      <FidaApprovedTable />
      <Modal isOpen={isOpen} onClose={onClose}>
        <NewEmployeeForm onClose={onClose}/>
      </Modal>
    </>
  );
};

export default FidaApprovals;
