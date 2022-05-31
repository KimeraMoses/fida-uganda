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
import { upperCaseFirstLetter } from "../../../../lib/data";
// import { useUpdatePatient } from "../../../../hooks/usePatients";
import { onSubmitAlert } from "../../../../lib/deleteInProd";
import withTable from "../../../../hoc/withTable";

const ClientFilesTable = ({ data }) => {
  const [selectedRow, setSelectedRow] = React.useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleRowClick = (data) => {
    setSelectedRow(data);
    onOpen();
  };
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
              <TableHeadColumn title="Mode of communication" />
              <TableHeadColumn title="Patient's Name" />
              <TableHeadColumn title="Sex" />
              <TableHeadColumn title="Age" />
              <TableHeadColumn title="Actions" />
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => {
              return (
                <Tr key={item?.id}>
                  <Td className={classes.primary_text_icon}>{item.sn}</Td>
                  <Td className={classes.data__purpose_primary_text}>
                    {item.session_date}
                  </Td>
                  <Td>{item.month}</Td>
                  <Td>{upperCaseFirstLetter(item.patient_role)}</Td>
                  <Td>{item.mode_of_communication}</Td>
                  <Td>{`${item.first_name} ${item.last_name}`}</Td>
                  <Td>{item.sex}</Td>
                  <Td>{item.age}</Td>
                  <Td style={{ textAlign: "center" }}>
                    <div className={classes.table_actions_icon_wrapper}>
                      <IconButton
                        variant="outline"
                        size="xs"
                        aria-label="Edit Item"
                        icon={<MdEdit />}
                        onClick={() => handleRowClick(item)}
                      />
                    </div>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
        <Modal isOpen={isOpen} onClose={onClose}>
          <NewClientForm
            initialValues={selectedRow}
            isEdit={true}
            onSuccess={onClose}
            success={"Updated client successfully"}
            useMutate={onSubmitAlert}
            onClose={onClose}
            id={selectedRow?.id}
          />
        </Modal>
      </div>
    </>
  );
};

export default withTable(ClientFilesTable);
