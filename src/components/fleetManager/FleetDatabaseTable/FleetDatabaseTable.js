import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import classes from "../../common/table/TableStyles.module.css";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { TableHeadColumn } from "../../Membership/Allocations/AllocationsTable/AllocationsTable";
import withTable from "./../../../hoc/withTable";
import { formatDate } from "./../../../lib/data";
import { fleetDatabaseColumns } from "./../../../assets/tableColumns/fleetDatabase";
import FleetDatabaseForm from "../../forms/fleetDatabase/FleetDatabaseForm";
import Modal from "./../../common/Modal";
import { fleetDatabaseInitialValues } from "../../forms/fleetDatabase/schemas/fleetDatabase";
import { fleetDatabaseOrderSchema } from "./../../forms/fleetDatabase/schemas/fleetDatabase";
import { useAddFleet } from "../../../hooks/useFleet";

const FleetDatabaseTable = ({ data, ...rest }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(data);
  const handleEditItem = (item) => {
    console.log(item);
    onOpen();
  };
  return (
    <>
      <div className={classes.table_wrapper}>
        <Table variant="striped" colorScheme="gray" className={classes.table}>
          <Thead className={classes.table_header}>
            <Tr>
              {fleetDatabaseColumns.map((item) => {
                return (
                  <TableHeadColumn key={item.accessor} title={item.Headers} />
                );
              })}
              <TableHeadColumn title="Actions" />
            </Tr>
          </Thead>
          <Tbody>
            {data &&
              data.map((item, index) => {
                return (
                  <Tr key={item.id}>
                    <Td>00{index + 1}</Td>
                    <Td>{formatDate(item.createdAt)}</Td>
                    <Td>{item.vehicle_model}</Td>
                    <Td>{item.vehicle_number}</Td>
                    <Td>{item.driver_address}</Td>
                    <Td className={classes.table_actions_wrapper}>
                      <div className={classes.table_actions_icon_wrapper}>
                        <IconButton
                          size="xs"
                          aria-label="Edit Item"
                          icon={<MdOutlineRemoveRedEye />}
                          onClick={() => handleEditItem(item)}
                        />
                      </div>
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
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
            isEdit={true}
          />
        </Modal>
      </div>
    </>
  );
};

export default withTable(FleetDatabaseTable);
