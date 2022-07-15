import React from "react";
import { Table, Thead, Tbody, Tr, Td, IconButton } from "@chakra-ui/react";
import { formatDate } from "../../../lib/data";
import sortByDate from "../../../lib/sortByDate";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { TableHeadColumn } from "../../HumanResource/Approvals/ApprovalTable/ApprovedTable";
import { useNavigate } from "react-router-dom";

import classes from "../../common/table/TableStyles.module.css";

const RequisitionTable = ({ data, type }) => {
  
  const navigate = useNavigate();
  const handleViewSummary = (id) => {
    navigate(`/requisitions/${id}?status=${type}`);
  };

  return (
    <>
      <div className={classes.table_wrapper}>
        <Table
          size="sm"
          variant="striped"
          colorScheme="gray"
          className={classes.table}
        >
          <Thead className={classes.table_header}>
            <Tr>
              <TableHeadColumn title="Applicant's Name" />
              <TableHeadColumn title="Project" />
              <TableHeadColumn title="Delivery Location" />
              <TableHeadColumn title="Status" />
              <TableHeadColumn title="Date of Application" />
              <TableHeadColumn title="Actions" />
            </Tr>
          </Thead>
          <Tbody>
            {data &&
              sortByDate(data).map((item) => {
                return (
                  <Tr>
                    <Td>{item?.registeredBy && item.registeredBy.full_name}</Td>
                    <Td>{item?.project_name}</Td>
                    <Td>{item?.delivery_location}</Td>
                    <Td>{item?.status}</Td>
                    <Td>{formatDate(item?.updateAt)}</Td>
                    <Td>
                      <div className={classes.table_actions_icon_wrapper}>
                        <IconButton
                          size="xs"
                          aria-label="View Item"
                          icon={<MdOutlineRemoveRedEye />}
                          onClick={() => handleViewSummary(item.id)}
                        />
                      </div>
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </div>
    </>
  );
};

export default RequisitionTable;
