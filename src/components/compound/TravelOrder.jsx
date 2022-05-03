import { useEffect } from "react";
import { useDisclosure, useToast } from "@chakra-ui/react";
import { TRAVEL_ORDER_CREATED } from "../../lib/constants";
import {
  useAddTravelOrder,
  useTravelOrders,
} from "../../hooks/useTravelOrders";
import { toastSuccess } from "../../lib/toastDetails";
import SectionHeader from "../common/SectionHeader";
import Modal from "../common/Modal";
import TravelOrderForm from "../forms/travelOrder/TravelOrderForm";
import TravelOrderTable from "../dashboard/TravelOrder/TravelOrderTable";
import SubHeading from "./../Tasks/SubHeading/SubHeading";
import TableSearch from "../common/table/TableSearch";

const TravelOrder = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const { data } = useTravelOrders();
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

  return (
    <>
      <SectionHeader title="Travel Order" />
      <TableSearch btnLabel="Travel Order" btnClick={onOpen} />
      <SubHeading title="New Requests" />
      <TravelOrderTable data={data?.travelOrders} />
      <SubHeading title="Replied Requisitions" />
      <TravelOrderTable data={data?.travelOrders} />
      <Modal isOpen={isOpen} onClose={onClose} title="Travel Order" size="2xl">
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
