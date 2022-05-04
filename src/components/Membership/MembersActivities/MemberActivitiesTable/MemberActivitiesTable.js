import React from "react";
import { Table, Thead, Tbody, Tr, Td } from "@chakra-ui/react";
import classes from "./MemberActivitiesTable.module.css";
import { TableHeadColumn } from "../../Allocations/AllocationsTable/AllocationsTable";

const MemberActivitiesTable = ({ data, isLoading }) => {
  return (
    <div className={classes.activities_table_wrapper}>
      <Table variant="simple" size="sm">
        <Thead className={classes.table_header}>
          <Tr>
            <TableHeadColumn title="Name" secondaryText="Membership No." />
            <TableHeadColumn title="Project" secondaryText="Project Activity" />
            <TableHeadColumn
              title="Date of Activity"
              secondaryText="Activity Description Summary"
            />
          </Tr>
        </Thead>
        <Tbody>
          {!isLoading &&
            data &&
            data.length &&
            data.map((item) => {
              return (
                <Tr>
                  <Td>
                    <div className={classes.data__primary_text}>
                      {item.name}
                    </div>
                    <div className={classes.data__secondary_text}>
                      {item.member}
                    </div>
                  </Td>
                  <Td>
                    <div className={`${classes.data__primary_text}`}>
                      {item.project.name}
                    </div>
                    <div className={classes.data__secondary_text}>
                      {item.projectActivity}
                    </div>
                  </Td>
                  <Td>
                    <div className={classes.data__primary_text}>
                      {item.date_of_activity}
                    </div>
                    <div className={classes.data__secondary_text}>
                      {item.activityDescription}
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

export default MemberActivitiesTable;
