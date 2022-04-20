import React from "react";
import SectionHeader from "../common/SectionHeader";
import LeaveTracker from "./LeaveTracker";
import { Box, Button, useDisclosure } from "@chakra-ui/react";
import Modal from "../common/Modal";
import AdvanceTrackerTable from "../dashboard/AdvanceTracker/AdvanceTrackerTable";
import AdvancedRequestForm from "../dashboard/AdvanceTracker/AdvancedTrackerForm/AdvancedTrackerForm";

const Tracker = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <SectionHeader title="Leave Tracker" />
      <LeaveTracker />
      <SectionHeader title="Advance Tracker" />
      <Box bgColor="white" p={5} borderRadius={10}>
        <AdvanceTrackerTable />
        <Button variant="outline" colorScheme="purple" onClick={onOpen}>
          Advance Request
        </Button>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} title="Advance Request Form">
        <AdvancedRequestForm onClose={onClose} />
      </Modal>
    </>
  );
};

export default Tracker;
