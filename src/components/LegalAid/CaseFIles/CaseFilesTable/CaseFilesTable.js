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
                  <Td>
                    {item.complainant?.name ? item.complainant?.name : "N/A"}
                  </Td>
                  <Td>
                    {item.complainant?.village
                      ? item.complainant?.village
                      : "N/A"}
                  </Td>
                  {/* <Td>{item.district}</Td> */}

                  <Td>
                    {item.complainant?.country
                      ? item.complainant?.country
                      : "N/A"}
                  </Td>
                  <Td>
                    {item.complainant?.NIN ? item.complainant?.NIN : "N/A"}
                  </Td>

                  <Td>{item?.file_opened ? item?.file_opened : "N/A"}</Td>

                  <Td>{formatDate(item.createdAt)}</Td>
                  <Td>{item.case_id}</Td>
                  <Td>
                    {item.complainant?.sex ? item.complainant?.sex : "N/A"}
                  </Td>
                  <Td>
                    {item.complainant?.age ? item.complainant?.age : "N/A"}
                  </Td>
                  <Td>{item.complainant?.beneficiaries?.length}</Td>
                  <Td>
                    {item.complainant?.occupation
                      ? item.complainant?.occupation
                      : "N/A"}
                  </Td>
                  <Td>{item?.nature ? item?.nature : "N/A"}</Td>
                  <Td>{item?.actionsTaken?.length}</Td>
                  <Td>{item?.next_visit ? item?.next_visit : "N/A"}</Td>
                  <Td>{item?.legal_officer ? item?.legal_officer : "N/A"}</Td>
                  <Td>
                    {item?.referred_to?.full_name
                      ? item?.referred_to?.full_name
                      : "N/A"}
                  </Td>
                  <Td>
                    {item?.reason_for_referral
                      ? item?.reason_for_referral
                      : "N/A"}
                  </Td>
                  <Td>
                    {item?.follow_up_feedback
                      ? item?.follow_up_feedback
                      : "N/A"}
                  </Td>
                  <Td>{formatDate(item.updateAt)}</Td>
                  <Td>
                    {item?.respondent_contact
                      ? item?.respondent_contact
                      : "N/A"}
                  </Td>
                  <Td>
                    {item?.complainant?.disability
                      ? item?.complainant?.disability
                      : "N/A"}
                  </Td>
                  <Td>{item?.respondentName}</Td>
                  <Td>
                    {item?.respondentPhone ? item?.respondentPhone : "N/A"}
                  </Td>
                  <Td>{item?.fida ? item?.fida : "N/A"}</Td>
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
