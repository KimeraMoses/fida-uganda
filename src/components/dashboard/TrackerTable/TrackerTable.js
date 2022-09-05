import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, IconButton } from "@chakra-ui/react";
import classes from "./Table.module.css";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import sortByDate from "../../../lib/sortByDate";

const TableHeadColumn = (props) => {
  const { title } = props;
  return <Th>{title}</Th>;
};

const TrackerTable = ({ type, action, data, isLoading }) => {
  // console.log(data);
  return (
    <>
      <div className={classes.table_container}>
        <Table size="sm" variant="striped" className={classes.table__wrapper}>
          <Thead className={classes.table_header}>
            <Tr>
              <TableHeadColumn
                title={`${
                  type === "leave" ? "Leave" : "Advanced"
                } request Details`}
              />
              <TableHeadColumn title="Date of application" />
              <TableHeadColumn title="Status" />
              <TableHeadColumn title="Action" />
            </Tr>
          </Thead>
          <Tbody>
            {!isLoading &&
              data &&
              sortByDate(data).map((item) => {
                return (
                  <Tr>
                    <Td
                      className={classes.name_column}
                    >{`${item.amount} requested in ${item.month}`}</Td>
                    <Td className={classes.data__purpose_primary_text}>
                      {new Date(item.createdAt).toLocaleString()}
                    </Td>
                    <Td
                      className={`${
                        item.status === "Pending"
                          ? classes.pending_approval
                          : item.status === "approved"
                          ? classes.approved
                          : classes.canceled
                      }`}
                    >
                      {item.status}
                    </Td>

                    <Td>
                      <IconButton
                        size="xs"
                        aria-label="Add Item"
                        icon={<MdOutlineRemoveRedEye />}
                        onClick={() => action(item, type, item.id)}
                      />
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

export default TrackerTable;
