import React from 'react';
import SectionHeader from '../../common/SectionHeader';
import Modal from '../../common/Modal';
import { useDisclosure } from '@chakra-ui/react';
import EmployeeContractTable from './EmployeeContractTable/EmployeeContractTable';
import NewContract from './NewContract/NewContract';
import Loader from './../../common/UI/Loader/Loader';
import { useContracts } from '../../../hooks/useContract';

const EmployeeContract = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, isLoading } = useContracts();

  return (
    <>
      <SectionHeader title="Contracts" />
      {isLoading ? (
        <Loader />
      ) : (
        data?.contracts && (
          <EmployeeContractTable
            data={data?.contracts}
            btnLabel="Add Contract"
            btnClick={onOpen}
            tableName="Employee contracts"
          />
        )
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <NewContract />
      </Modal>
    </>
  );
};

export default EmployeeContract;
