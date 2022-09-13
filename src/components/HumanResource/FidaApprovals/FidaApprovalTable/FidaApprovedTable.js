import { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import { IconButton, useDisclosure, useToast } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Td } from "@chakra-ui/react";
import classes from "../../Approvals/ApprovalTable/Table.module.css";
import styles from "./FidaApprovalTable.module.css";
import { TableHeadColumn } from "../../../Membership/Allocations/AllocationsTable/AllocationsTable";
import Modal from "../../../common/Modal";
import { formatDate } from "../../../../lib/data";
import { useActivateUser } from "../../../../hooks/useUser";
import EmployeeCard from "../NewEmployeeForm/EmployeeCard";
import { toastSuccess } from "../../../../lib/toastDetails";

const FidaApprovedTable = ({ data }) => {
  const [user, setUser] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { mutate, isLoading, isSuccess, isError, error } =
    useActivateUser();
  const toast = useToast();
  // console.log(data)
  const onEditHandler = (user) => {
    setUser(user);
    onOpen();
  };

  useEffect(() => {
    if (isSuccess) {
      toast(toastSuccess("User activated successfully"));
      onClose();
    }
  }, [isSuccess, toast, onClose]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <EmployeeCard
          isSubmitting={isLoading}
          onClose={onClose}
          user={user}
          onSubmit={mutate}
          isError={isError}
          error={error}
        />
      </Modal>
      <div
        className={`${classes.approvals_table_wrapper} ${styles.table__wrapper}`}
      >
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
            {data &&
              data.map((item) => {
                return (
                  <Tr key={item.id}>
                    <Td>{item.full_name}</Td>
                    <Td className={styles.data__primary_text_email}>
                      {item.email}
                    </Td>
                    <Td style={{ textTransform: "uppercase" }}>
                      {item.designation}
                    </Td>
                    <Td>{item.project?.name}</Td>
                    <Td>{formatDate(item.createdAt)}</Td>
                    <Td className={classes.table_actions_wrapper}>
                      <div className={classes.table_actions_icon_wrapper}>
                        <IconButton
                          size="xs"
                          aria-label="Edit Item"
                          icon={<MdEdit />}
                          onClick={() => onEditHandler(item)}
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
