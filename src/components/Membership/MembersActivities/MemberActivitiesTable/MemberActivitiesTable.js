import React from "react";
import { Table, Thead, Tbody, Tr, Td } from "@chakra-ui/react";
import classes from "./MemberActivitiesTable.module.css";
import { TableHeadColumn } from "../../Allocations/AllocationsTable/AllocationsTable";
import withTable from "./../../../../hoc/withTable";

export const MembersData = [
  {
    sn: "001",
    name: "Mutumba Joshep",
    memberNo: "FU/LE/20/064",
    project: "SGBV, Kamuli IDLO",
    projecctActivity: "Training in Management of SGBV cases ",
    date: "02/02/2022",
    activitySummary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim enim ad minim adj ....",
  },
  {
    sn: "002",
    name: "Mutumba Joshep",
    memberNo: "FU/LE/20/064",
    project: "SGBV, Kamuli IDLO",
    projecctActivity: "Training in Management of SGBV cases ",
    date: "02/02/2022",
    activitySummary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim enim ad minim adj ....",
  },
  {
    sn: "003",
    name: "Mutumba Joshep",
    memberNo: "FU/LE/20/064",
    project: "SGBV, Kamuli IDLO",
    projecctActivity: "Training in Management of SGBV cases ",
    date: "02/02/2022",
    activitySummary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim enim ad minim adj ....",
  },
  {
    sn: "004",
    name: "Mutumba Joshep",
    memberNo: "FU/LE/20/064",
    project: "SGBV, Kamuli IDLO",
    projecctActivity: "Training in Management of SGBV cases ",
    date: "02/02/2022",
    activitySummary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim enim ad minim adj ....",
  },
  {
    sn: "005",
    name: "Mutumba Joshep",
    memberNo: "FU/LE/20/064",
    project: "SGBV, Kamuli IDLO",
    projecctActivity: "Training in Management of SGBV cases ",
    date: "02/02/2022",
    activitySummary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim enim ad minim adj ....",
  },
  {
    sn: "006",
    name: "Kimera Moses",
    memberNo: "FU/LE/20/064",
    project: "SGBV, Kamuli IDLO",
    projecctActivity: "Training in Management of SGBV cases ",
    date: "02/02/2022",
    activitySummary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim enim ad minim adj ....",
  },
];

const MemberActivitiesTable = ({ data }) => {
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
          {data.map((item) => {
            return (
              <Tr>
                <Td className={classes.data_recepient_field}>
                  <div className={classes.data__primary_text}>{item.sn}</div>
                </Td>
                <Td>
                  <div className={classes.data__primary_text}>{item.name}</div>
                  <div className={classes.data__secondary_text}>
                    {item.memberNo}
                  </div>
                </Td>
                <Td>
                  <div className={`${classes.data__primary_text}`}>
                    {item.project}
                  </div>
                  <div className={classes.data__secondary_text}>
                    {item.projecctActivity}
                  </div>
                </Td>
                <Td>
                  <div className={classes.data__primary_text}>{item.date}</div>
                  <div className={classes.data__secondary_text}>
                    {item.activitySummary}
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
