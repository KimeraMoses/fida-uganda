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
import NewCaseFile from "../NewCaseFile/NewCaseFile";
import { useDispatch } from "react-redux";
import { selectCaseFile } from "../../../../store/caseFileReducer";
import withTable from "../../../../hoc/withTable";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const CaseFilesTable = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const onHandleClick = (caseFile) => {
    const newCaseFile = {
      ...caseFile,
      duration: parseInt(caseFile.duration)
    }
    dispatch(selectCaseFile(newCaseFile));
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
                  <Td>{item.complainant?.name}</Td>
                  <Td>{item.complainant?.village}</Td>
                  {/* <Td>{item.district}</Td> */}
                  <Td>{item.complainant?.country}</Td>
                  <Td>{item.complainant?.nin}</Td>
                  <Td>{item.file_opened}</Td>
                  <Td>{formatDate(item.createdAt)}</Td>
                  <Td>{item.case_id}</Td>
                  <Td>{item.complainant?.sex}</Td>
                  <Td>{item.complainant?.age}</Td>
                  <Td>{item.complainant?.num_beneficiaries}</Td>
                  <Td>{item.complainant?.occupation}</Td>
                  <Td>{item.nature}</Td>
                  <Td>{item.action_taken}</Td>
                  <Td>{item.next_visit}</Td>
                  <Td>{item.legal_officer}</Td>
                  <Td>{item.referred_to}</Td>
                  <Td>{item.reason_for_referral}</Td>
                  <Td>{item.follow_up_feedback}</Td>
                  <Td>{formatDate(item.createdAt)}</Td>
                  <Td>{item.respondent_contact}</Td>
                  <Td>{item.complainant?.disability}</Td>
                  <Td>{item.respondentName}</Td>
                  <Td>{item.contact}</Td>
                  <Td>{item.fida}</Td>
                  <Td>{formatDate(item.createdAt)}</Td>
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
      <>
        <Modal isOpen={isOpen} onClose={onClose} title="Case Files" size="4xl">
          <NewCaseFile isClvCaseFile={false} onClose={onClose} />
        </Modal>
      </>
    </>
  );
};

export default withTable(CaseFilesTable);
