import React, { useEffect, useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import Modal from '../../common/Modal';
import SectionHeader from '../../common/SectionHeader';
import NewMembersForm from './NewMemberForm/NewMembersForm';
import { useMembers } from '../../../hooks/useMember';
import Table from '../../common/TableComponent/Table';
import { membersTableColumns } from '../../../lib/tableColumns';

const Members = () => {
  const { data: members, isLoading } = useMembers();
  const { isOpen,  onClose } = useDisclosure();


  const [data, setData] = useState([]);
  useEffect(() => {
    setData([]);
    if (members?.Members?.length) {
      const dataToSet = members?.Members?.map((b) => {
        return {
          ...b,
          name: {
            name: b?.first_name + b?.last_name,
            membership_no: b?.membership_no,
          },
          contacts: {
            phone: b?.phoneNumber,
            email: b?.email,
          },
          membership: {
            duration: b?.membership_duration,
            feeStatus: b?.hasPaid
          },
        };
      });
      console.log('it data', dataToSet)
      setData(dataToSet);
    }
  }, [members]);

  return (
    <>
      <SectionHeader title="Members" />
      <Table
        isLoading={isLoading}
        data={data ? data : null}
        btnLabel="Add Member"
        tableName="Members"
        columns={membersTableColumns}
      />
      {/* <MemberTable
        isLoading={isLoading}
        data={data ? data.Members : null}
        btnLabel="Add Member"
        btnClick={onOpenModal}
        tableName="Members"
      /> */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Membership Form"
        size="3xl"
      >
        <NewMembersForm onClose={onClose} isNew={true} />
      </Modal>
    </>
  );
};

export default Members;
