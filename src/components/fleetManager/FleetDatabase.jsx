import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import SectionHeader from "../common/SectionHeader";
import Modal from "../common/Modal";
import Loader from "../common/UI/Loader/Loader";
import FleetDatabaseForm from "../forms/fleetDatabase/FleetDatabaseForm";
import {fleetDatabaseInitialValues, fleetDatabaseOrderSchema} from "../forms/fleetDatabase/schemas/fleetDatabase";
import FleetDatabaseTable from "./FleetDatabaseTable/FleetDatabaseTable";
import {useAddFleet, useFleets} from "../../hooks/useFleet";
import {fleetDatabaseColumns} from "../../assets/tableColumns/fleetDatabase";

const Requisitions = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    // const { data, isLoading } = useRequisitions();

    const {data, isLoading} =useFleets();

    const onRowClick = (row) => {};

    return (
        <>
            <SectionHeader title="Fleet Database"/>

            {isLoading ? (
                <Loader />
            ) : (
                <FleetDatabaseTable
                    data={data?.fleets}
                    columns={fleetDatabaseColumns}
                    onRowClick={onRowClick}
                    isLoading={isLoading}
                    btnLabel="Add Vehicle"
                    btnClick={onOpen}
                    tableName={"Fleet Database"}
                />

            )}
            <Modal isOpen={isOpen} onClose={onClose} title="Vehicle Profiling Form" size="2xl">

                <FleetDatabaseForm
                initialValues={fleetDatabaseInitialValues}
                validationSchema={fleetDatabaseOrderSchema}
                onSuccess={onClose}
                success={`Vehicle Added successfully`}
                useMutate={useAddFleet}
                />
            </Modal>
        </>
    );
};

export default Requisitions;
