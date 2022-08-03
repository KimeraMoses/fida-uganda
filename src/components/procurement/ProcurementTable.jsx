import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import classes from "./table.module.css";
import sortByDate from "../../lib/sortByDate";
import withTable from "../../hoc/withTable";

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

const ProcurementTable = ({ data, isLoading }) => {
  return (
    <div className={classes.table_wrapper}>
      <Table variant="simple">
        <Thead className={classes.table_header}>
          <Tr>
            <TableHeadColumn title="Item" />
            <TableHeadColumn title="person in possession" />
            <TableHeadColumn title="location" />
            <TableHeadColumn title="Acquisition Date" />
          </Tr>
        </Thead>
        <Tbody>
          {!isLoading &&
            data &&
            data.length &&
            sortByDate(data).map((item, index) => {
              return (
                <Tr key={item.id}>
                  <Td className={classes.data_recepient_field}>
                    <div className={classes.data__primary_text}></div>
                    <div className={classes.data__secondary_text}>
                      {item.id}
                    </div>
                  </Td>
                  <Td>
                    <div className={classes.data__primary_text}>
                      {new Date(item.createdAt).toLocaleDateString()}
                    </div>
                    <div className={classes.data__secondary_text}>
                      {new Date(item.createdAt).toLocaleTimeString(undefined, {
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      })}
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
                      <h5>{item.status}</h5>
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

export default withTable(ProcurementTable);
