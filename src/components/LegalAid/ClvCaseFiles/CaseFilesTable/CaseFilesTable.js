import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import classes from "./Table.module.css";
import { TableHeadColumn } from "../../../Membership/Allocations/AllocationsTable/AllocationsTable";
import { caseFilesColumns } from "../../../../assets/tableColumns/cases";
import { formatDate } from "../../../../lib/data";
import Modal from "../../../common/Modal";
import NewCaseFile from "../../CaseFIles/NewCaseFile/NewCaseFile";
import { useDispatch } from "react-redux";
import { selectCaseFile } from "../../../../store/caseFileReducer";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import withTable from "../../../../hoc/withTable";

const CaseFilesTable = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const onHandleClick = (caseFile) => {
    dispatch(selectCaseFile(caseFile));
    onOpen();
  };

  return (
    <>
      <div
        className={classes.approvals_table_wrapper}
        style={{ overflowX: "auto" }}
      >
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
            {data.map((item) => {
              return (
                <Tr key={item.id} onClick={() => onHandleClick(item)}>
                  <Td>{item.case_id}</Td>
                  <Td>{formatDate(item.createdAt)}</Td>
                  <Td>{item.complainant?.village}</Td>
                  <Td>{item.district}</Td>
                  <Td>{item.complainant?.country}</Td>
                  <Td>{item.complainant?.nin}</Td>
                  <Td>{item.type}</Td>
                  <Td>{formatDate(item.createdAt)}</Td>
                  <Td>{item.case_id}</Td>
                  <Td>{item.complainant?.sex}</Td>
                  <Td>{item.complainant?.name}</Td>
                  <Td>{item.complainant?.age}</Td>
                  <Td>{item.complainant?.numBeneficiaries}</Td>
                  <Td>{item.complainant?.occupation}</Td>
                  <Td>{item.nature}</Td>
                  <Td>{item.action}</Td>
                  <Td>{item.nextVisit}</Td>
                  <Td>{item.officer}</Td>
                  <Td>{item.referredBy}</Td>
                  <Td>{item.reason}</Td>
                  <Td>{item.feedback}</Td>
                  <Td>{formatDate(item.createdAt)}</Td>
                  <Td>{item.complainant?.phoneNumber}</Td>
                  <Td>{item.complainant?.disability}</Td>
                  <Td>{item.respondentName}</Td>
                  <Td>{item.respondentPhone}</Td>
                  <Td>{item.fida}</Td>
                  <Td style={{ textAlign: "center" }}>
                    <div className={classes.table_actions_icon_wrapper}>
                      <IconButton
                        size="sm"
                        variant="outline"
                        aria-label="Open Item"
                        icon={<MdOutlineRemoveRedEye />}
                        onClick={() => onHandleClick(item)}
                      />
                    </div>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="CLV Case Files"
        size="4xl"
      >
        <NewCaseFile isClvCaseFile={true} onClose={onClose} />
      </Modal>
    </>
  );
};

export default withTable(CaseFilesTable);
