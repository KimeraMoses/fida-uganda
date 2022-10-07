import React, { useState } from "react";
import { Table, Thead, Tbody, Tr, Td, IconButton } from "@chakra-ui/react";
import classes from "./Table.module.css";
import { TableHeadColumn } from "../../../../Membership/Allocations/AllocationsTable/AllocationsTable";
import { MdOutlineEdit } from "react-icons/md";
import { DeletePopup } from "../../../../common/DeletePopup";

const BenTable = ({ data, removeBeneficiary, handleEdit }) => {
  const [record, setRecord] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    removeBeneficiary(record?.index);

    setIsLoading(false);
  };
  const handleClick = (data) => {
    setRecord(data);
  };

  return (
    <>
      <div className={classes.approvals_table_wrapper}>
        <Table
          variant="striped"
          colorScheme="gray"
          size="sm"
          className={classes.approval_table}
        >
          <Thead className={classes.table_header}>
            <Tr>
              <TableHeadColumn title="No" />
              <TableHeadColumn title="Name" />
              <TableHeadColumn title="Age" />
              <TableHeadColumn title="Sex" />
              <TableHeadColumn title="Location" />
              <TableHeadColumn title="Tel No." />
              <TableHeadColumn title="Actions" />
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((item, index) => {
              return (
                <Tr key={item.id}>
                  <Td>{item.id}</Td>
                  <Td>{item.name}</Td>
                  <Td>{item.age}</Td>
                  <Td>{item.sex}</Td>
                  <Td>{item.location}</Td>
                  <Td>{item.phoneNumber ? item.phoneNumber : "N/A"}</Td>
                  <Td>
                    <div className={classes.table_actions_wrapperr}>
                      <IconButton
                        size="sm"
                        variant="outline"
                        aria-label="Edit Item"
                        icon={<MdOutlineEdit />}
                        onClick={() => handleEdit(item)}
                      />
                      <DeletePopup
                        handleDelete={handleDelete}
                        isLoading={isLoading}
                        record={item}
                        name={item?.name}
                        onClick={() => handleClick({ ...item, index })}
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

export default BenTable;
