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
import classes from "../../Allocations/AllocationsTable/AllocationsTable.module.css";
import { TableHeadColumn } from "../../Allocations/AllocationsTable/AllocationsTable";
import withTable from "../../../../hoc/withTable";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import NewMembersForm from "./../NewMemberForm/NewMembersForm";
import Modal from "../../../common/Modal";

const MemberTable = ({ data, isLoading }) => {
  const [id, setId] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userEditHandler = (userId) => {
    setId(userId);
    onOpen();
  };
  return (
    <div className={classes.allocations_table_wrapper}>
      <Table variant="simple">
        <Thead className={classes.table_header}>
          <Tr>
            <TableHeadColumn title="Name" secondaryText="Membership No." />
            <TableHeadColumn title="Phone Number" secondaryText="Email" />
            <TableHeadColumn
              title="Membershp Duration"
              secondaryText="Membership fee status"
            />
            <TableHeadColumn title="Actions" />
          </Tr>
        </Thead>
        <Tbody>
          {!isLoading &&
            data.length &&
            data.map((item, index) => {
              return (
                <Tr>
                  <Td className={classes.data_recepient_field}>
                    <div className={classes.data__primary_text}>
                      {item.first_name + " " + item.last_name}
                    </div>
                    <div className={classes.data__secondary_text}>
                      00{index + 1}
                    </div>
                  </Td>
                  <Td>
                    <div className={classes.data__primary_text}>
                      {item.phoneNumber}
                    </div>
                    <div className={classes.data__secondary_text}>
                      {item.email}
                    </div>
                  </Td>
                  <Td>
                    <div className={`${classes.data__primary_text}`}>
                      {item.membership_duration}
                    </div>
                    <div
                      className={`${classes.allocation_status_wrapper} ${
                        item.hasPaid ? classes.success : classes.fail
                      } ${classes.members_status}`}
                    >
                      <span className={classes.status_indicator}></span>
                      <h5>{item.hasPaid ? "Paid" : "Pending"}</h5>
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
        title="Membership Form"
        size="3xl"
      >
        {id}
        <NewMembersForm onClose={onClose} />
      </Modal>
    </div>
  );
};

export default withTable(MemberTable);
