import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import ComplaintsTable from "./ComplaintTable/ComplaintTable";
import { useAddComplaint, useComplaints } from "../../../hooks/useComplaint";
import ComplaintForm from "./ComplaintForm/ComplaintForm";
import {
  itComplaintInitialValues,
  itComplaintOrderSchema,
} from "../../forms/it/schemas/it";

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
        tableName="IT Complaints"
      />
      <Modal isOpen={isOpen} onClose={onClose} title="New Complaint Form">
        <ComplaintForm
          title="It Products"
          initialValues={itComplaintInitialValues}
          validationSchema={itComplaintOrderSchema}
          onSuccess={onClose}
          success={`IT Complaint added successfully`}
          useMutate={useAddComplaint}
        />
      </Modal>
    </>
  );
};

export default ITComplaints;
