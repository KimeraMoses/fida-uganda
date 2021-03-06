import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import { useDeactivatedUsers } from "../../../hooks/useUser";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import FidaApprovedTable from "./FidaApprovalTable/FidaApprovedTable";
import NewEmployeeForm from "./NewEmployeeForm/NewEmployeeForm";
import SubHeading from "./../../Tasks/SubHeading/SubHeading";
import Loader from "./../../common/UI/Loader/Loader";

const FidaApprovals = () => {
  const { data, isLoading } = useDeactivatedUsers();
  const { isOpen, onClose } = useDisclosure();
  return (
    <>
      <SectionHeader title="FIDA IIMS approvals" />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SubHeading title="Approved Users" />
          {data?.users ? (
            <FidaApprovedTable tableName="Approved users" data={data?.users} />
          ) : null}

          <SubHeading title="Pending Approval" />
          {data?.users ? (
            <FidaApprovedTable
              tableName="Users pending approval"
              data={data?.users}
            />
          ) : null}
        </>
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <NewEmployeeForm onClose={onClose} />
      </Modal>
    </>
  );
};

export default FidaApprovals;
