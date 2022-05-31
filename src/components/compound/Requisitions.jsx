import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import SectionHeader from "../common/SectionHeader";
import Modal from "../common/Modal";
import RequisitionForm from "../forms/requisition/RequisitionForm";
import {
  useAddRequisition,
  useRequisitions,
} from "../../hooks/useRequisitions";
import TableSearch from "../common/table/TableSearch";
import SubHeading from "./../Tasks/SubHeading/SubHeading";
import RequisitionTable from "../dashboard/Requisitions/RequisitionsTable";
import {requisitionInitialValues, requisitionSchema} from "../../components/forms/requisition/schemas/requisitions";

const Requisitions = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data } = useRequisitions();

  return (
    <>
      <SectionHeader title="Requisitions" />

      <TableSearch btnLabel="Add Requisition" btnClick={onOpen} />
      <SubHeading title="New Requests" />
      <RequisitionTable data={data?.Requisitions} />
      <SubHeading title="Replied Requisitions" />
      <RequisitionTable data={data?.Requisitions} />

      <Modal isOpen={isOpen} onClose={onClose} title="Requisition">
        <RequisitionForm
          title="Requisitions"
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
