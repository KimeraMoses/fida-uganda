import {useDisclosure} from "@chakra-ui/react";
import {
    useAddTravelOrder, useApprovedAccountantTravelOrders,
    useApprovedDopTravelOrders, useApprovedFleetManagerTravelOrders,
    usePendingAccountantTravelOrders,
    usePendingDopTravelOrders, usePendingFleetManagerTravelOrders, useRejectedAccountantTravelOrders,
    useRejectedDopTravelOrders, useRejectedFleetManagerTravelOrders, useTravelOrders,
} from "../../hooks/useTravelOrders";
import SectionHeader from "../common/SectionHeader";
import Modal from "../common/Modal";
import TravelOrderForm from "../forms/travelOrder/TravelOrderForm";
import TravelOrderTable from "../dashboard/TravelOrder/TravelOrderTable";
import SubHeading from "./../Tasks/SubHeading/SubHeading";
import Loader from "../common/UI/Loader/Loader";
import {travelOrderInitialValues, travelOrderSchema} from "../forms/travelOrder/schemas/travelOrder";
import {useSelector} from "react-redux";

const TravelOrder = () => {
    //get user and designation
    const {user} = useSelector((state) => state.auth);

    const {isOpen, onOpen, onClose} = useDisclosure();

    //normal user
    const { data, isLoading } = useTravelOrders();

    const {data: pendingDopTravelOrders} = usePendingDopTravelOrders();

    const {data: approvedDopTravelOrders} = useApprovedDopTravelOrders();

    const {data: rejectedDopTravelOrders} = useRejectedDopTravelOrders();

    const {data:pendingAccountantTravelOrders} = usePendingAccountantTravelOrders();

    const {data:approvedAccountantTravelOrders } = useApprovedAccountantTravelOrders();

    const {data:rejectedAccountantTravelOrders} = useRejectedAccountantTravelOrders();

    const {data:pendingFleetManagerTravelOrders} = usePendingFleetManagerTravelOrders();

    const {data:approvedFleetManagerTravelOrders } = useApprovedFleetManagerTravelOrders();

    const {data:rejectedFleetManagerTravelOrders} = useRejectedFleetManagerTravelOrders();

    return (
        <>
            <SectionHeader title="Travel Order"/>
            {isLoading ? (
                <Loader/>
            ) : (
                (user.designation === "dop" ? (
                            <>
                                <SubHeading title="New Requests"/>
                                <TravelOrderTable data={pendingDopTravelOrders?.TravelOrders} type="new"
                                                  btnLabel="Travel Order" btnClick={onOpen}/>
                                <br/>
                                <SubHeading title="Approved Requests"/>
                                <TravelOrderTable data={approvedDopTravelOrders?.TravelOrders} type="approved"/>
                                <br/>
                                <SubHeading title="Rejected Requests"/>
                                <TravelOrderTable data={rejectedDopTravelOrders?.TravelOrders} type="rejected"/>
                            </>)
                        : user.designation === "accountant"
                            ? (
                                <>
                                    <SubHeading title="New Requests"/>
                                    <TravelOrderTable data={pendingAccountantTravelOrders?.TravelOrders} type="new"
                                                      btnLabel="Travel Order" btnClick={onOpen}/>
                                    <br/>
                                    <SubHeading title="Approved Requests"/>
                                    <TravelOrderTable data={approvedAccountantTravelOrders?.TravelOrders} type="approved"/>
                                    <br/>
                                    <SubHeading title="Rejected Requests"/>
                                    <TravelOrderTable data={rejectedAccountantTravelOrders?.TravelOrders} type="rejected"/>
                                </>)
                            : user.designation === "fleetManager"
                                ? (
                                    <>
                                        <SubHeading title="New Requests"/>
                                        <TravelOrderTable data={pendingFleetManagerTravelOrders?.TravelOrders} type="new"
                                                          btnLabel="Travel Order" btnClick={onOpen}/>
                                        <br/>
                                        <SubHeading title="Approved Requests"/>
                                        <TravelOrderTable data={approvedFleetManagerTravelOrders?.TravelOrders} type="approved"/>
                                        <br/>
                                        <SubHeading title="Rejected Requests"/>
                                        <TravelOrderTable data={rejectedFleetManagerTravelOrders?.TravelOrders} type="rejected"/>
                                    </>)
                                : (
                                    <>
                                        <SubHeading title="New Requests"/>
                                        <TravelOrderTable data={data?.travelOrders} type="new"
                                                          btnLabel="Travel Order" btnClick={onOpen}/>
                                        <br/>
                                        <SubHeading title="Approved Requests"/>
                                        <TravelOrderTable data={data?.travelOrders} type="approved"/>
                                        <br/>
                                        <SubHeading title="Rejected Requests"/>
                                        <TravelOrderTable data={data?.travelOrders} type="rejected"/>
                                    </>)


                )


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
