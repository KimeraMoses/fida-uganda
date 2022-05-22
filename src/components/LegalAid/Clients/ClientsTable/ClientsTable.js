import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import classes from "../../../Membership/Allocations/AllocationsTable/AllocationsTable.module.css";
import styles from "./Table.module.css";
import { TableHeadColumn } from "../../../Membership/Allocations/AllocationsTable/AllocationsTable";
import { formatDate } from "../../../../lib/data";
import withTable from "./../../../../hoc/withTable";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Modal from "./../../../common/Modal";
import NewClientForm from "./../NewClientForm/NewClientForm";

const ClientsTable = ({ data }) => {
  const [id, setId] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userEditHandler = (userId) => {
    setId(userId);
    onOpen();
  };
  return (
    <>
      <div className={classes.allocations_table_wrapper}>
        <Table
          variant="simple"
          colorScheme="gray"
          className={classes.approval_table}
        >
          <Thead className={styles.table_header}>
            <Tr>
              <TableHeadColumn title="Name" secondaryText="Profession" />
              <TableHeadColumn title="Phone Number" secondaryText="Email" />
              <TableHeadColumn title="Address" secondaryText="City" />
              <TableHeadColumn title="Registration Date" secondaryText="" />
              <TableHeadColumn title="Actions" secondaryText="" />
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => {
              return (
                <Tr>
                  <Td className={classes.data_recepient_field}>
                    <div className={classes.data__primary_text}>
                      {item.name}
                    </div>
                    <div className={classes.data__secondary_text}>
                      {item.occupation}
                    </div>
                  </Td>
                  <Td className={classes.data_recepient_field}>
                    <div className={classes.data__primary_text}>
                      {item.phoneNumber}
                    </div>
                    <div className={classes.data__secondary_text}>
                      {item.email}
                    </div>
                  </Td>
                  <Td className={classes.data_recepient_field}>
                    <div className={classes.data__primary_text}>
                      {item.address}
                    </div>
                    <div className={classes.data__secondary_text}>
                      {item.village}
                    </div>
                  </Td>

                  <Td>
                    <div className={`${classes.data__primary_text}`}>
                      {formatDate(item.createdAt)}
                    </div>
                  </Td>
                  <Td style={{ textAlign: "center" }}>
                    <div className={classes.table_actions_icon_wrapper}>
                      <IconButton
                        size="sm"
                        variant="outline"
                        aria-label="Open Item"
                        icon={<MdOutlineRemoveRedEye />}
                        onClick={() => userEditHandler(item.id)}
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
          size="2xl"
          title="Client Registration Form"
        >
          {id}
          <NewClientForm
            onSuccess={onClose}
            success={"Added Client Successfully"}
          />
        </Modal>
      </div>
    </>
  );
};

export default withTable(ClientsTable);
