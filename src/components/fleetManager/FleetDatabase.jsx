import React, { useEffect, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import SectionHeader from "../common/SectionHeader";
import Modal from "../common/Modal";
import Loader from "../common/UI/Loader/Loader";
import FleetDatabaseForm from "../forms/fleetDatabase/FleetDatabaseForm";
import {fleetDatabaseInitialValues, fleetDatabaseOrderSchema} from "../forms/fleetDatabase/schemas/fleetDatabase";
import FleetDatabaseTable from "./FleetDatabaseTable/FleetDatabaseTable";
import {useAddFleet, useFleets} from "../../hooks/useFleet";
import Table from "../common/TableComponent/Table";
import { fleetDatabaseColumns } from "../../lib/tableColumns";

const Requisitions = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    // const { data, isLoading } = useRequisitions();

    const {data: fleets, isLoading} =useFleets();

    const onRowClick = (row) => {};
    const [data, setData] = useState([]);
    useEffect(() => {
      setData([]);
      if (fleets?.fleets?.length) {
        const dataToSet = fleets?.fleets?.map((b, index) => {
          return {
            ...b,
            sn:{
              sn:'000'+(index + 1)
            },
            date: {
              date: b?.createdAt
            }
          };
        });
        setData(dataToSet);
      }
    }, [fleets]);
    return (
        <>
            <SectionHeader title="Fleet Database"/>

            {isLoading ? (
                <Loader />
            ) : (
                <Table
                // onViewHandler
                isLoading={isLoading}
                data={data?data : null}
                btnLabel="Add Vehicle"
                tableName="Fleet Database"
                columns={ fleetDatabaseColumns}
              />
                // <FleetDatabaseTable
                //     data={data?.fleets}
                //     columns={fleetDatabaseColumns}
                //     onRowClick={onRowClick}
                //     isLoading={isLoading}
                //     btnLabel="Add Vehicle"
                //     btnClick={onOpen}
                //     tableName={"Fleet Database"}
                // />

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
