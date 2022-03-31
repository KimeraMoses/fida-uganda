import React from "react";
import { Table, Thead, Tbody, Tr, Td } from "@chakra-ui/react";
import classes from "./Table.module.css";
import { TableHeadColumn } from "../../../Membership/Allocations/AllocationsTable/AllocationsTable";
import { caseFilesColumns } from "../../../../assets/tableColumns/cases";

export const FileData = [
  {
    fileNo: "FU/Kla/M/0001/2022 ",
    date_Created: "01/01/2018",
    village: "KISAASI - NAKAWA",
    district: "KAMPALA",
    nationality: "Ugandan",
    nin: "CME90122167DME",
    type: "Legal",
    caseNo: "0002933",
    gender: "Female",
    name:"Cynthia Nakimera",
    numBeneficiaries: 543,
    occupation: "Dentist",
    nature: "Family",
    action: "Police Report",
    nextVisit: "01/01/2018",
    officer: "Missaga Clive",
    referedBy: "Conrad",
    reason: "Nothing",
    feedback: "Nothing",
    closingDate: "01/01/2018",
    number: "08474638382",
    disabilty: "none",
    fida: "friend",
    age: 23
  },
  {
    fileNo: "FU/Kla/M/0001/2022 ",
    date_Created: "01/01/2018",
    village: "KISAASI - NAKAWA",
    district: "KAMPALA",
    nationality: "Ugandan",
    nin: "CME90122167DME",
    type: "Legal",
    caseNo: "0002933",
    gender: "Female",
    name:"Cynthia Nakimera",
    numBeneficiaries: 543,
    occupation: "Dentist",
    nature: "Family",
    action: "Police Report",
    nextVisit: "01/01/2018",
    officer: "Missaga Clive",
    referedBy: "Conrad",
    reason: "Nothing",
    feedback: "Nothing",
    closingDate: "01/01/2018",
    number: "08474638382",
    disabilty: "none",
    fida: "friend",
    age: 76
  },
  {
    fileNo: "FU/Kla/M/0001/2022 ",
    date_Created: "01/01/2018",
    village: "KISAASI - NAKAWA",
    district: "KAMPALA",
    nationality: "Ugandan",
    nin: "CME90122167DME",
    type: "Legal",
    caseNo: "0002933",
    gender: "Female",
    name:"Cynthia Nakimera",
    numBeneficiaries: 543,
    occupation: "Dentist",
    nature: "Family",
    action: "Police Report",
    nextVisit: "01/01/2018",
    officer: "Missaga Clive",
    referedBy: "Conrad",
    reason: "Nothing",
    feedback: "Nothing",
    closingDate: "01/01/2018",
    number: "08474638382",
    disabilty: "none",
    fida: "friend",
    age: 76
  },
  {
    fileNo: "FU/Kla/M/0001/2022 ",
    date_Created: "01/01/2018",
    village: "KISAASI - NAKAWA",
    district: "KAMPALA",
    nationality: "Ugandan",
    nin: "CME90122167DME",
    type: "Legal",
    caseNo: "0002933",
    gender: "Female",
    name:"Cynthia Nakimera",
    numBeneficiaries: 543,
    occupation: "Dentist",
    nature: "Family",
    action: "Police Report",
    nextVisit: "01/01/2018",
    officer: "Missaga Clive",
    referedBy: "Conrad",
    reason: "Nothing",
    feedback: "Nothing",
    closingDate: "01/01/2018",
    number: "08474638382",
    disabilty: "none",
    fida: "friend",
    age: 76
  },
  {
    fileNo: "FU/Kla/M/0001/2022 ",
    date_Created: "01/01/2018",
    village: "KISAASI - NAKAWA",
    district: "KAMPALA",
    nationality: "Ugandan",
    nin: "CME90122167DME",
    type: "Legal",
    caseNo: "0002933",
    gender: "Female",
    name:"Cynthia Nakimera",
    numBeneficiaries: 543,
    occupation: "Dentist",
    nature: "Family",
    action: "Police Report",
    nextVisit: "01/01/2018",
    officer: "Missaga Clive",
    referedBy: "Conrad",
    reason: "Nothing",
    feedback: "Nothing",
    closingDate: "01/01/2018",
    number: "08474638382",
    disabilty: "none",
    fida: "friend",
    age: 76
  },
  {
    fileNo: "FU/Kla/M/0001/2022 ",
    date_Created: "01/01/2018",
    village: "KISAASI - NAKAWA",
    district: "KAMPALA",
    nationality: "Ugandan",
    nin: "CME90122167DME",
    type: "Legal",
    caseNo: "0002933",
    gender: "Female",
    name:"Cynthia Nakimera",
    numBeneficiaries: 543,
    occupation: "Dentist",
    nature: "Family",
    action: "Police Report",
    nextVisit: "01/01/2018",
    officer: "Missaga Clive",
    referedBy: "Conrad",
    reason: "Nothing",
    feedback: "Nothing",
    closingDate: "01/01/2018",
    number: "08474638382",
    disabilty: "none",
    fida: "friend",
    age: 76
  },
  {
    fileNo: "FU/Kla/M/0001/2022 ",
    date_Created: "01/01/2018",
    village: "KISAASI - NAKAWA",
    district: "KAMPALA",
    nationality: "Ugandan",
    nin: "CME90122167DME",
    type: "Legal",
    caseNo: "0002933",
    gender: "Female",
    name:"Cynthia Nakimera",
    numBeneficiaries: 543,
    occupation: "Dentist",
    nature: "Family",
    action: "Police Report",
    nextVisit: "01/01/2018",
    officer: "Missaga Clive",
    referedBy: "Conrad",
    reason: "Nothing",
    feedback: "Nothing",
    closingDate: "01/01/2018",
    number: "08474638382",
    disabilty: "none",
    fida: "friend",
    age: 76
  },
  {
    fileNo: "FU/Kla/M/0001/2022 ",
    date_Created: "01/01/2018",
    village: "KISAASI - NAKAWA",
    district: "KAMPALA",
    nationality: "Ugandan",
    nin: "CME90122167DME",
    type: "Legal",
    caseNo: "0002933",
    gender: "Female",
    name:"Cynthia Nakimera",
    numBeneficiaries: 543,
    occupation: "Dentist",
    nature: "Family",
    action: "Police Report",
    nextVisit: "01/01/2018",
    officer: "Missaga Clive",
    referedBy: "Conrad",
    reason: "Nothing",
    feedback: "Nothing",
    closingDate: "01/01/2018",
    number: "08474638382",
    disabilty: "none",
    fida: "friend",
    age: 76
  },
  {
    fileNo: "FU/Kla/M/0001/2022 ",
    date_Created: "01/01/2018",
    village: "KISAASI - NAKAWA",
    district: "KAMPALA",
    nationality: "Ugandan",
    nin: "CME90122167DME",
    type: "Legal",
    caseNo: "0002933",
    gender: "Female",
    name:"Cynthia Nakimera",
    numBeneficiaries: 543,
    occupation: "Dentist",
    nature: "Family",
    action: "Police Report",
    nextVisit: "01/01/2018",
    officer: "Missaga Clive",
    referedBy: "Conrad",
    reason: "Nothing",
    feedback: "Nothing",
    closingDate: "01/01/2018",
    number: "08474638382",
    disabilty: "none",
    fida: "friend",
    age: 76
  }
];

const CaseFilesTable = () => {
  return (
    <>
      <div className={classes.approvals_table_wrapper} style={{overflowX: 'auto'}}>
        <Table
          variant="striped"
          size="sm"
          colorScheme="gray"
          className={classes.approval_table}
        >
          <Thead className={classes.table_header}>
            <Tr>
              {caseFilesColumns.map((column) => {
                return (
                  <TableHeadColumn
                    title={column.Headers}
                    key={column.accessor}
                  />
                );
              })}
              
            </Tr>
          </Thead>
          <Tbody>
            {FileData.map((item) => {
              return (
                <Tr key={item.age}>
                  <Td className={classes.primary_text_icon}>
                    {item.fileNo}
                  </Td>
                  <Td className={classes.data__purpose_primary_text}>
                    {item.date_Created}
                  </Td>
                  <Td>{item.village}</Td>
                  <Td>{item.district}</Td>
                  <Td>{item.nationality}</Td>
                  <Td>{item.nin}</Td>
                  <Td>{item.type}</Td>
                  <Td>{item.date_Created}</Td>
                  <Td>{item.caseNo}</Td>
                  <Td>{item.gender}</Td>
                  <Td>{item.name}</Td>
                  <Td>{item.age}</Td>
                  <Td>{item.numBeneficiaries}</Td>
                  <Td>{item.occupation}</Td>
                  <Td>{item.nature}</Td>
                  <Td>{item.action}</Td>
                  <Td>{item.nextVisit}</Td>
                  <Td>{item.officer}</Td>
                  <Td>{item.referedBy}</Td>
                  <Td>{item.reason}</Td>
                  <Td>{item.feedback}</Td>
                  <Td>{item.date_Created}</Td>
                  <Td>{item.number}</Td>
                  <Td>{item.disabilty}</Td>
                  <Td>{item.name}</Td>
                  <Td>{item.number}</Td>
                  <Td>{item.fida}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </div>
    </>
  );
};

export default CaseFilesTable;
