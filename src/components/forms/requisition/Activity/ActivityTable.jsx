import React, { useState } from "react";
import { Table, Thead, Tbody, Tr, Td, IconButton, Th } from "@chakra-ui/react";
import classes from "./Table.module.css";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import FormButton from "../../../common/UI/FormButton/FormButton";
import Modal from "../../../common/Modal";

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

const ActivityTable = ({ data, handleEdit }) => {
  const [showDelete, setShowDelete] = useState(false);
  const [record, setRecord] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [idToDelete, setIdToDelete] = useState("");

  const handleDelete = async () => {
    setIsLoading(true);
    const removeIndex = data.map((item) => item.id).indexOf(idToDelete);
    removeIndex && data.splice(removeIndex, 1);
    setIsLoading(false);
    setShowDelete(false);
  };
  const handleClick = (data) => {
    setShowDelete(true);
    setRecord(data);
    setIdToDelete(data.id);
  };

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
                        <IconButton
                          size="sm"
                          variant="outline"
                          aria-label="Delete Item"
                          icon={<MdOutlineDelete />}
                          onClick={() => handleClick({ ...item, index })}
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
      <Modal isOpen={showDelete} size="xs">
        <div className={classes.confirm_delete_modal}>
          <div className={classes.modal__header}>
            <h3>Confirm Delete</h3>
          </div>
          <div className="mb-[32px]">
            Are you sure you wish to delete <strong>{record?.item}</strong> from
            the items list? This action is permanent and can not be undone
          </div>

          <div className={classes.form_action_wrapper}>
            <FormButton
              type="button"
              variant="cancel"
              rounded={false}
              onClick={() => setShowDelete(false)}
            >
              Cancel
            </FormButton>
            <FormButton
              type="button"
              variant="save"
              rounded={false}
              onClick={handleDelete}
            >
              {isLoading ? "Deleting..." : "Delete"}
            </FormButton>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ActivityTable;
