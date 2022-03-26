import { useState } from 'react'
import SectionHeader from "../common/SectionHeader";
import Table from "../common/Table";
import Modal from "../common/Modal";
import { fleetDatabaseColumns } from "../../assets/tableColumns/fleetDatabase";
import FleetDatabaseForm from "../forms/fleetDatabase/FleetDatabaseForm";
import { useDisclosure } from "@chakra-ui/react";


const FleetDatabase = () => {
  const [data, setdata] = useState([])

  const { isOpen, onOpen, onClose } = useDisclosure();

  const onRowClick = (row) => { };
  return (
    <>
      <SectionHeader title="Fleet Database" />
      <Table
        data={data}
        columns={fleetDatabaseColumns}
        onRowClick={onRowClick}
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
