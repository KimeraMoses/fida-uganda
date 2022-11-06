import React, {useEffect, useState} from "react";
import SectionHeader from "../common/SectionHeader";
import {Box, useDisclosure} from "@chakra-ui/react";
// import {addAdvance} from "../../apis/advances";
import Modal from "../common/Modal";
import AdvancedRequestForm from "../dashboard/AdvanceTracker/AdvancedTrackerForm/AdvancedRequestForm";
import {initialValues} from "../dashboard/AdvanceTracker/AdvancedTrackerForm/schema";
import {useNavigate} from "react-router-dom";
import {useAddAdvance, useAdvances, useMyAdvances} from "../../hooks/useAdvances";
// import TrackerTable from "./../dashboard/TrackerTable/TrackerTable";
import LeaveTrackerTable from "../dashboard/LeaveTracker/LeaveTrackerTable";
import {advanceRequestFormSchema} from "../dashboard/AdvanceTracker/AdvancedTrackerForm/schema";
import FormButton from "./../common/UI/FormButton/FormButton";
import Loader from "../common/UI/Loader/Loader";
import {useSelector} from "react-redux";
import Table from "../common/TableComponent/Table";
import {advanceRequestsTableColumns} from "../../lib/tableColumns";


const Tracker = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const navigate = useNavigate();
    const handleLeaveClick = (item) => {
        // console.log(item);
        navigate(`/application-summary?application-type=advance&id=${item.id}`);
    };

    //get user and designation
    const {user} = useSelector((state) => state.auth);


    const {data, isLoading} = useAdvances();
    const {data: myAdvances, isLoading: loadMyAdvances} = useMyAdvances();
    // console.log(myAdvances)

    const [userData, setUserData] = useState([]);
    useEffect(() => {
        setUserData([]);
        if (data?.advances?.length) {
            const dataToSet = data?.advances?.map((b) => {
                return {
                    ...b,
                    advance_details: `${b.amount} requested in ${b.month}`

                };
            });
            setUserData(dataToSet);
        }
    }, [data]);

    const [myAdvancesData, setMyAdvancesData] = useState([]);
    useEffect(() => {
        setMyAdvancesData([]);
        if (myAdvances?.advances?.length) {
            const dataToSet = myAdvances?.advances?.map((b) => {
                return {
                    ...b,
                    advance_details: `${b.amount} requested in ${b.month}`

                };
            });
            setMyAdvancesData(dataToSet);
        }
    }, [myAdvances]);

    return (
        <>
            <SectionHeader title="Leave Tracker"/>
            {isLoading ? (
                <Loader/>
            ) : (

                // rest of users
                (user.designation !== "dop" && user.designation !== "accountant" && user.designation !== "ceo" &&
                    user.designation !== "finance") ? (
                    <>
                        <LeaveTrackerTable handleLeaveClick={handleLeaveClick}/>
                        <SectionHeader title="Advance Tracker"/>
                        <Box bgColor="white" borderRadius={10}>
                            <Table
                                data={myAdvancesData.slice().reverse()}
                                columns={advanceRequestsTableColumns}
                                loading={loadMyAdvances}
                                // btnLabel="New Leave request"
                                // btnClick={onOpen}
                                showActions={true}
                                onViewHandler={handleLeaveClick}
                                tableName="My Advance requests"
                                hideSearch={true}
                            />
                            {/*<TrackerTable*/}
                            {/*    type="advance"*/}
                            {/*    action={handleLeaveClick}*/}
                            {/*    data={myAdvances?.advances}*/}
                            {/*    isLoading={loadMyAdvances}*/}
                            {/*/>*/}

                            <div style={{padding: 10}}>
                                <FormButton variant="filled" onClick={onOpen}>
                                    New Advance Request
                                </FormButton>
                            </div>
                        </Box>
                    </>
                )
                : (
                        <>
                            <LeaveTrackerTable handleLeaveClick={handleLeaveClick}/>
                            <SectionHeader title="Advance Tracker"/>
                            <Box bgColor="white" borderRadius={10}>
                                <Table
                                    data={userData.slice().reverse()}
                                    columns={advanceRequestsTableColumns}
                                    loading={isLoading}
                                    // btnLabel="New Leave request"
                                    // btnClick={onOpen}
                                    showActions={true}
                                    onViewHandler={handleLeaveClick}
                                    tableName="My Advance requests"
                                    hideSearch={true}
                                />
                                {/*<TrackerTable*/}
                                {/*    type="advance"*/}
                                {/*    action={handleLeaveClick}*/}
                                {/*    data={data?.advances}*/}
                                {/*    isLoading={isLoading}*/}
                                {/*/>*/}

                                <div style={{padding: 10}}>
                                    <FormButton variant="filled" onClick={onOpen}>
                                        New Advance Request
                                    </FormButton>
                                </div>
                            </Box>
                        </>
                    )
            )}

            <Modal isOpen={isOpen} onClose={onClose} title="Advance Request Form">
                <AdvancedRequestForm
                    onClose={onClose}
                    initialValues={initialValues}
                    validationSchema={advanceRequestFormSchema}
                    onSuccess={onClose}
                    success={`Advance request added successfully`}
                    useMutate={useAddAdvance}
                />
            </Modal>
        </>
    );
};

export default Tracker;
