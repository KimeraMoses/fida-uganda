import React from "react";
import SectionHeader from "../common/SectionHeader";
import { Box, useDisclosure } from "@chakra-ui/react";
// import {addAdvance} from "../../apis/advances";
import Modal from "../common/Modal";
import AdvancedRequestForm from "../dashboard/AdvanceTracker/AdvancedTrackerForm/AdvancedRequestForm";
import { initialValues } from "../dashboard/AdvanceTracker/AdvancedTrackerForm/schema";
import { useNavigate } from "react-router-dom";
import { useAddAdvance } from "../../hooks/useAdvances";
import TrackerTable from "./../dashboard/TrackerTable/TrackerTable";
import LeaveTrackerTable, {
  Data,
} from "../dashboard/LeaveTracker/LeaveTrackerTable";
import FormButton from "./../common/UI/FormButton/FormButton";

const Tracker = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const handleLeaveClick = (item, type) => {
    // console.log(item);
    navigate(
      `/application-summary?application-type=${
        type === "leave" ? "leave" : "advance"
      }`
    );
  };

  return (
    <>
      <SectionHeader title="Leave Tracker" />
      <LeaveTrackerTable handleLeaveClick={handleLeaveClick} />
      <SectionHeader title="Advance Tracker" />
      <Box bgColor="white" borderRadius={10}>
        <TrackerTable type="advance" action={handleLeaveClick} data={Data} />

        <div style={{ padding: 10 }}>
          <FormButton variant="filled" onClick={onOpen}>
            New Advance Request
          </FormButton>
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
