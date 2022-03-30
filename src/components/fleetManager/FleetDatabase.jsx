// import { useState } from 'react'
import SectionHeader from "../common/SectionHeader";
import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { toastError } from "../../lib/toastDetails";
import Table from "../common/Table";
import Modal from "../common/Modal";
import { fleetDatabaseColumns } from "../../assets/tableColumns/fleetDatabase";
import FleetDatabaseForm from "../forms/fleetDatabase/FleetDatabaseForm";
import { useDisclosure } from "@chakra-ui/react";
import { useFleets } from "../../hooks/useFleet";


const FleetDatabase = () => {
  // const [data, setdata] = useState([])

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { data, isLoading, isError, error } = useFleets();
  const toast = useToast();

  useEffect(() => {
    
    if (isError) {
      toast(toastError(error));
    }
  }, [isError, error, toast]);

  const onRowClick = (row) => { };
  return (
    <>
      <SectionHeader title="Fleet Database" />
      <Table
        data={data?.fleets}
        columns={fleetDatabaseColumns}
        onRowClick={onRowClick}
        isLoading={isLoading}
        btnLabel="Add Vehicle"
        btnClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose} title="Vehicle Profiling Form">
        <FleetDatabaseForm
          // onSubmit={mutate}
          // isSubmitting={isSubmitting}
          // isError={isError}
          // error={error}
        />
      </Modal>
    </>
  );
};

export default FleetDatabase;
