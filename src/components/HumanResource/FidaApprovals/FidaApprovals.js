import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import { useDeactivatedUsers } from "../../../hooks/useUser";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import FidaApprovedTable from "./FidaApprovalTable/FidaApprovedTable";
import NewEmployeeForm from "./NewEmployeeForm/NewEmployeeForm";
import SubHeading from "./../../Tasks/SubHeading/SubHeading";

const FidaApprovals = () => {
  const { data } = useDeactivatedUsers();
  const { isOpen,  onClose } = useDisclosure();



  return (
    <>
      <SectionHeader title="FIDA IIMS approvals" />
      <SubHeading title="Approved Users" />
      {data?.users ? (
        <FidaApprovedTable
       
          tableName="Approved users"
        />
      ) : null}

      <SubHeading title="Pending Approval" />
      {data?.users ? (
        <FidaApprovedTable
          tableName="Users pending approval"
        />
      ) : null}
      <Modal isOpen={isOpen} onClose={onClose}>
        <NewEmployeeForm onClose={onClose} />
      </Modal>
    </>
  );
};

export default FidaApprovals;
