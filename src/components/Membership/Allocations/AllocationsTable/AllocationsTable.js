import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import classes from "./AllocationsTable.module.css";
import sortByDate from "../../../../lib/sortByDate";
import withTable from "./../../../../hoc/withTable";

export const TableHeadColumn = (props) => {
  const { title, secondaryText } = props;
  return (
    <Th>
      {title}
      {secondaryText && (
        <div className={classes.title_secondary_text}>{secondaryText}</div>
      )}
    </Th>
  );
};

const AllocationsTable = ({ data, isLoading }) => {
  return (
    <div className={classes.allocations_table_wrapper}>
      <Table variant="simple">
        <Thead className={classes.table_header}>
          <Tr>
            <TableHeadColumn
              title="Recepient (s)"
              secondaryText="Allocations No."
            />
            <TableHeadColumn title="Date" secondaryText="time" />
            <TableHeadColumn title="Subject" secondaryText="body" />
            <TableHeadColumn title="Status" />
          </Tr>
        </Thead>
        <Tbody>
          {!isLoading &&
            data &&
            sortByDate(data).map((item, index) => {
              return (
                <Tr key={item.id}>
                  <Td className={classes.data_recepient_field}>
                    <div className={classes.data__primary_text}>
                      {item.allocated_to.map((person, index) => {
                        if (index + 1 === item.allocated_to.length) {
                          return person.label || person;
                        } else {
                          return person.label || person + ", ";
                        }
                      })}
                    </div>
                    <div className={classes.data__secondary_text}>
                      000{index + 1}
                    </div>
                  </Td>
                  <Td>
                    <div className={classes.data__primary_text}>
                      {new Date(item.createdAt).toLocaleDateString()}
                    </div>
                    <div className={classes.data__secondary_text}>
                      {new Date(item.createdAt).toLocaleTimeString()}
                    </div>
                  </Td>
                  <Td>
                    <div
                      className={`${classes.data__primary_text} ${classes.subject__title}`}
                    >
                      {item.subject}
                    </div>
                    <div className={classes.data__secondary_text}>
                      <p>{item.message}</p>
                    </div>
                  </Td>
                  <Td>
                    <div
                      className={`${classes.allocation_status_wrapper} ${
                        item.status ? classes.success : classes.fail
                      }`}
                    >
                      <span className={classes.status_indicator}></span>
                      <h5>{item.status ? "Sent" : "Not Sent"}</h5>
                    </div>
                  </Td>
                </Tr>
              );
            })}
        </Tbody>
      </Table>
    </div>
  );
};

export default withTable(AllocationsTable);
