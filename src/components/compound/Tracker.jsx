import React from "react";
import SectionHeader from "../common/SectionHeader";
import LeaveTracker from "./LeaveTracker";
import AdvanceTracker from "./AdvanceTracker";
import { Button, useDisclosure } from "@chakra-ui/react";
import Modal from "../common/Modal";
import LeaveTrackerForm from "../forms/tracker/LeaveTrackerForm";

const Tracker = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <SectionHeader title="Leave Tracker" />
      <LeaveTracker />
      <SectionHeader title="Advance Tracker" />
      <AdvanceTracker />
      <Button variant="outline" colorScheme="purple" onClick={onOpen}>
        Advance Request
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <LeaveTrackerForm />
      </Modal>
    </>
  );
};

export default Tracker;
