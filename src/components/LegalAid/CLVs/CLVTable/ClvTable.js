import React, { useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import classes from '../../../Membership/Allocations/AllocationsTable/AllocationsTable.module.css';
import styles from './Table.module.css';
import { TableHeadColumn } from '../../../Membership/Allocations/AllocationsTable/AllocationsTable';
import { FcApproval } from 'react-icons/fc';
import { MdEdit } from 'react-icons/md';
import Modal from '../../../common/Modal';
import NewClvForm from '../CLVForms/NewClvForm';
import { formatDate } from '../../../../lib/data';
import withTable from './../../../../hoc/withTable';
import { clvInitialValues, clvSchema } from '../CLVForms/schema';
import { useEditClv } from '../../../../hooks/useClv';
import { isoToDate } from '../../../../lib/formatDate';

const CLVTable = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedRow, setSelectedRow] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const [avatar, setAvatar] = useState(null);
  const [url, setImageUrl] = useState('');

  const initiateApproval = (row) => {
    setIsEdit(false);
    setImageUrl(row.image);
    initiateRow(row);
  };

  const initiateEdit = (row) => {
    setIsEdit(true);
    initiateRow(row);
  };

  const initiateRow = (row) => {
    delete row.registeredBy;
    setSelectedRow(row);
    onOpen();
  };

  const toggleApproval = (values) => {
    return { isActive: !values.isActive, id: values.id };
  };

  const editClv = (values) => {
    return { ...values, id: values.id };
  };

  const mutateInitialValues = (initialValues) => {
    return {
      ...initialValues,
      ...selectedRow,
      recruitmentDate: isoToDate(selectedRow.recruitmentDate),
      expiryDate: isoToDate(selectedRow.expiryDate),
      project: selectedRow.project.name,
    };
  };

  return (
    <>
      <div className={classes.allocations_table_wrapper}>
        <Table
          variant="simple"
          size="sm"
          colorScheme="gray"
          className={classes.approval_table}
        >
          <Thead className={styles.table_header}>
            <Tr>
              <TableHeadColumn title="Name" secondaryText="Profession" />
              <TableHeadColumn title="Phone Number" secondaryText="Email" />
              <TableHeadColumn title="Address" secondaryText="City" />
              <TableHeadColumn
                title="FIDA ID NUMBER"
                secondaryText="Registration Date"
              />
              <TableHeadColumn title="Actions" />
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => {
              return (
                <Tr>
                  <Td className={classes.data_recepient_field}>
                    <div className={classes.data__primary_text}>
                      {item.first_name} {item.last_name}
                    </div>
                    <div className={classes.data__secondary_text}>
                      {item.profession}
                    </div>
                  </Td>
                  <Td className={classes.data_recepient_field}>
                    <div className={classes.data__primary_text}>
                      {item.phoneNumber}
                    </div>
                    <div className={classes.data__secondary_text}>
                      {item.email}
                    </div>
                  </Td>
                  <Td className={classes.data_recepient_field}>
                    <div className={classes.data__primary_text}>
                      {item.address}
                    </div>
                    <div className={classes.data__secondary_text}>
                      {item.city}
                    </div>
                  </Td>

                  <Td>
                    <div className={`${classes.data__primary_text}`}>
                      <div className={classes.data__primary_text}>
                        {item.fida_id}
                      </div>
                      <div className={classes.data__secondary_text}>
                        {formatDate(item.createdAt)}
                      </div>
                    </div>
                  </Td>
                  <Td>
                    <div className={styles.table_actions_wrapperr}>
                      <div className={styles.table_actions_icon_wrapper}>
                        <IconButton
                          size="xs"
                          aria-label="Edit Item"
                          icon={<MdEdit />}
                          onClick={() => initiateEdit(item)}
                        />
                      </div>
                      <div className={styles.table_actions_icon_wrapper}>
                        <IconButton
                          size="xs"
                          variant="outline"
                          aria-label="Approve Clv"
                          icon={<FcApproval />}
                          onClick={() => initiateApproval(item)}
                        />
                      </div>
                    </div>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
        <Modal isOpen={isOpen} onClose={onClose}>
          <NewClvForm
            action={isEdit ? 'editClv' : 'approveClv'}
            validationSchema={isEdit ? clvSchema : null}
            onSuccess={onClose}
            success={isEdit ? 'CLV updated successfully' : 'CLV Approved'}
            initialValues={clvInitialValues}
            useMutate={useEditClv}
            mutateInitialValues={mutateInitialValues}
            onClose={onClose}
            isMutable={isEdit ? false : true}
            mutateData={isEdit ? editClv : toggleApproval}
            setAvatar={setAvatar}
            setImageUrl={setImageUrl}
            url={url}
            file={avatar}
            fileName="image"
            isFormData={true}
          />
        </Modal>
      </div>
    </>
  );
};

export default withTable(CLVTable);
