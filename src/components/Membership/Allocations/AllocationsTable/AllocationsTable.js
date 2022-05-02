import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import classes from "./AllocationsTable.module.css";

const allocations = [
  {
    recepient: "All Paid Up Members",
    alloc_number: "1234",
    date: "26/04/2020",
    time: "12: 42 AM",
    subject: "LEGAL OFFICERS FOR THE IDLO PROJECT ZOMBO",
    body: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim enim ad minim adj",
    status: true,
  },
  {
    recepient: "All Paid Up Members",
    alloc_number: "1234",
    date: "26/04/2020",
    time: "12: 42 AM",
    subject: "LEGAL OFFICERS FOR THE IDLO PROJECT ZOMBO",
    body: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim enim ad minim adj",
    status: false,
  },
  {
    recepient: "All Paid Up Members",
    alloc_number: "1234",
    date: "26/04/2020",
    time: "12: 42 AM",
    subject: "LEGAL OFFICERS FOR THE IDLO PROJECT ZOMBO",
    body: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim enim ad minim adj",
    status: true,
  },
  {
    recepient: "All Paid Up Members",
    alloc_number: "1234",
    date: "26/04/2020",
    time: "12: 42 AM",
    subject: "LEGAL OFFICERS FOR THE IDLO PROJECT ZOMBO",
    body: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim enim ad minim adj",
    status: true,
  },
];

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

const AllocationsTable = ({ allocations, isLoading }) => {
  return (
    <div className={classes.allocations_table_wrapper}>
      <Table variant="simple">
        <Thead className={classes.table_header}>
          <Tr>
            <TableHeadColumn
              title="Recepient (s)"
              secondaryText="Recepients(s)"
            />
            <TableHeadColumn title="Date" secondaryText="time" />
            <TableHeadColumn title="Subject" secondaryText="body" />
            {/* <TableHeadColumn title="Status" /> */}
          </Tr>
        </Thead>
        <Tbody>
          {!isLoading &&
            allocations &&
            allocations.Allocations &&
            allocations.Allocations.map((item) => {
              return (
                <Tr>
                  <Td className={classes.data_recepient_field}>
                    <div className={classes.data__primary_text}>
                      {item.allocated_to
                        .map((person) => person.label)
                        .filter((name) => name)}
                    </div>
                    {/* <div className={classes.data__secondary_text}>
                      {item.alloc_number}
                    </div> */}
                  </Td>
                  <Td>
                    <div className={classes.data__primary_text}>
                      {new Date(item.createdAt).toLocaleDateString()}
                    </div>
                    <div className={classes.data__secondary_text}>
                      {item.time}
                    </div>
                  </Td>
                  <Td>
                    <div
                      className={`${classes.data__primary_text} ${classes.subject__title}`}
                    >
                      {item.subject}
                    </div>
                    <div className={classes.data__secondary_text}>
                      <p>{item.body}</p>
                    </div>
                  </Td>
                  {/* <Td>
                    <div
                      className={`${classes.allocation_status_wrapper} ${
                        item.status ? classes.success : classes.fail
                      }`}
                    >
                      <span className={classes.status_indicator}></span>
                      <h5>{item.status ? "Sent" : "Not Sent"}</h5>
                    </div>
                  </Td> */}
                </Tr>
              );
            })}
        </Tbody>
      </Table>
    </div>
  );
};

export default AllocationsTable;
