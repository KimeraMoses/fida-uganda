
import { useDisclosure } from "@chakra-ui/react";
import {
    useAddTravelOrder, useApprovedAccountantTravelOrders,
    useApprovedDopTravelOrders, useApprovedFleetManagerTravelOrders,
    useMyTravelOrders, usePendingAccountantTravelOrders,
    usePendingDopTravelOrders, usePendingFleetManagerTravelOrders, useRejectedAccountantTravelOrders,
    useRejectedDopTravelOrders, useRejectedFleetManagerTravelOrders,
} from "../../hooks/useTravelOrders";
import SectionHeader from "../common/SectionHeader";
import Modal from "../common/Modal";
import TravelOrderForm from "../forms/travelOrder/TravelOrderForm";
import TravelOrderTable from "../dashboard/TravelOrder/TravelOrderTable";
import SubHeading from "./../Tasks/SubHeading/SubHeading";
import Loader from "../common/UI/Loader/Loader";
import { travelOrderInitialValues, travelOrderSchema } from "../forms/travelOrder/schemas/travelOrder";
import {useSelector} from "react-redux";
import Table from "../common/TableComponent/Table";
import { travelOrdersTableColumns} from "../../lib/tableColumns";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const TravelOrder = () => {
    const navigate = useNavigate();
    //get user and designation
    const { user } = useSelector((state) => state.auth);

    const { isOpen, onOpen, onClose } = useDisclosure();
    // const {  isLoading } = useTravelOrders();
    const { data:myTravelOrders, isLoading } = useMyTravelOrders();
    console.log(myTravelOrders)

    const {data: pendingDopTravelOrders} = usePendingDopTravelOrders();
    const {data: approvedDopTravelOrders} = useApprovedDopTravelOrders();
    const {data: rejectedDopTravelOrders} = useRejectedDopTravelOrders();

    const {data:pendingAccountantTravelOrders} = usePendingAccountantTravelOrders();
    const {data:approvedAccountantTravelOrders } = useApprovedAccountantTravelOrders();
    const {data:rejectedAccountantTravelOrders} = useRejectedAccountantTravelOrders();

    const {data:pendingFleetManagerTravelOrders} = usePendingFleetManagerTravelOrders();
    const {data:approvedFleetManagerTravelOrders } = useApprovedFleetManagerTravelOrders();
    const {data:rejectedFleetManagerTravelOrders} = useRejectedFleetManagerTravelOrders();

    //set table data for other users
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        setUserData([]);
        if (myTravelOrders?.travelOrders?.length) {
            const dataToSet = myTravelOrders?.travelOrders?.map((b) => {
                return {
                    ...b,
                    full_name: b?.createdBy?.full_name
                           ? b.createdBy.full_name
                    : "N/A",
                    stage: b?.approval_levels.length === 0
                        ? "Dop"
                        : b?.approval_levels.length === 1 && b?.DOPApprovalStatus === "rejected"
                            ? "Dop"
                            : b?.approval_levels.length === 1 && b?.DOPApprovalStatus === "approved"
                                ? "Accountant"
                                : b?.approval_levels.length === 2 && b?.accountantApprovalStatus === "rejected"
                                    ? "Accountant"
                                    : b?.approval_levels.length === 2 && b?.accountantApprovalStatus === "approved"
                                        ? "Fleet  Manager"
                                        : "Fleet  Manager",
                    status: b?.approval_levels.length === 0
                        ? b?.DOPApprovalStatus
                        : b?.approval_levels.length === 1 && b?.DOPApprovalStatus === "rejected"
                            ? b?.DOPApprovalStatus
                            : b?.approval_levels.length === 1 && b?.DOPApprovalStatus === "approved"
                                ? b?.accountantApprovalStatus
                                : b?.approval_levels.length === 2 && b?.accountantApprovalStatus === "rejected"
                                    ? b?.accountantApprovalStatus
                                    : b?.approval_levels.length === 2 && b?.accountantApprovalStatus === "approved"
                                        ? b?.fleetManagerApprovalStatus
                                        : b?.approval_levels.length === 2 && b?.fleetManagerApprovalStatus === "rejected"
                                            ? b?.fleetManagerApprovalStatus
                                            : b?.fleetManagerApprovalStatus,

                };
            });
            setUserData(dataToSet);
        }
    }, [myTravelOrders]);


    const handleViewSummary = (id) => {
        navigate(`/travel-order/${id.id}`);
    };

    return (
        <>
            <SectionHeader title="Travel Order" />
            {isLoading ? (
                <Loader />
            ) : (
                user.designation === "dop" && (
                    <>
                        <SubHeading title="My Travel Requests" />
                        <Table
                            data={userData}
                            columns={travelOrdersTableColumns}
                            loading={isLoading}
                            btnLabel="Add Travel Order"
                            btnClick={onOpen}
                            showActions={true}
                            onViewHandler={handleViewSummary}
                        />
                        {/*<TravelOrderTable data={myTravelOrders?.travelOrders} type="MY" btnLabel="Travel Order" btnClick={onOpen}/>*/}
                        <br/>
                        <SubHeading title="Unread Requests" />
                        <TravelOrderTable data={pendingDopTravelOrders?.TravelOrders} type="new" showBtn={false}/>
                        <br/>
                        <SubHeading title="Approved Requests" />
                        <TravelOrderTable data={approvedDopTravelOrders?.TravelOrders} type="approved" showBtn={false}/>
                        <br/>
                        <SubHeading title="Rejected Requests" />
                        <TravelOrderTable data={rejectedDopTravelOrders?.TravelOrders} type="rejected" showBtn={false}/>
                    </>
                )

            )}

            {user.designation === "accountant" && (
                    <>
                        <SubHeading title="My Travel Requests" />
                        <Table
                            data={userData}
                            columns={travelOrdersTableColumns}
                            loading={isLoading}
                            btnLabel="Add Travel Order"
                            btnClick={onOpen}
                            showActions={true}
                            onViewHandler={handleViewSummary}
                        />
                        {/*<TravelOrderTable data={myTravelOrders?.travelOrders} type="MY" btnLabel="Travel Order" btnClick={onOpen}/>*/}
                        <br/>
                        <SubHeading title="Unread Requests" />
                        <TravelOrderTable data={pendingAccountantTravelOrders?.TravelOrders} type="new" showBtn={false}/>
                        <br/>
                        <SubHeading title="Approved Request" />
                        <TravelOrderTable data={approvedAccountantTravelOrders?.TravelOrders} type="approved" showBtn={false}/>
                        <br/>
                        <SubHeading title="Rejected Request" />
                        <TravelOrderTable data={rejectedAccountantTravelOrders?.TravelOrders} type="rejected" showBtn={false}/>
                    </>
                )

            }

            {
                user.designation === "fleetManager" && (
                    <>
                        <SubHeading title="My Travel Requests" />
                        <Table
                            data={userData}
                            columns={travelOrdersTableColumns}
                            loading={isLoading}
                            btnLabel="Add Travel Order"
                            btnClick={onOpen}
                            showActions={true}
                            onViewHandler={handleViewSummary}
                        />
                        {/*<TravelOrderTable data={myTravelOrders?.travelOrders} type="MY" btnLabel="Travel Order" btnClick={onOpen}/>*/}
                        <br/>
                        <SubHeading title="Unread Requests" />
                        <TravelOrderTable data={pendingFleetManagerTravelOrders?.TravelOrders} type="new"  showBtn={false}/>
                        <br/>
                        <SubHeading title="Approved Request" />
                        <TravelOrderTable data={approvedFleetManagerTravelOrders?.TravelOrders} type="approved" showBtn={false}/>
                        <br/>
                        <SubHeading title="Rejected Request" />
                        <TravelOrderTable data={rejectedFleetManagerTravelOrders?.TravelOrders} type="rejected" showBtn={false}/>
                    </>
                )
            }

            {/*rest of the users*/}
            {
                (user.designation !== "dop" && user.designation !== "accountant" &&
                    user.designation !== "fleetManager") && (
                    <>
                        <SubHeading title="My Requests" />
                        <Table
                            data={userData}
                            columns={travelOrdersTableColumns}
                            loading={isLoading}
                            btnLabel="Add Travel Order"
                            btnClick={onOpen}
                            showActions={true}
                            onViewHandler={handleViewSummary}
                        />
                        {/*<TravelOrderTable data={myTravelOrders?.travelOrders} type="new" btnLabel="Travel Order" btnClick={onOpen}/>*/}
                    </>
                )
            }

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
