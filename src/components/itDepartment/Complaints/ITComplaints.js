import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import ComplaintsTable from "./ComplaintTable/ComplaintTable";
import { useAddComplaint, useComplaints } from "../../../hooks/useComplaint";
import ComplaintForm from "./ComplaintForm/ComplaintForm";
import { complaintInitialValues } from "./ComplaintForm/schema";

const ITComplaints = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, isLoading } = useComplaints();
  return (
    <>
      <SectionHeader title="IT Complaints" />
      <ComplaintsTable
        data={data?.complaints}
        isLoading={isLoading}
        btnLabel="Add Complaint"
        btnClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose} title="New Complaint Form">
        <ComplaintForm
          title="It Products"
          initialValues={complaintInitialValues}
          onSuccess={onClose}
          success={`IT Product added successfully`}
          useMutate={useAddComplaint}
        />
      </Modal>
    </>
  );
};

export default ITComplaints;
