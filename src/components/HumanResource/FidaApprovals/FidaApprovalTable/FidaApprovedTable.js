import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { IconButton, useDisclosure } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Td } from "@chakra-ui/react";
import classes from "../../Approvals/ApprovalTable/Table.module.css";
import styles from "./FidaApprovalTable.module.css";
import { TableHeadColumn } from "../../../Membership/Allocations/AllocationsTable/AllocationsTable";
import Modal from "../../../common/Modal";
import NewEmployeeForm from "../NewEmployeeForm/NewEmployeeForm";

const FidaApprovedTable = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, searchResults } = props;

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <NewEmployeeForm isApprove={true} />
      </Modal>
      <div className={classes.approvals_table_wrapper}>
        <Table
          size="sm"
          variant="simple"
          colorScheme="gray"
          className={classes.approval_table}
        >
          <Thead className={styles.table_header}>
            <Tr>
              <TableHeadColumn title="Name" />
              <TableHeadColumn title="Email" />
              <TableHeadColumn title="Designation" />
              <TableHeadColumn title="Project of attachment" />
              <TableHeadColumn title="sign up Date" />
              <TableHeadColumn title="Actions" />
            </Tr>
          </Thead>
          <Tbody>
            {(searchResults.length > 0 ? searchResults : data).map((item) => {
              return (
                <Tr>
                  <Td>{item.name}</Td>
                  <Td className={styles.data__primary_text_email}>
                    {item.email}
                  </Td>
                  <Td style={{ textTransform: "uppercase" }}>
                    {item.designation}
                  </Td>
                  <Td>{item.project}</Td>
                  <Td>{item.signUpdate}</Td>
                  <Td className={classes.table_actions_wrapper}>
                    <div className={classes.table_actions_icon_wrapper}>
                      <IconButton
                        size="xs"
                        aria-label="Edit Item"
                        icon={<MdEdit />}
                        onClick={onOpen}
                      />
                    </div>
                    <div className={classes.table_actions_icon_wrapper}>
                      <IconButton
                        size="xs"
                        variant="outline"
                        aria-label="Edit Item"
                        icon={<MdDelete />}
                      />
                    </div>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </div>
    </>
  );
};

export default FidaApprovedTable;
