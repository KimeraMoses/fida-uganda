import React from "react";
import SectionHeader from "../common/SectionHeader";
import LeaveTracker from "./LeaveTracker";
import AdvanceTracker from "./AdvanceTracker";
import { Box, Button, useDisclosure } from "@chakra-ui/react";
import Modal from "../common/Modal";
import LeaveTrackerForm from "../forms/tracker/LeaveTrackerForm";

const Tracker = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <SectionHeader title="Leave Tracker" />
      <LeaveTracker />
      <SectionHeader title="Advance Tracker" />
      <Box bgColor="white" p={5} borderRadius={10}>
        <AdvanceTracker />
        <Button variant="outline" colorScheme="purple" onClick={onOpen}>
          Advance Request
        </Button>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <LeaveTrackerForm />
      </Modal>
    </>
  );
};

export default Tracker;
