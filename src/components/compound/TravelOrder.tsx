import { useEffect } from "react";
import { useDisclosure, useToast } from "@chakra-ui/react";
import { Row } from "react-table";
import { TRAVEL_ORDER_CREATED } from "../../lib/constants";
import { useAddTravelOrder, useTravelOrder } from "../../hooks/useTravelOrders";
import { toastSuccess } from "../../lib/toastDetails";
import SectionHeader from "../common/SectionHeader";
import Table from "../common/Table";
import Modal from "../common/Modal";
import TravelOrderForm from "../forms/travelOrder/TravelOrderForm";
import { travelOrderColumns } from "../../assets/tableColumns/travelOrder";

const TravelOrder = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const { data, isLoading } = useTravelOrder();
  const {
    mutate,
    isLoading: isSubmitting,
    isError,
    error,
    isSuccess,
  } = useAddTravelOrder();

  useEffect(() => {
    if (isSuccess) {
      toast(toastSuccess(TRAVEL_ORDER_CREATED));
      onClose();
    }
  }, [isSuccess, onClose, toast]);

  console.log(data?.travelOrders);

  const onRowClick = (row: Row) => {};

  return (
    <>
      <SectionHeader title="Travel Order" />
      <Table
        data={data?.travelOrders}
        columns={travelOrderColumns}
        onRowClick={onRowClick}
        isLoading={isLoading}
        btnLabel="Travel Order"
        btnClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose} title="Travel Order">
        <TravelOrderForm
          onSubmit={mutate}
          isSubmitting={isSubmitting}
          isError={isError}
          error={error}
        />
      </Modal>
    </>
  );
};

export default TravelOrder;
