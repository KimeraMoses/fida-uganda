import { useEffect } from "react";
import { useToast, useDisclosure } from "@chakra-ui/react";
import SectionHeader from "../common/SectionHeader";
import Modal from "../common/Modal";
import RequisitionForm from "../forms/requisition/RequisitionForm";
import { toastSuccess } from "../../lib/toastDetails";
import {
  useAddRequisition,
  useRequisitions,
} from "../../hooks/useRequisitions";
import { REQUISITION_CREATED } from "../../lib/constants";
import TableSearch from "../common/table/TableSearch";
import SubHeading from "./../Tasks/SubHeading/SubHeading";
import RequisitionTable from "../dashboard/Requisitions/RequisitionsTable";

const Requisitions = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const { data } = useRequisitions();
  const {
    mutate,
    isLoading: isSubmitting,
    isError,
    error,
    isSuccess,
  } = useAddRequisition();

  useEffect(() => {
    if (isSuccess) {
      toast(toastSuccess(REQUISITION_CREATED));
      onClose();
    }
  }, [isSuccess, onClose, toast]);

  // const onRowClick = (row) => {};

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
          onSubmit={mutate}
          isSubmitting={isSubmitting}
          isError={isError}
          error={error}
        />
      </Modal>
    </>
  );
};

export default Requisitions;
