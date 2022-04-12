import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";
import ComplaintsTable from "./ComplaintTable/ComplaintTable";

const ITComplaints = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <SectionHeader title="IT Complaints" />
      <TableSearch btnLabel="Add Complaint" btnClick={onOpen} />
      <ComplaintsTable />
      <Modal isOpen={isOpen} onClose={onClose} title="New Complaint Form">
        Complaint Form
      </Modal>
    </>
  );
};

export default ITComplaints;
