import React from "react";
import { Table, Thead, Tbody, Tr, Td } from "@chakra-ui/react";
import classes from "../../Allocations/AllocationsTable/AllocationsTable.module.css";
import { TableHeadColumn } from "../../Allocations/AllocationsTable/AllocationsTable";

const MembersData = [
  {
    name: "Nalubega Alexis Christine",
    memberNo: "FU/LE/20/064",
    phoneNumber: "0784658626",
    email: "nalubega12@gmail.com",
    address: "Kampala",
    officeNo: "0314 658 626",
    officeEmail: "nalubega12@gmail.com",
    status: true,
  },
  {
    name: "Nalubega Alexis Christine",
    memberNo: "FU/LE/20/064",
    phoneNumber: "0784658626",
    email: "nalubega12@gmail.com",
    address: "Kampala",
    officeNo: "0314 658 626",
    officeEmail: "nalubega12@gmail.com",
    status: true,
  },
  {
    name: "Nalubega Alexis Christine",
    memberNo: "FU/LE/20/064",
    phoneNumber: "0784658626",
    email: "nalubega12@gmail.com",
    address: "Kampala",
    officeNo: "0314 658 626",
    officeEmail: "nalubega12@gmail.com",
    status: false,
  },
  {
    name: "Nalubega Alexis Christine",
    memberNo: "FU/LE/20/064",
    phoneNumber: "0784658626",
    email: "nalubega12@gmail.com",
    address: "Kampala",
    officeNo: "0314 658 626",
    officeEmail: "nalubega12@gmail.com",
    status: true,
  },
];

const MemberTable = ({ data, isLoading }) => {
  console.log(data);
  return (
    <div className={classes.allocations_table_wrapper}>
      <Table variant="simple">
        <Thead className={classes.table_header}>
          <Tr>
            <TableHeadColumn title="Name" secondaryText="Membership No." />
            <TableHeadColumn title="Phone Number" secondaryText="Email" />
            <TableHeadColumn
              title="Address"
              secondaryText="Membership fee status"
            />
            <TableHeadColumn
              title="office Number"
              secondaryText="office email"
            />
          </Tr>
        </Thead>
        <Tbody>
          {!isLoading &&
            data &&
            data.Members &&
            data.Members.length &&
            data.Members.map((item) => {
              return (
                <Tr>
                  <Td className={classes.data_recepient_field}>
                    <div className={classes.data__primary_text}>
                      {item.name}
                    </div>
                    <div className={classes.data__secondary_text}>
                      {item.id}
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
                      {item.address}
                    </div>
                    <div
                      className={`${classes.data__secondary_text} ${
                        classes.members_status
                      } ${item.status ? classes.sucess : classes.fail}`}
                    >
                      <h6>{item.status ? "Paid" : "Pending"}</h6>
                    </div>
                  </Td>
                  <Td>
                    <div className={classes.data__primary_text}>
                      {item.officeNo}
                    </div>
                    <div className={classes.data__secondary_text}>
                      {item.officeEmail}
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

export default MemberTable;
