import SectionHeader from "../common/SectionHeader";
import Table from "../common/Table";
import Modal from "../common/Modal";
import { fleetDatabaseColumns } from "../../assets/tableColumns/fleetDatabase";
import FleetDatabaseForm from "../forms/fleetDatabase/FleetDatabaseForm";
import { useDisclosure } from "@chakra-ui/react";
import { useAddFleet, useFleets } from "../../hooks/useFleet";
import {
  fleetDatabaseInitialValues,
  fleetDatabaseOrderSchema,
} from "../forms/fleetDatabase/schemas/fleetDatabase";

const FleetDatabase = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, isLoading } = useFleets();

  const onRowClick = (row) => {};

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
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Vehicle Profiling Form"
        size="2xl"
      >
        <FleetDatabaseForm
          initialValues={fleetDatabaseInitialValues}
          validationSchema={fleetDatabaseOrderSchema}
          onSuccess={onClose}
          success={`Vehicle added successfully`}
          useMutate={useAddFleet}
        />
      </Modal>
    </>
  );
};

export default FleetDatabase;
