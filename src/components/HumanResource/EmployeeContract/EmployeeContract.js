import React from 'react';
import SectionHeader from '../../common/SectionHeader';
import Modal from '../../common/Modal';
import { useDisclosure } from '@chakra-ui/react';
import EmployeeContractTable from './EmployeeContractTable/EmployeeContractTable';
import NewContract from './NewContract/NewContract';
import { useEmployees } from '../../../hooks/useEmployee';
import Loader from './../../common/UI/Loader/Loader';

const EmployeeContract = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, isLoading } = useEmployees();

  return (
    <>
      <SectionHeader title="Contracts" />
      {isLoading ? (
        <Loader />
      ) : (
        data?.employees && (
          <EmployeeContractTable
            data={data?.employees}
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
