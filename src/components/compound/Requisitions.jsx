import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import SectionHeader from "../common/SectionHeader";
import Modal from "../common/Modal";
import RequisitionForm from "../forms/requisition/RequisitionForm";
import {
  useAddRequisition,
  useRequisitions,
} from "../../hooks/useRequisitions";

import SubHeading from "./../Tasks/SubHeading/SubHeading";
import RequisitionTable from "../dashboard/Requisitions/RequisitionsTable";
import {
  requisitionInitialValues,
  activityRequisitionSchema,
  activityRequisitionInitialValues,
  requisitionSchema,
} from "../../components/forms/requisition/schemas/requisitions";
import Loader from "../common/UI/Loader/Loader";
import { useState } from "react";

const Requisitions = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, isLoading } = useRequisitions();
  const [activityType, setActivityType] = useState("");

  const handleGetActivityType = (activity) => {
    setActivityType(activity);
  };
  return (
    <>
      <SectionHeader title="Requisitions" />

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SubHeading title="New Requests" />
          <RequisitionTable
            data={data?.Requisitions}
            type="new"
            btnLabel="Add Requisition"
            btnClick={onOpen}
          />
          <br />
          <SubHeading title="Approved Requisitions" />
          <RequisitionTable
            data={data?.Requisitions}
            type="approved"
            showBtn={false}
          />
          <br />
          <SubHeading title="Rejected Requisitions" />
          <RequisitionTable
            data={data?.Requisitions}
            type="rejected"
            showBtn={false}
          />
        </>
      )}
      <Modal isOpen={isOpen} onClose={onClose} title="Requisition" size="xl">
        <RequisitionForm
          initialValues={
            activityType === "Activity"
              ? activityRequisitionInitialValues
              : requisitionInitialValues
          }
          validationSchema={
            activityType === "Activity"
              ? activityRequisitionSchema
              : requisitionSchema
          }
          onSuccess={onClose}
          success={`Requisition added successfully`}
          useMutate={useAddRequisition}
          handleGetActivityType={handleGetActivityType}
        />
      </Modal>
    </>
  );
};

export default Requisitions;
