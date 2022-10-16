import React from "react";
import SectionHeader from "../common/SectionHeader";
import {Box, useDisclosure} from "@chakra-ui/react";
// import {addAdvance} from "../../apis/advances";
import Modal from "../common/Modal";
import AdvancedRequestForm from "../dashboard/AdvanceTracker/AdvancedTrackerForm/AdvancedRequestForm";
import {initialValues} from "../dashboard/AdvanceTracker/AdvancedTrackerForm/schema";
import {useNavigate} from "react-router-dom";
import {useAddAdvance, useAdvances, useMyAdvances} from "../../hooks/useAdvances";
import TrackerTable from "./../dashboard/TrackerTable/TrackerTable";
import LeaveTrackerTable from "../dashboard/LeaveTracker/LeaveTrackerTable";
import {advanceRequestFormSchema} from "../dashboard/AdvanceTracker/AdvancedTrackerForm/schema";
import FormButton from "./../common/UI/FormButton/FormButton";
import Loader from "../common/UI/Loader/Loader";
import {useSelector} from "react-redux";

const Tracker = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const navigate = useNavigate();
    const handleLeaveClick = (item, type, id) => {
        // console.log(item);
        navigate(
            `/application-summary?application-type=${
                type === "leave" ? `leave&id=${id}` : `advance&id=${id}`
            }`
        );
    };

    //get user and designation
    const {user} = useSelector((state) => state.auth);


    const {data, isLoading} = useAdvances();
    const {data: myAdvances} = useMyAdvances();
    // console.log(myAdvances)

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
                            <TrackerTable
                                type="advance"
                                action={handleLeaveClick}
                                data={myAdvances?.advances}
                                isLoading={isLoading}
                            />

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
                                <TrackerTable
                                    type="advance"
                                    action={handleLeaveClick}
                                    data={data?.advances}
                                    isLoading={isLoading}
                                />

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
