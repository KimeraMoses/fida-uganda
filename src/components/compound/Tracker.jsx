import React from "react";
import SectionHeader from "../common/SectionHeader";
import LeaveTracker from "./LeaveTracker";
import { Box, Button, useDisclosure } from "@chakra-ui/react";
import {addAdvance} from "../../apis/advances";
import Modal from "../common/Modal";
import AdvanceTrackerTable from "../dashboard/AdvanceTracker/AdvanceTrackerTable";
import AdvancedRequestForm from "../dashboard/AdvanceTracker/AdvancedTrackerForm/AdvancedRequestForm";
import {initialValues, advanceRequestFormSchema} from "../dashboard/AdvanceTracker/AdvancedTrackerForm/schema";
import { useNavigate } from "react-router-dom";
import { useAddAdvance } from "../../hooks/useAdvances";

const Tracker = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  return (
    <>
      <SectionHeader title="Leave Tracker" />
      <LeaveTracker />
      <SectionHeader title="Advance Tracker" />
      <Box bgColor="white" p={5} borderRadius={10}>
        <AdvanceTrackerTable />
        <div style={{ display: "flex" }}>
          <Button variant="outline" colorScheme="purple" onClick={onOpen}>
            Advance Request
          </Button>
          <Button
            variant="outline"
            colorScheme="purple"
            ml={5}
            onClick={() => navigate("/application-summary")}
          >
            Request Summary
          </Button>
        </div>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} title="Advance Request Form">
        <AdvancedRequestForm
          onClose={onClose}
          initialValues={initialValues}
          // validationSchema={advanceRequestFormSchema}
          onSuccess={onClose}
          success={`Advance request added successfully`}
          useMutate={useAddAdvance}
        />
      </Modal>
    </>
  );
};

export default Tracker;
