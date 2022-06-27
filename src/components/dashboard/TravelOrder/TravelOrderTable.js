import React from "react";
import { Table, Thead, Tbody, Tr, Td, IconButton } from "@chakra-ui/react";
import classes from "../../common/table/TableStyles.module.css";
import { TableHeadColumn } from "../../HumanResource/Approvals/ApprovalTable/ApprovedTable";
import { formatDate } from "../../../lib/data";
import { useNavigate } from "react-router-dom";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const TravelOrderTable = ({ data }) => {
  console.log(data);
  const navigate = useNavigate();
  const handleViewSummary = (id) => {
    navigate(`/travel-order/${id}`);
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
              <TableHeadColumn title="Project Activity" />
              <TableHeadColumn title="Stage" />
              <TableHeadColumn title="Status" />
              <TableHeadColumn title="Date of Application" />
              <TableHeadColumn title="Actions" />
            </Tr>
          </Thead>
          <Tbody>
            {data &&
              data.map((item) => {
                return (
                  <Tr>
                    <Td>{item.createdBy.full_name}</Td>
                    <Td>{item.project_activity}</Td>
                    <Td>{item.purpose}</Td>
                    <Td>{item.DOPApprovalStatus}</Td>
                    <Td>{item.DOPApprovalStatus}</Td>
                    <Td>{formatDate(item.updateAt)}</Td>
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

export default TravelOrderTable;
