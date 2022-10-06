import React from "react";
import {Table, Thead, Tbody, Tr, Td, IconButton} from "@chakra-ui/react";
import classes from "../../common/table/TableStyles.module.css";
import {TableHeadColumn} from "../../HumanResource/Approvals/ApprovalTable/ApprovedTable";
import {formatDate} from "../../../lib/data";
import {useNavigate} from "react-router-dom";
import {MdOutlineRemoveRedEye} from "react-icons/md";
import withTable from "../../../hoc/withTable";

const TravelOrderTable = ({data, type}) => {
    // console.log(data);
    const navigate = useNavigate();
    const handleViewSummary = (id) => {
        navigate(`/travel-order/${id}?status=${type}`);
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
                            <TableHeadColumn title="Applicant's Name"/>
                            <TableHeadColumn title="Project Activity"/>
                            {/*changed project for purpose due to project being an id*/}
                            <TableHeadColumn title="Purpose "/>
                            <TableHeadColumn title="Stage"/>
                            <TableHeadColumn title="Status"/>
                            <TableHeadColumn title="Date of Application"/>
                            <TableHeadColumn title="Actions"/>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data &&
                            data.map((item) => {
                                return (
                                    <Tr>
                                        <Td>{item?.createdBy?.full_name}</Td>
                                        <Td>{item.project_activity}</Td>
                                        <Td>{item.purpose}</Td>
                                        <Td>{
                                            item?.approval_levels.length === 0
                                                ? "Dop"
                                                : item?.approval_levels.length === 1 && item?.DOPApprovalStatus === "rejected"
                                                    ? "Dop"
                                                    : item?.approval_levels.length === 1 && item?.DOPApprovalStatus === "approved"
                                                        ? "Accountant"
                                                        : item?.approval_levels.length === 2 && item?.accountantApprovalStatus === "rejected"
                                                            ? "Accountant"
                                                            : item?.approval_levels.length === 2 && item?.accountantApprovalStatus === "approved"
                                                                ? "Fleet  Manager"
                                                                : "Fleet  Manager"
                                        }</Td>
                                        <Td>{
                                            item?.approval_levels.length === 0
                                                ? item?.DOPApprovalStatus
                                                : item?.approval_levels.length === 1 && item?.DOPApprovalStatus === "rejected"
                                                    ? item?.DOPApprovalStatus
                                                    : item?.approval_levels.length === 1 && item?.DOPApprovalStatus === "approved"
                                                        ? item?.accountantApprovalStatus
                                                        : item?.approval_levels.length === 2 && item?.accountantApprovalStatus === "rejected"
                                                            ? item?.accountantApprovalStatus
                                                            : item?.approval_levels.length === 2 && item?.accountantApprovalStatus === "approved"
                                                                ? item?.fleetManagerApprovalStatus
                                                                : item?.approval_levels.length === 2 && item?.fleetManagerApprovalStatus === "rejected"
                                                                    ? item?.fleetManagerApprovalStatus
                                                                    : item?.fleetManagerApprovalStatus

                                        }</Td>
                                        <Td>{formatDate(item.updateAt)}</Td>
                                        <Td>
                                            <div className={classes.table_actions_icon_wrapper}>
                                                <IconButton
                                                    size="xs"
                                                    aria-label="View Item"
                                                    icon={<MdOutlineRemoveRedEye/>}
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

export default withTable(TravelOrderTable)
