import React, { useState } from 'react';
import { Table, Thead, Tbody, Tr, Td, IconButton } from '@chakra-ui/react';
import classes from './Table.module.css';
import { TableHeadColumn } from '../../../../Membership/Allocations/AllocationsTable/AllocationsTable';
import { MdOutlineDelete, MdOutlineEdit } from 'react-icons/md';
import Modal from '../../../../common/Modal';
import FormButton from '../../../../common/UI/FormButton/FormButton';

const BenTable = ({ data, removeBeneficiary }) => {
  const [showDelete, setShowDelete] = useState(false);
  const [record, setRecord] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    // console.log(record);
    //Logic to delete record?.id goes here
    removeBeneficiary(record?.index);

    setIsLoading(false);
    setShowDelete(false);
  };
  const handleClick = (data) => {
    setShowDelete(true);
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
                  <Td>{item.phoneNumber ? item.phoneNumber : 'N/A'}</Td>
                  <Td>
                    <div className={classes.table_actions_wrapperr}>
                      <IconButton
                        size="sm"
                        variant="outline"
                        aria-label="Edit Item"
                        icon={<MdOutlineEdit />}
                        // onClick={() => handleClick(item)}
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
          </Tbody>
        </Table>
      </div>
      <Modal isOpen={showDelete} size="xs">
        <div className={classes.confirm_delete_modal}>
          <div className={classes.modal__header}>
            <h3>Confirm Delete</h3>
          </div>
          <div className="mb-[32px]">
            Are you sure you wish to delete <strong>{record?.name}</strong> from
            the beneficiaries list? This action is permanent and can not be
            undone
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
              {isLoading ? 'Deleting...' : 'Delete'}
            </FormButton>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BenTable;
