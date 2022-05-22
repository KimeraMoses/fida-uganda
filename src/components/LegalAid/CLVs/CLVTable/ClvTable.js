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
import { FcApproval } from "react-icons/fc";
import { MdEdit } from "react-icons/md";
import Modal from "../../../common/Modal";
import NewClvForm from "../CLVForms/NewClvForm";
import { formatDate } from "../../../../lib/data";
import { onSubmitAlert } from "../../../../lib/deleteInProd";
import withTable from "./../../../../hoc/withTable";

const CLVTable = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedRow, setSelectedRow] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const initiateApproval = (row) => {
    setIsEdit(false);
    setSelectedRow(row);
    onOpen();
  };
  const initiateEdit = (row) => {
    setIsEdit(true);
    setSelectedRow(row);
    onOpen();
  };

  return (
    <>
      <div className={classes.allocations_table_wrapper}>
        <Table
          variant="simple"
          size="sm"
          colorScheme="gray"
          className={classes.approval_table}
        >
          <Thead className={styles.table_header}>
            <Tr>
              <TableHeadColumn title="Name" secondaryText="Profession" />
              <TableHeadColumn title="Phone Number" secondaryText="Email" />
              <TableHeadColumn title="Address" secondaryText="City" />
              <TableHeadColumn
                title="FIDA ID NUMBER"
                secondaryText="Registration Date"
              />
              <TableHeadColumn title="Actions" />
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => {
              return (
                <Tr>
                  <Td className={classes.data_recepient_field}>
                    <div className={classes.data__primary_text}>
                      {item.first_name} {item.last_name}
                    </div>
                    <div className={classes.data__secondary_text}>
                      {item.profession}
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
                      {item.city}
                    </div>
                  </Td>

                  <Td>
                    <div className={`${classes.data__primary_text}`}>
                      <div className={classes.data__primary_text}>
                        {item.fida_id}
                      </div>
                      <div className={classes.data__secondary_text}>
                        {formatDate(item.createdAt)}
                      </div>
                    </div>
                  </Td>
                  <Td>
                    <div className={styles.table_actions_wrapperr}>
                      <div className={styles.table_actions_icon_wrapper}>
                        <IconButton
                          size="xs"
                          aria-label="Edit Item"
                          icon={<MdEdit />}
                          onClick={() => initiateEdit(item)}
                        />
                      </div>
                      <div className={styles.table_actions_icon_wrapper}>
                        <IconButton
                          size="xs"
                          variant="outline"
                          aria-label="Approve Clv"
                          icon={<FcApproval />}
                          onClick={() => initiateApproval(item)}
                        />
                      </div>
                    </div>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
        <Modal isOpen={isOpen} onClose={onClose}>
          <NewClvForm
            action={`${isEdit ? "editClv" : "approveClv"}`}
            onClose={onClose}
            useMutate={onSubmitAlert}
            initialValues={selectedRow}
          />
        </Modal>
      </div>
    </>
  );
};

export default withTable(CLVTable);
