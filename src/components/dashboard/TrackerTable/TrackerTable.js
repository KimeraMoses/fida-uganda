import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, IconButton } from "@chakra-ui/react";
import classes from "./Table.module.css";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const TableHeadColumn = (props) => {
  const { title } = props;
  return <Th>{title}</Th>;
};

const TrackerTable = (props) => {
  const { type, action, data } = props;

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
            {data.map((item) => {
              return (
                <Tr>
                  <Td className={classes.name_column}>{item.details}</Td>
                  <Td className={classes.data__purpose_primary_text}>
                    {item.date}
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
                      onClick={() => action(item, type)}
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