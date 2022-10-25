import React from "react";
import {useDisclosure} from "@chakra-ui/react";
import SectionHeader from "../common/SectionHeader";
import Modal from "../common/Modal";
import RequisitionForm from "../forms/requisition/RequisitionForm";
import {
    useAddRequisition,
    useApprovedAccountantRequisitions,
    useApprovedCeoRequisitions,
    useApprovedDopRequisitions,
    useApprovedProcurementRequisitions,
    useMyRequisitions,
    usePendingAccountantRequisitions,
    usePendingCeoRequisitions,
    usePendingDopRequisitions,
    usePendingProcurementRequisitions,
    useRejectedAccountantRequisitions,
    useRejectedCeoRequisitions,
    useRejectedDopRequisitions,
    useRejectedProcurementRequisitions,
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
import {useState} from "react";
import {useSelector} from "react-redux";


const Requisitions = () => {
    //get user and designation
    const {user} = useSelector((state) => state.auth);
    // console.log(user)
    const {isOpen, onOpen, onClose} = useDisclosure();
    // const {data, isLoading} = useRequisitions();
    const [activityType, setActivityType] = useState("");

    const {data: myRequisitions, isLoading} = useMyRequisitions();

    const {data: pendingDopRequisitions} = usePendingDopRequisitions();
    const {data: approvedDopRequisitions} = useApprovedDopRequisitions();
    const {data: rejectedDopRequisitions} = useRejectedDopRequisitions();

    const {data: pendingAccountantRequisitions} = usePendingAccountantRequisitions();
    const {data: approvedAccountantRequisitions} = useApprovedAccountantRequisitions();
    const {data: rejectedAccountantRequisitions} = useRejectedAccountantRequisitions();

    const {data: pendingCeoRequisitions} = usePendingCeoRequisitions();
    const {data: approvedCeoRequisitions} = useApprovedCeoRequisitions();
    const {data: rejectedCeoRequisitions} = useRejectedCeoRequisitions();

    const {data: pendingProcurementRequisitions} = usePendingProcurementRequisitions();
    const {data: approvedProcurementRequisitions} = useApprovedProcurementRequisitions();
    const {data: rejectedProcurementRequisitions} = useRejectedProcurementRequisitions();
    // console.log(myRequisitions)
    // console.log(approvedProcurementRequisitions)



    const handleGetActivityType = (activity) => {
        setActivityType(activity);
    };
    return (
        <>
            <SectionHeader title="Requisitions"/>

            {isLoading ? (
                <Loader/>
            ) : (
                user.designation === "dop" && (
                    <>
                        <SubHeading title="My Requisition Requests"/>
                        <RequisitionTable
                            data={myRequisitions?.requisitions}
                            type="new"
                            btnLabel="Add Requisition"
                            btnClick={onOpen}
                        />
                        <br/>
                        <SubHeading title="Unread Requests"/>
                        <RequisitionTable
                            data={pendingDopRequisitions?.Requisitions}
                            type="new"
                            showBtn={false}
                        />
                        <br/>
                        <SubHeading title="Approved Requisitions"/>
                        <RequisitionTable
                            data={approvedDopRequisitions?.Requisitions}
                            type="approved"
                            showBtn={false}
                        />
                        <br/>
                        <SubHeading title="Rejected Requisitions"/>
                        <RequisitionTable
                            data={rejectedDopRequisitions?.Requisitions}
                            type="rejected"
                            showBtn={false}
                        />
                    </>
                )
            )}
            {user.designation === "accountant" && (
                <>
                    <SubHeading title="My Requisition Requests"/>
                    <RequisitionTable
                        data={myRequisitions?.requisitions}
                        type="new"
                        btnLabel="Add Requisition"
                        btnClick={onOpen}
                    />
                    <br/>
                    <SubHeading title="Unread Requests"/>
                    <RequisitionTable
                        data={pendingAccountantRequisitions?.Requisitions}
                        type="new"
                        showBtn={false}
                    />
                    <br/>
                    <SubHeading title="Approved Requisitions"/>
                    <RequisitionTable
                        data={approvedAccountantRequisitions?.Requisitions}
                        type="approved"
                        showBtn={false}
                    />
                    <br/>
                    <SubHeading title="Rejected Requisitions"/>
                    <RequisitionTable
                        data={rejectedAccountantRequisitions?.Requisitions}
                        type="rejected"
                        showBtn={false}
                    />
                </>
            )}
            {user.designation === "ceo" && (
                <>
                    <SubHeading title="My Requisition Requests"/>
                    <RequisitionTable
                        data={myRequisitions?.requisitions}
                        type="new"
                        btnLabel="Add Requisition"
                        btnClick={onOpen}
                    />
                    <br/>
                    <SubHeading title="Unread Requests"/>
                    <RequisitionTable
                        data={pendingCeoRequisitions?.Requisitions}
                        type="new"
                        showBtn={false}
                    />
                    <br/>
                    <SubHeading title="Approved Requisitions"/>
                    <RequisitionTable
                        data={approvedCeoRequisitions?.Requisitions}
                        type="approved"
                        showBtn={false}
                    />
                    <br/>
                    <SubHeading title="Rejected Requisitions"/>
                    <RequisitionTable
                        data={rejectedCeoRequisitions?.Requisitions}
                        type="rejected"
                        showBtn={false}
                    />
                </>
            )}

            {user.designation === "procurement" && (
                <>
                    <SubHeading title="My Requisition Requests"/>
                    <RequisitionTable
                        data={myRequisitions?.requisitions}
                        type="new"
                        btnLabel="Add Requisition"
                        btnClick={onOpen}
                    />
                    <br/>
                    <SubHeading title="Unread Requests"/>
                    <RequisitionTable
                        data={pendingProcurementRequisitions?.Requisitions}
                        type="new"
                        showBtn={false}
                    />
                    <br/>
                    <SubHeading title="Approved Requisitions"/>
                    <RequisitionTable
                        data={approvedProcurementRequisitions?.Requisitions}
                        type="approved"
                        showBtn={false}
                    />
                    <br/>
                    <SubHeading title="Rejected Requisitions"/>
                    <RequisitionTable
                        data={rejectedProcurementRequisitions?.Requisitions}
                        type="rejected"
                        showBtn={false}
                    />
                </>
            )}

            {(user.designation !== "dop" && user.designation !== "accountant" &&
                user.designation !== "ceo" && user.designation !== "procurement") && (
                <>
                    <SubHeading title="My Requisition Requests"/>
                    <RequisitionTable
                        data={myRequisitions?.requisitions}
                        type="new"
                        btnLabel="Add Requisition"
                        btnClick={onOpen}
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
