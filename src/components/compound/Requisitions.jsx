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
  requisitionSchema,
} from "../../components/forms/requisition/schemas/requisitions";
import Loader from "../common/UI/Loader/Loader";

const Requisitions = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, isLoading } = useRequisitions();

  return (
    <>
      <SectionHeader title="Requisitions" />

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SubHeading title="New Requests" />
          <RequisitionTable data={data?.Requisitions} type="new"/>
          <br/>
          <SubHeading title="Approved Requisitions"  />
          <RequisitionTable data={data?.Requisitions} type="approved"/>
          <br/>
          <SubHeading title="Rejected Requisitions" />
          <RequisitionTable data={data?.Requisitions} type="rejected"/>
        </>
      )}
      <Modal isOpen={isOpen} onClose={onClose} title="Requisition">
        <RequisitionForm
          initialValues={requisitionInitialValues}
          validationSchema={requisitionSchema}
          onSuccess={onClose}
          success={`Requisition added successfully`}
          useMutate={useAddRequisition}
        />
      </Modal>
    </>
  );
};

export default Requisitions;
