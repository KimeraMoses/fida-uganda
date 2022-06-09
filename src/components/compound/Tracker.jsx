import React from "react";
import SectionHeader from "../common/SectionHeader";
import { Box, useDisclosure } from "@chakra-ui/react";
// import {addAdvance} from "../../apis/advances";
import Modal from "../common/Modal";
import AdvancedRequestForm from "../dashboard/AdvanceTracker/AdvancedTrackerForm/AdvancedRequestForm";
import { initialValues } from "../dashboard/AdvanceTracker/AdvancedTrackerForm/schema";
import { useNavigate } from "react-router-dom";
import { useAddAdvance, useAdvances } from "../../hooks/useAdvances";
import TrackerTable from "./../dashboard/TrackerTable/TrackerTable";
import LeaveTrackerTable from "../dashboard/LeaveTracker/LeaveTrackerTable";
import { advanceRequestFormSchema } from "../dashboard/AdvanceTracker/AdvancedTrackerForm/schema";
import FormButton from "./../common/UI/FormButton/FormButton";
import Loader from "../common/UI/Loader/Loader";

const Tracker = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const handleLeaveClick = (item, type, id) => {
    // console.log(item);
    navigate(
      `/application-summary?application-type=${
        type === "leave" ? `leave&id=${id}` : `advance&id=${id}`
      }`
    );
  };

  const { data, isLoading } = useAdvances();

  return (
    <>
      <SectionHeader title="Leave Tracker" />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <LeaveTrackerTable handleLeaveClick={handleLeaveClick} />
          <SectionHeader title="Advance Tracker" />
          <Box bgColor="white" borderRadius={10}>
            <TrackerTable
              type="advance"
              action={handleLeaveClick}
              data={data?.advances}
              isLoading={isLoading}
            />

            <div style={{ padding: 10 }}>
              <FormButton variant="filled" onClick={onOpen}>
                New Advance Request
              </FormButton>
            </div>
          </Box>
        </>
      )}
      <Modal isOpen={isOpen} onClose={onClose} title="Advance Request Form">
        <AdvancedRequestForm
          onClose={onClose}
          initialValues={initialValues}
          validationSchema={advanceRequestFormSchema}
          onSuccess={onClose}
          success={`Advance request added successfully`}
          useMutate={useAddAdvance}
        />
      </Modal>
    </>
  );
};

export default Tracker;
