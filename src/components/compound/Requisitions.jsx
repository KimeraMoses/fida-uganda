import React, {useEffect, useState} from "react";
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
    requisitionSchema,
} from "../../components/forms/requisition/schemas/requisitions";
import Loader from "../common/UI/Loader/Loader";
import {useSelector} from "react-redux";
import Table from "../common/TableComponent/Table";
import {requisitionRequestsTableColumns} from "../../lib/tableColumns";
import {useNavigate} from "react-router-dom";

const Requisitions = () => {
    //get user and designation
    const {user} = useSelector((state) => state.auth);
    // console.log(user)
    const {isOpen, onOpen, onClose} = useDisclosure();
    // const {data, isLoading} = useRequisitions();
    const navigate = useNavigate();
    const handleViewSummary = (id) => {
        navigate(`/requisitions/${id.id}`);
    };

    const {data: myRequisitions, isLoading} = useMyRequisitions();
    // console.log(myRequisitions)

    const {data: pendingDopRequisitions} = usePendingDopRequisitions();
    const {data: approvedDopRequisitions} = useApprovedDopRequisitions();
    const {data: rejectedDopRequisitions} = useRejectedDopRequisitions();

    const {data: pendingAccountantRequisitions} =
        usePendingAccountantRequisitions();
    const {data: approvedAccountantRequisitions} =
        useApprovedAccountantRequisitions();
    const {data: rejectedAccountantRequisitions} =
        useRejectedAccountantRequisitions();

    const {data: pendingCeoRequisitions} = usePendingCeoRequisitions();
    const {data: approvedCeoRequisitions} = useApprovedCeoRequisitions();
    const {data: rejectedCeoRequisitions} = useRejectedCeoRequisitions();

    const {data: pendingProcurementRequisitions} =
        usePendingProcurementRequisitions();
    const {data: approvedProcurementRequisitions} =
        useApprovedProcurementRequisitions();
    const {data: rejectedProcurementRequisitions} =
        useRejectedProcurementRequisitions();
    // console.log(myRequisitions)
    // console.log(approvedProcurementRequisitions)

    const [userData, setUserData] = useState([]);

    const [pendingDop, setPendingDop] = useState([]);
    const [approvedDop, setApprovedDop] = useState([]);
    const [rejectedDop, setRejectedDop] = useState([]);

    const [pendingAccountant, setPendingAccountant] = useState([]);
    const [approvedAccountant, setApprovedAccountant] = useState([]);
    const [rejectedAccountant, setRejectedAccountant] = useState([]);

    const [pendingCeo, setPendingCeo] = useState([]);
    const [approvedCeo, setApprovedCeo] = useState([]);
    const [rejectedCeo, setRejectedCeo] = useState([]);

    const [pendingProcurement, setPendingProcurement] = useState([]);
    const [approvedProcurement, setApprovedProcurement] = useState([]);
    const [rejectedProcurement, setRejectedProcurement] = useState([]);


    //set table data for other users
    useEffect(() => {
        setUserData([]);
        if (myRequisitions?.requisitions?.length) {
            const dataToSet = myRequisitions?.requisitions?.map((b) => {
                return {
                    ...b,
                    full_name: b?.createdBy?.full_name
                        ? b.createdBy.full_name
                        : b?.registeredBy?.full_name
                            ? b.registeredBy.full_name
                            : "N/A",
                    stage: b?.approval_levels.length === 0
                        ? "Dop"
                        : b?.approval_levels.length === 1 &&
                        b?.DOPApprovalStatus === "rejected"
                            ? "Dop"
                            : b?.approval_levels.length === 1 &&
                            b?.DOPApprovalStatus === "approved"
                                ? "Accountant"
                                : b?.approval_levels.length === 2 &&
                                b?.accountantApprovalStatus === "rejected"
                                    ? "Accountant"
                                    : b?.approval_levels.length === 2 &&
                                    b?.accountantApprovalStatus === "approved"
                                        ? "Ceo"
                                        : b?.approval_levels.length === 3 &&
                                        b?.CEOApprovalStatus === "rejected"
                                            ? "Ceo"
                                            : b?.approval_levels.length === 3 &&
                                            b?.CEOApprovalStatus === "approved"
                                                ? "Procurement Officer"
                                                : "Procurement Officer",
                    status: b?.approval_levels.length === 0
                        ? b?.DOPApprovalStatus
                        : b?.approval_levels.length === 1 &&
                        b?.DOPApprovalStatus === "rejected"
                            ? b?.DOPApprovalStatus
                            : b?.approval_levels.length === 1 &&
                            b?.DOPApprovalStatus === "approved"
                                ? b?.accountantApprovalStatus
                                : b?.approval_levels.length === 2 &&
                                b?.accountantApprovalStatus === "rejected"
                                    ? b?.accountantApprovalStatus
                                    : b?.approval_levels.length === 2 &&
                                    b?.accountantApprovalStatus === "approved"
                                        ? b?.CEOApprovalStatus
                                        : b?.approval_levels.length === 3 &&
                                        b?.CEOApprovalStatus === "rejected"
                                            ? b?.CEOApprovalStatus
                                            : b?.approval_levels.length === 3 &&
                                            b?.CEOApprovalStatus === "approved"
                                                ? b?.procurementApprovalStatus
                                                : b?.approval_levels.length === 4 &&
                                                b?.procurementApprovalStatus === "rejected"
                                                    ? b?.procurementApprovalStatus
                                                    : b?.procurementApprovalStatus


                };
            });
            setUserData(dataToSet);
        }
    }, [myRequisitions]);

    //set table data for pending DOp requests
    useEffect(() => {
        setPendingDop([]);
        if (pendingDopRequisitions?.Requisitions?.length) {
            const dataToSet = pendingDopRequisitions?.Requisitions?.map((b) => {
                return {
                    ...b,
                    full_name: b?.createdBy?.full_name
                        ? b.createdBy.full_name
                        : b?.registeredBy?.full_name
                            ? b.registeredBy.full_name
                            : "N/A",
                    stage: b?.approval_levels.length === 0
                        ? "Dop"
                        : b?.approval_levels.length === 1 &&
                        b?.DOPApprovalStatus === "rejected"
                            ? "Dop"
                            : b?.approval_levels.length === 1 &&
                            b?.DOPApprovalStatus === "approved"
                                ? "Accountant"
                                : b?.approval_levels.length === 2 &&
                                b?.accountantApprovalStatus === "rejected"
                                    ? "Accountant"
                                    : b?.approval_levels.length === 2 &&
                                    b?.accountantApprovalStatus === "approved"
                                        ? "Ceo"
                                        : b?.approval_levels.length === 3 &&
                                        b?.CEOApprovalStatus === "rejected"
                                            ? "Ceo"
                                            : b?.approval_levels.length === 3 &&
                                            b?.CEOApprovalStatus === "approved"
                                                ? "Procurement Officer"
                                                : "Procurement Officer",
                    status: b?.approval_levels.length === 0
                        ? b?.DOPApprovalStatus
                        : b?.approval_levels.length === 1 &&
                        b?.DOPApprovalStatus === "rejected"
                            ? b?.DOPApprovalStatus
                            : b?.approval_levels.length === 1 &&
                            b?.DOPApprovalStatus === "approved"
                                ? b?.accountantApprovalStatus
                                : b?.approval_levels.length === 2 &&
                                b?.accountantApprovalStatus === "rejected"
                                    ? b?.accountantApprovalStatus
                                    : b?.approval_levels.length === 2 &&
                                    b?.accountantApprovalStatus === "approved"
                                        ? b?.CEOApprovalStatus
                                        : b?.approval_levels.length === 3 &&
                                        b?.CEOApprovalStatus === "rejected"
                                            ? b?.CEOApprovalStatus
                                            : b?.approval_levels.length === 3 &&
                                            b?.CEOApprovalStatus === "approved"
                                                ? b?.procurementApprovalStatus
                                                : b?.approval_levels.length === 4 &&
                                                b?.procurementApprovalStatus === "rejected"
                                                    ? b?.procurementApprovalStatus
                                                    : b?.procurementApprovalStatus


                };
            });
            setPendingDop(dataToSet);
        }
    }, [pendingDopRequisitions]);

    //set table data for approved DOp requests
    useEffect(() => {
        setApprovedDop([]);
        if (approvedDopRequisitions?.Requisitions?.length) {
            const dataToSet = approvedDopRequisitions?.Requisitions?.map((b) => {
                return {
                    ...b,
                    full_name: b?.createdBy?.full_name
                        ? b.createdBy.full_name
                        : b?.registeredBy?.full_name
                            ? b.registeredBy.full_name
                            : "N/A",
                    stage: b?.approval_levels.length === 0
                        ? "Dop"
                        : b?.approval_levels.length === 1 &&
                        b?.DOPApprovalStatus === "rejected"
                            ? "Dop"
                            : b?.approval_levels.length === 1 &&
                            b?.DOPApprovalStatus === "approved"
                                ? "Accountant"
                                : b?.approval_levels.length === 2 &&
                                b?.accountantApprovalStatus === "rejected"
                                    ? "Accountant"
                                    : b?.approval_levels.length === 2 &&
                                    b?.accountantApprovalStatus === "approved"
                                        ? "Ceo"
                                        : b?.approval_levels.length === 3 &&
                                        b?.CEOApprovalStatus === "rejected"
                                            ? "Ceo"
                                            : b?.approval_levels.length === 3 &&
                                            b?.CEOApprovalStatus === "approved"
                                                ? "Procurement Officer"
                                                : "Procurement Officer",
                    status: b?.approval_levels.length === 0
                        ? b?.DOPApprovalStatus
                        : b?.approval_levels.length === 1 &&
                        b?.DOPApprovalStatus === "rejected"
                            ? b?.DOPApprovalStatus
                            : b?.approval_levels.length === 1 &&
                            b?.DOPApprovalStatus === "approved"
                                ? b?.accountantApprovalStatus
                                : b?.approval_levels.length === 2 &&
                                b?.accountantApprovalStatus === "rejected"
                                    ? b?.accountantApprovalStatus
                                    : b?.approval_levels.length === 2 &&
                                    b?.accountantApprovalStatus === "approved"
                                        ? b?.CEOApprovalStatus
                                        : b?.approval_levels.length === 3 &&
                                        b?.CEOApprovalStatus === "rejected"
                                            ? b?.CEOApprovalStatus
                                            : b?.approval_levels.length === 3 &&
                                            b?.CEOApprovalStatus === "approved"
                                                ? b?.procurementApprovalStatus
                                                : b?.approval_levels.length === 4 &&
                                                b?.procurementApprovalStatus === "rejected"
                                                    ? b?.procurementApprovalStatus
                                                    : b?.procurementApprovalStatus


                };
            });
            setApprovedDop(dataToSet);
        }
    }, [approvedDopRequisitions]);

    //set table data for rejected DOp requests
    useEffect(() => {
        setRejectedDop([]);
        if (rejectedDopRequisitions?.Requisitions?.length) {
            const dataToSet = rejectedDopRequisitions?.Requisitions?.map((b) => {
                return {
                    ...b,
                    full_name: b?.createdBy?.full_name
                        ? b.createdBy.full_name
                        : b?.registeredBy?.full_name
                            ? b.registeredBy.full_name
                            : "N/A",
                    stage: b?.approval_levels.length === 0
                        ? "Dop"
                        : b?.approval_levels.length === 1 &&
                        b?.DOPApprovalStatus === "rejected"
                            ? "Dop"
                            : b?.approval_levels.length === 1 &&
                            b?.DOPApprovalStatus === "approved"
                                ? "Accountant"
                                : b?.approval_levels.length === 2 &&
                                b?.accountantApprovalStatus === "rejected"
                                    ? "Accountant"
                                    : b?.approval_levels.length === 2 &&
                                    b?.accountantApprovalStatus === "approved"
                                        ? "Ceo"
                                        : b?.approval_levels.length === 3 &&
                                        b?.CEOApprovalStatus === "rejected"
                                            ? "Ceo"
                                            : b?.approval_levels.length === 3 &&
                                            b?.CEOApprovalStatus === "approved"
                                                ? "Procurement Officer"
                                                : "Procurement Officer",
                    status: b?.approval_levels.length === 0
                        ? b?.DOPApprovalStatus
                        : b?.approval_levels.length === 1 &&
                        b?.DOPApprovalStatus === "rejected"
                            ? b?.DOPApprovalStatus
                            : b?.approval_levels.length === 1 &&
                            b?.DOPApprovalStatus === "approved"
                                ? b?.accountantApprovalStatus
                                : b?.approval_levels.length === 2 &&
                                b?.accountantApprovalStatus === "rejected"
                                    ? b?.accountantApprovalStatus
                                    : b?.approval_levels.length === 2 &&
                                    b?.accountantApprovalStatus === "approved"
                                        ? b?.CEOApprovalStatus
                                        : b?.approval_levels.length === 3 &&
                                        b?.CEOApprovalStatus === "rejected"
                                            ? b?.CEOApprovalStatus
                                            : b?.approval_levels.length === 3 &&
                                            b?.CEOApprovalStatus === "approved"
                                                ? b?.procurementApprovalStatus
                                                : b?.approval_levels.length === 4 &&
                                                b?.procurementApprovalStatus === "rejected"
                                                    ? b?.procurementApprovalStatus
                                                    : b?.procurementApprovalStatus


                };
            });
            setRejectedDop(dataToSet);
        }
    }, [rejectedDopRequisitions]);

    return (
        <>
            <SectionHeader title="Requisitions"/>

            {isLoading ? (
                <Loader/>
            ) : (
                user.designation === "dop" && (
                    <>
                        <SubHeading title="My Requisition Requests"/>
                        <Table
                            data={userData}
                            columns={requisitionRequestsTableColumns}
                            loading={isLoading}
                            btnLabel="Add Requisition"
                            btnClick={onOpen}
                            showActions={true}
                            onViewHandler={handleViewSummary}
                            tableName="My Requisitions requests"
                        />
                        <br/>
                        <SubHeading title="Unread Requests"/>
                        <Table
                            data={pendingDop}
                            columns={requisitionRequestsTableColumns}
                            loading={isLoading}
                            showBtn={false}
                            showActions={true}
                            onViewHandler={handleViewSummary}
                            tableName="Unread DOP Requisitions requests"
                        />
                        {/*<RequisitionTable*/}
                        {/*    data={pendingDopRequisitions?.Requisitions}*/}
                        {/*    type="new"*/}
                        {/*    showBtn={false}*/}
                        {/*/>*/}
                        <br/>
                        <SubHeading title="Approved Requisitions"/>
                        <Table
                            data={approvedDop}
                            columns={requisitionRequestsTableColumns}
                            loading={isLoading}
                            showBtn={false}
                            showActions={true}
                            onViewHandler={handleViewSummary}
                            tableName="Approved Dop Requisitions requests"
                        />
                        {/*<RequisitionTable*/}
                        {/*    data={approvedDopRequisitions?.Requisitions}*/}
                        {/*    type="approved"*/}
                        {/*    showBtn={false}*/}
                        {/*/>*/}
                        <br/>
                        <SubHeading title="Rejected Requisitions"/>
                        <Table
                            data={rejectedDop}
                            columns={requisitionRequestsTableColumns}
                            loading={isLoading}
                            showBtn={false}
                            showActions={true}
                            onViewHandler={handleViewSummary}
                            tableName="Rejected  Dop Requisitions requests"
                        />
                        {/*<RequisitionTable*/}
                        {/*    data={rejectedDopRequisitions?.Requisitions}*/}
                        {/*    type="rejected"*/}
                        {/*    showBtn={false}*/}
                        {/*/>*/}
                    </>
                )
            )}
            {user.designation === "accountant" && (
                <>
                    <SubHeading title="My Requisition Requests"/>
                    <Table
                        data={userData}
                        columns={requisitionRequestsTableColumns}
                        loading={isLoading}
                        btnLabel="Add Requisition"
                        btnClick={onOpen}
                        showActions={true}
                        onViewHandler={handleViewSummary}
                        tableName="My Requisitions requests"
                    />
                    <br/>
                    <SubHeading title="Unread Requests"/>
                    <Table
                        data={pendingAccountant}
                        columns={requisitionRequestsTableColumns}
                        loading={isLoading}
                        showBtn={false}
                        showActions={true}
                        onViewHandler={handleViewSummary}
                        tableName="Unread Accountant Requisitions requests"
                    />
                    {/*<RequisitionTable*/}
                    {/*    data={pendingAccountantRequisitions?.Requisitions}*/}
                    {/*    type="new"*/}
                    {/*    showBtn={false}*/}
                    {/*/>*/}
                    <br/>
                    <SubHeading title="Approved Requisitions"/>
                    <Table
                        data={approvedAccountant}
                        columns={requisitionRequestsTableColumns}
                        loading={isLoading}
                        showBtn={false}
                        showActions={true}
                        onViewHandler={handleViewSummary}
                        tableName="Approved Accountant Requisitions requests"
                    />
                    {/*<RequisitionTable*/}
                    {/*    data={approvedAccountantRequisitions?.Requisitions}*/}
                    {/*    type="approved"*/}
                    {/*    showBtn={false}*/}
                    {/*/>*/}
                    <br/>
                    <SubHeading title="Rejected Requisitions"/>
                    <Table
                        data={rejectedAccountant}
                        columns={requisitionRequestsTableColumns}
                        loading={isLoading}
                        showBtn={false}
                        showActions={true}
                        onViewHandler={handleViewSummary}
                        tableName="Rejected Accountant Requisitions requests"
                    />
                    {/*<RequisitionTable*/}
                    {/*    data={rejectedAccountantRequisitions?.Requisitions}*/}
                    {/*    type="rejected"*/}
                    {/*    showBtn={false}*/}
                    {/*/>*/}
                </>
            )}
            {user.designation === "ceo" && (
                <>
                    <SubHeading title="My Requisition Requests"/>
                    <Table
                        data={userData}
                        columns={requisitionRequestsTableColumns}
                        loading={isLoading}
                        btnLabel="Add Requisition"
                        btnClick={onOpen}
                        showActions={true}
                        onViewHandler={handleViewSummary}
                        tableName="My Requisitions requests"
                    />
                    <br/>
                    <SubHeading title="Unread Requests"/>
                    <Table
                        data={pendingCeo}
                        columns={requisitionRequestsTableColumns}
                        loading={isLoading}
                        showBtn={false}
                        showActions={true}
                        onViewHandler={handleViewSummary}
                        tableName="Unread Ceo Requisitions requests"
                    />
                    {/*<RequisitionTable*/}
                    {/*    data={pendingCeoRequisitions?.Requisitions}*/}
                    {/*    type="new"*/}
                    {/*    showBtn={false}*/}
                    {/*/>*/}
                    <br/>
                    <SubHeading title="Approved Requisitions"/>
                    <Table
                        data={approvedCeo}
                        columns={requisitionRequestsTableColumns}
                        loading={isLoading}
                        showBtn={false}
                        showActions={true}
                        onViewHandler={handleViewSummary}
                        tableName="Approved Ceo Requisitions requests"
                    />
                    {/*<RequisitionTable*/}
                    {/*    data={approvedCeoRequisitions?.Requisitions}*/}
                    {/*    type="approved"*/}
                    {/*    showBtn={false}*/}
                    {/*/>*/}
                    <br/>
                    <SubHeading title="Rejected Requisitions"/>
                    <Table
                        data={rejectedCeo}
                        columns={requisitionRequestsTableColumns}
                        loading={isLoading}
                        showBtn={false}
                        showActions={true}
                        onViewHandler={handleViewSummary}
                        tableName="Rejected Ceo Requisitions requests"
                    />
                    {/*<RequisitionTable*/}
                    {/*    data={rejectedCeoRequisitions?.Requisitions}*/}
                    {/*    type="rejected"*/}
                    {/*    showBtn={false}*/}
                    {/*/>*/}
                </>
            )}

            {user.designation === "procurement" && (
                <>
                    <SubHeading title="My Requisition Requests"/>
                    <Table
                        data={userData}
                        columns={requisitionRequestsTableColumns}
                        loading={isLoading}
                        btnLabel="Add Requisition"
                        btnClick={onOpen}
                        showActions={true}
                        onViewHandler={handleViewSummary}
                        tableName="My Requisitions requests"
                    />
                    {/*<RequisitionTable*/}
                    {/*    data={myRequisitions?.requisitions}*/}
                    {/*    type="new"*/}
                    {/*    btnLabel="Add Requisition"*/}
                    {/*    btnClick={onOpen}*/}
                    {/*/>*/}
                    <br/>
                    <SubHeading title="Unread Requests"/>
                    <Table
                        data={pendingProcurement}
                        columns={requisitionRequestsTableColumns}
                        loading={isLoading}
                        showBtn={false}
                        showActions={true}
                        onViewHandler={handleViewSummary}
                        tableName="Unread Procurement Requisitions requests"
                    />
                    {/*<RequisitionTable*/}
                    {/*    data={pendingProcurementRequisitions?.Requisitions}*/}
                    {/*    type="new"*/}
                    {/*    showBtn={false}*/}
                    {/*/>*/}
                    <br/>
                    <SubHeading title="Approved Requisitions"/>
                    <Table
                        data={approvedProcurement}
                        columns={requisitionRequestsTableColumns}
                        loading={isLoading}
                        showBtn={false}
                        showActions={true}
                        onViewHandler={handleViewSummary}
                        tableName="Approved Procurement Requisitions requests"
                    />
                    {/*<RequisitionTable*/}
                    {/*    data={approvedProcurementRequisitions?.Requisitions}*/}
                    {/*    type="approved"*/}
                    {/*    showBtn={false}*/}
                    {/*/>*/}
                    <br/>
                    <SubHeading title="Rejected Requisitions"/>
                    <Table
                        data={rejectedProcurement}
                        columns={requisitionRequestsTableColumns}
                        loading={isLoading}
                        showBtn={false}
                        showActions={true}
                        onViewHandler={handleViewSummary}
                        tableName="Rejected Procurement Requisitions requests"
                    />
                    {/*<RequisitionTable*/}
                    {/*    data={rejectedProcurementRequisitions?.Requisitions}*/}
                    {/*    type="rejected"*/}
                    {/*    showBtn={false}*/}
                    {/*/>*/}
                </>
            )}

            {user.designation !== "dop" &&
                user.designation !== "accountant" &&
                user.designation !== "ceo" &&
                user.designation !== "procurement" && (
                    <>
                        <SubHeading title="My Requisition Requests"/>
                        <Table
                            data={userData}
                            columns={requisitionRequestsTableColumns}
                            loading={isLoading}
                            btnLabel="Add Requisition"
                            btnClick={onOpen}
                            showActions={true}
                            onViewHandler={handleViewSummary}
                            tableName="My Requisitions requests"
                        />
                        {/*<RequisitionTable*/}
                        {/*  data={myRequisitions?.requisitions}*/}
                        {/*  type="new"*/}
                        {/*  btnLabel="Add Requisition"*/}
                        {/*  btnClick={onOpen}*/}
                        {/*/>*/}
                    </>
                )}

            <Modal isOpen={isOpen} onClose={onClose} title="Requisition" size="xl">
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
