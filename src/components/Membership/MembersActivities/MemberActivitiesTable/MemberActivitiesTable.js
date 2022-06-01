import React from "react";
import { Table, Thead, Tbody, Tr, Td } from "@chakra-ui/react";
import classes from "./MemberActivitiesTable.module.css";
import { TableHeadColumn } from "../../Allocations/AllocationsTable/AllocationsTable";
import withTable from "./../../../../hoc/withTable";

const MemberActivitiesTable = ({ data, isLoading }) => {
  return (
    <div className={classes.activities_table_wrapper}>
      <Table variant="simple" size="sm">
        <Thead className={classes.table_header}>
          <Tr>
            <TableHeadColumn title="S/N" />
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
            data.map((item, index) => {
              return (
                <Tr>
                  <Td>000{index + 1}</Td>
                  <Td>
                    <div className={classes.data__primary_text}>
                      {item.member &&
                        Array.isArray(item.member) &&
                        item.member.map((memberData) => {
                          if (index + 1 === item.member.length) {
                            return `${memberData?.first_name} ${memberData?.last_name}`;
                          } else {
                            return `${memberData?.first_name} ${memberData?.last_name}, `;
                          }
                        })}
                    </div>
                    <div className={classes.data__secondary_text}>
                      {item.member?.id}
                    </div>
                  </Td>
                  <Td>
                    <div className={`${classes.data__primary_text}`}>
                      {item?.project?.name}
                    </div>
                    <div className={classes.data__secondary_text}>
                      {item?.projectActivity}
                    </div>
                  </Td>
                  <Td>
                    <div className={classes.data__primary_text}>
                      {new Date(item?.date_of_activity).toLocaleDateString()}
                    </div>
                    <div className={classes.data__secondary_text}>
                      {item?.activityDescription}
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

export default withTable(MemberActivitiesTable);
