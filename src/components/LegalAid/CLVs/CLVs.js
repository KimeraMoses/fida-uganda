import { useEffect, useState } from 'react';
import SectionHeader from '../../common/SectionHeader';
import { useDisclosure } from '@chakra-ui/react';
import Modal from '../../common/Modal';
import NewClvForm from './CLVForms/NewClvForm';
import { useClvs, useAddClv, useCLVId } from '../../../hooks/useClv';
import { clvInitialValues, clvSchema } from './CLVForms/schema';
import Loader from './../../common/UI/Loader/Loader';
import Table from '../../common/TableComponent/Table';
import { CLVTableColumns } from '../../../lib/tableColumns';
import { useDispatch } from 'react-redux';
import { resetCLV, selectCLV } from '../../../store/CLVReducer';

const CLVs = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const CLV = useCLVId();
  const [avatar, setAvatar] = useState(null);
  const [url, setImageUrl] = useState('');
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    setData([]);
    if (clvsData?.clvs?.length) {
      const dataToSet = clvsData?.clvs?.map((b) => {
        return {
          ...b,
          name: {
            name: b?.first_name + ' ' + b?.last_name,
            profession: b?.profession,
          },
          contacts: {
            phoneNumber: b?.phoneNumber ? b?.phoneNumber : 'N/A',
            email: b?.email,
          },
          idNumber: {
            idNumber: b?.fida_id,
            date: b?.createdAt,
          },
          address: {
            address: b?.address,
            city: b?.city,
          },
        };
      });
      // console.log('it data', dataToSet)
      setData(dataToSet);
    }
  }, [clvsData]);

  const onOpenModal = () => {
    setIsEdit(false);
    dispatch(resetCLV());
    onOpen();
  };

  const onEditHandler = (CLV) => {
    setIsEdit(true);
    dispatch(selectCLV(clvsData?.clvs?.find((el) => el?.id === CLV?.id)));
    onOpen();
  };

  const addCLVId = (values) => {
    dispatch(selectCLV(values));
    return { ...values, id: CLVs?.id };
  };

  const mutateInitialValues = (initialValues) => {
    if (CLV) {
      let { registeredBy, ...newValues } = CLV;
      return { ...initialValues, ...newValues };
    }
    return initialValues;
  };

  return (
    <>
      <SectionHeader title="CLVs" />
      {isLoading ? (
        <Loader />
      ) : (
        <Table
          onEditHandler={onEditHandler}
          onViewHandle={onOpen}
          btnClick={onOpenModal}
          isLoading={isLoading}
          data={data ? data : null}
          btnLabel="Add CLV"
          tableName="CLV"
          columns={CLVTableColumns}
        />
        // <CLVTable
        //   isLoading={isLoading}
        //   data={data ? data.clvs : null}
        //   btnLabel="Add CLV"
        //   btnClick={onOpen}
        //   tableName="CLV"
        // />
      )}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <NewClvForm
          action={CLV ? 'editClv' : 'newClv'}
          validationSchema={clvSchema}
          onClose={onClose}
          initialValues={clvInitialValues}
          useMutate={useAddClv}
          onSuccess={onClose}
          success={'CLV added successfully'}
          setAvatar={setAvatar}
          setImageUrl={setImageUrl}
          url={url}
          file={avatar}
          fileName="image"
          isFormData={true}
          mutateData={addCLVId}
          mutateInitialValues={mutateInitialValues}
          isEditing={isEdit}
        />
      </Modal>
    </>
  );
};

export default CLVs;
