import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, IconButton } from "@chakra-ui/react";
import classes from "./Table.module.css";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import daysDifference from "../../../lib/datediff";
import { getMonthName, getDay } from "../../../lib/date";
import sortByDate from "../../../lib/sortByDate";

const TableHeadColumn = (props) => {
  const { title } = props;
  return <Th>{title}</Th>;
};

// 5 Annual leave days requested from 15 to 20 May

const TrackerTable = ({ type, action, data, isLoading }) => {
  return (
    <>
      <div className={classes.table_container}>
        <Table size="sm" variant="striped" className={classes.table__wrapper}>
          <Thead className={classes.table_header}>
            <Tr>
              <TableHeadColumn title="Leave request Details" />
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
                    <Td className={classes.name_column}>{`${daysDifference(
                      item.from,
                      item.to
                    )} day(s) requested from  ${getDay(
                      item.from
                    )} ${getMonthName(item.from)} to ${getDay(
                      item.to
                    )} ${getMonthName(item.to)} `}</Td>
                    <Td className={classes.data__purpose_primary_text}>
                      {new Date(item.updateAt).toLocaleString()}
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
        {data && data.length < 1 && (
            <div className={classes.no_records_wrapper}>No Leave Requests made!</div>
        )}
      </div>
    </>
  );
};

export default TrackerTable;
