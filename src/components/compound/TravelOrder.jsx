
import { useDisclosure } from "@chakra-ui/react";
import {
  useAddTravelOrder,
  useTravelOrders,
} from "../../hooks/useTravelOrders";
import SectionHeader from "../common/SectionHeader";
import Modal from "../common/Modal";
import TravelOrderForm from "../forms/travelOrder/TravelOrderForm";
import TravelOrderTable from "../dashboard/TravelOrder/TravelOrderTable";
import SubHeading from "./../Tasks/SubHeading/SubHeading";
import Loader from "../common/UI/Loader/Loader";
import { travelOrderInitialValues, travelOrderSchema } from "../forms/travelOrder/schemas/travelOrder";

const TravelOrder = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, isLoading } = useTravelOrders();


  return (
    <>
      <SectionHeader title="Travel Order" />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {/*<TableSearch btnLabel="Travel Order" btnClick={onOpen} />*/}
          <SubHeading title="New Requests" />
          <TravelOrderTable data={data?.travelOrders} type="new"/>
          <br/>
          <SubHeading title="Approved Request" />
          <TravelOrderTable data={data?.travelOrders} type="approved"/>
          <br/>
          <SubHeading title="Rejected Request" />
          <TravelOrderTable data={data?.travelOrders} type="rejected"/>
        </>
      )}
      <Modal isOpen={isOpen} onClose={onClose} title="Travel Order" size="2xl">
        <TravelOrderForm
          initialValues={travelOrderInitialValues}
          validationSchema={travelOrderSchema}
          onSuccess={onClose}
          success={`Travel order added successfully`}
          useMutate={useAddTravelOrder}
        />
      </Modal>
    </>
  );
};

export default TravelOrder;
