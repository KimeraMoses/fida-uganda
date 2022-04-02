import React from "react";
import { MdEdit } from "react-icons/md";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import classes from "./Table.module.css";
import { TableHeadColumn } from "../../../Membership/Allocations/AllocationsTable/AllocationsTable";
import Modal from "../../../common/Modal";
import NewClientForm from "../NewClientForm/NewClientForm";

export const ReportsData = [
  {
    sn: "S/N",
    session_date: "20/03/2012",
    month: "march",
    staff_client: "Client",
    mode: "Physical",
    name: "Kimera Moses",
    sex: "M",
    age: "23",
  },
  {
    sn: "S/N",
    session_date: "04/04/2022",
    month: "march",
    staff_client: "Client",
    mode: "Physical",
    name: "Kimera Moses",
    sex: "M",
    age: "23",
  },
  {
    sn: "S/N",
    session_date: "12/05/2018",
    month: "march",
    staff_client: "Client",
    mode: "Physical",
    name: "Kimera Moses",
    sex: "M",
    age: "23",
  },
  {
    sn: "S/N",
    session_date: "14/12/2019",
    month: "march",
    staff_client: "Client",
    mode: "Physical",
    name: "Kimera Moses",
    sex: "M",
    age: "23",
  },
  {
    sn: "S/N",
    session_date: "12/12/2020",
    month: "march",
    staff_client: "Client",
    mode: "Physical",
    name: "Kimera Moses",
    sex: "M",
    age: "23",
  },
];

const ClientFilesTable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div className={classes.files_table_wrapper}>
        <Table
          variant="striped"
          size="sm"
          colorScheme="gray"
          className={classes.file_table}
        >
          <Thead className={classes.table_header}>
            <Tr>
              <TableHeadColumn title="S/N" />
              <TableHeadColumn title="Date of Session" />
              <TableHeadColumn title="Month" />
              <TableHeadColumn title="Staff/Client" />
              <TableHeadColumn title="Physical/Online" />
              <TableHeadColumn title="Patient's Name" />
              <TableHeadColumn title="Sex" />
              <TableHeadColumn title="Age" />
              <TableHeadColumn title="Actions" />
            </Tr>
          </Thead>
          <Tbody>
            {ReportsData.map((item) => {
              return (
                <Tr>
                  <Td className={classes.primary_text_icon}>{item.sn}</Td>
                  <Td className={classes.data__purpose_primary_text}>
                    {item.session_date}
                  </Td>
                  <Td>{item.month}</Td>
                  <Td>{item.staff_client}</Td>
                  <Td>{item.mode}</Td>
                  <Td>{item.name}</Td>
                  <Td>{item.sex}</Td>
                  <Td>{item.age}</Td>
                  <Td style={{ textAlign: "center" }}>
                    <div className={classes.table_actions_icon_wrapper}>
                      <IconButton
                        variant="outline"
                        size="xs"
                        aria-label="Edit Item"
                        icon={<MdEdit />}
                        onClick={onOpen}
                      />
                    </div>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
        <Modal isOpen={isOpen} onClose={onClose}>
          <NewClientForm isEdit={true} />
        </Modal>
      </div>
    </>
  );
};

export default ClientFilesTable;
