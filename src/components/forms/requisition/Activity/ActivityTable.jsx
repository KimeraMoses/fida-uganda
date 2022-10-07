import React from "react";
import { Table, Thead, Tbody, Tr, Td, IconButton, Th } from "@chakra-ui/react";
import classes from "./Table.module.css";
import { MdOutlineEdit } from "react-icons/md";
import { DeletePopup } from "../../../common/DeletePopup";

const TableHeadColumn = (props) => {
  const { title, secondaryText } = props;
  return (
    <Th>
      <div className={classes.title_primary_text}>{title}</div>
      {secondaryText && (
        <div className={classes.title_secondary_text}>{secondaryText}</div>
      )}
    </Th>
  );
};

const ActivityTable = ({ data, handleEdit, handleDelete, isLoading }) => {
  const getTotalPrice = () => {
    const priceArray = [];
    data &&
      data.length > 0 &&
      data?.forEach((item) => {
        const price = item?.qty * item?.unit;
        priceArray.push(price);
      });
    let sum = 0;
    for (let i = 0; i < priceArray.length; i += 1) {
      sum += priceArray[i];
    }
    return sum;
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
              <TableHeadColumn title="No." />
              <TableHeadColumn title="Item Description" />
              <TableHeadColumn title="Qty" />
              <TableHeadColumn title="Unit Price" />
              <TableHeadColumn title="Total" />
              <TableHeadColumn title="Actions" />
            </Tr>
          </Thead>
          <Tbody>
            {data &&
              data.length > 0 &&
              data?.map((item, index) => {
                return (
                  <Tr key={item.item}>
                    <Td>{index + 1}</Td>
                    <Td>{item.item}</Td>
                    <Td>{item.qty}</Td>
                    <Td>{item.unit}</Td>
                    <Td>{item.qty * item.unit}</Td>
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
                          name={item?.item}
                        />
                      </div>
                    </Td>
                  </Tr>
                );
              })}
            <Tr className={classes.total_row}>
              <Td></Td>
              <Td>Total</Td>
              <Td></Td>
              <Td></Td>
              <Td>{getTotalPrice()}</Td>
              <Td></Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    </>
  );
};

export default ActivityTable;
