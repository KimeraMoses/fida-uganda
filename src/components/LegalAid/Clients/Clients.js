import SectionHeader from '../../common/SectionHeader';
import { useClients } from '../../../hooks/useClients';
import { useDisclosure } from '@chakra-ui/react';
import Modal from '../../common/Modal';
import NewClientForm from './NewClientForm/NewClientForm';
import { useDispatch } from 'react-redux';
import { resetClient, selectClient } from '../../../store/clientReducer';
import Loader from './../../common/UI/Loader/Loader';
import { useEffect, useState } from 'react';
import Table from '../../common/TableComponent/Table';
import { clientsTableColumns } from '../../../lib/tableColumns';

const Clients = () => {
  const { data: clientsData, isLoading } = useClients();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  useEffect(() => {
    setData([]);
    if (clientsData?.clients?.length) {
      const dataToSet = clientsData?.clients?.map((b) => {
        return {
          ...b,
          name: {
            name: b?.name,
            occupation: b?.occupation,
          },
          contacts: {
            phoneNumber: b?.phoneNumber,
            email: b?.email,
          },
          address: {
            address: b?.address ? b?.address : 'N/A',
            city: b?.village,
          },
        };
      });
      setData(dataToSet);
    }
  }, [clientsData]);

  const onOpenModal = () => {
    onOpen();
    dispatch(resetClient());
    setIsEdit(true);
  };

  const onEditHandler = (client) => {
    setIsEdit(true);
    dispatch(
      selectClient(clientsData?.clients?.find((el) => el?.id === client?.id))
    );
    onOpen();
  };

  return (
    <>
      <SectionHeader title="Clients" />
      {isLoading ? (
        <Loader />
      ) : (
        <Table
          isLoading={isLoading}
          data={data ? data : null}
          columns={clientsTableColumns}
          btnLabel="Add Client"
          btnClick={onOpenModal}
          tableName="Clients"
          onEditHandler={onEditHandler}
        />
      )}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="2xl"
        title="Client Registration Form"
      >
        <NewClientForm onClose={onClose} isNewClient={isEdit ? false : true} />
      </Modal>
    </>
  );
};

export default Clients;
