import React from "react";
import { Table, Thead, Tbody, Tr, Td } from "@chakra-ui/react";
import classes from "../../CommonTable/Table.module.css";
import { TableHeadColumn } from "../../../Membership/Allocations/AllocationsTable/AllocationsTable";
import { useComplaints } from '../../../../hooks/useComplaint'




const Complaints = [
  {
    name: "Nalubega Christine",
    id: "#C01234",
    date: "26/04/2020",
    time: "12:42 AM",
    subject: "AC in the Board room.",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim enim ad minim adj ....",
    status: true,
    date_recieved: "15/APR/2020",
  },
  {
    name: "Kimera Moxhus",
    id: "#C01236",
    date: "26/04/2020",
    time: "12:43 AM",
    subject: "AC in the Board room !!",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim enim ad minim adj ....",
    status: false,
    date_recieved: "15/APR/2020",
  },
];

const ComplaintsTable = ({ data }) => {

  const complaints = useComplaints()
  console.log('useComplaints is', complaints.data)

  return (
    <>
      <div className={classes.table_wrapper}>
        <Table
          variant="striped"
          colorScheme="gray"
          size="sm"
          className={classes.data_table}
        >
          <Thead className={classes.table_header}>
            <Tr>
              <TableHeadColumn title="Name" secondaryText="Complaint Id" />
              <TableHeadColumn title="Date" secondaryText="Time" />
              <TableHeadColumn title="Subject" secondaryText="body" />
              <TableHeadColumn title="Status" secondaryText="Date Recieved" />
            </Tr>
          </Thead>
          <Tbody>
            {data &&
              data.map((item) => {
                return (
                  <Tr key={item.id}>
                    <Td className={classes.data_field}>
                      <div
                        className={`${classes.data__primary_text} ${classes.single_line}`}
                      >
                        {item.name}
                      </div>
                      <div className={classes.data__secondary_text}>
                        {item.id}
                      </div>
                    </Td>
                    <Td className={classes.data_field}>
                      <div
                        className={`${classes.data__primary_text} ${classes.single_line}`}
                      >
                        {item.dueDate}
                      </div>
                      <div className={classes.data__secondary_text}>
                        {item.time}
                      </div>
                    </Td>
                    <Td className={classes.data_field}>
                      <div className={classes.data__primary_text}>
                        {item.subject}
                      </div>
                      <div className={classes.data__secondary_text}>
                        {item.body}
                      </div>
                    </Td>
                    <Td className={classes.data_field}>
                      <div className={classes.data__primary_text}>
                        <div
                          className={`${classes.allocation_status_wrapper} ${item.status ? classes.paid : classes.fail
                            }`}
                        >
                          <span className={classes.status_indicator}></span>
                          <h5>{item.status ? "Read" : "Unread"}</h5>
                        </div>
                      </div>
                      <div className={classes.data__secondary_text}>
                        {item.date_recieved}
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

export default ComplaintsTable;
