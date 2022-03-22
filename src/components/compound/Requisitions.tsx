import { useEffect } from "react";
import { Row } from "react-table";
import { useToast, useDisclosure } from "@chakra-ui/react";
import SectionHeader from "../common/SectionHeader";
import Table from "../common/Table";
import Modal from "../common/Modal";
import RequisitionForm from "../forms/requisition/RequisitionForm";
import { requisitionColumns } from "../../assets/tableColumns/requisition";
import { toastSuccess } from "../../lib/toastDetails";
import {
  useAddRequisition,
  useRequisitions,
} from "../../hooks/useRequisitions";
import { REQUISITION_CREATED } from "../../lib/constants";

const Requisitions = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const { data, isLoading } = useRequisitions();
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

  const onRowClick = (row: Row) => {};

  return (
    <>
      <SectionHeader title="Requisitions" />
      <Table
        data={data?.requisitions}
        columns={requisitionColumns}
        onRowClick={onRowClick}
        isLoading={isLoading}
        btnLabel="Add Requisition"
        btnClick={onOpen}
      />
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
