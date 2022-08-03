import {
  useAddClient,
  useUpdateClient,
  useClientId,
} from '../../../../hooks/useClients';
import {
  complainantInitialValues,
  complainantSchema,
} from '../../../../form_schemas/complainant';
import { useState } from 'react';
import ClientFormOne from './ClientFormOne';
import {
  caseFileFourInitialValues,
  caseFileTwoInitialValues,
} from '../../CaseFIles/NewCaseFile/MultiForm/schema';
import MultForm2 from '../../CaseFIles/NewCaseFile/MultiForm/MultForm2';
import MultForm4 from '../../CaseFIles/NewCaseFile/MultiForm/MultForm4';
import { useDispatch } from 'react-redux';
import { resetClient, selectClient } from '../../../../store/clientReducer';

const NewClientForm = ({ onClose, isNewClient }) => {
  const client = useClientId();
  const limit = 3;
  const CLIENT_ADDED = 'Added Client Successfully';
  const CLIENT_UPDATED = 'Updated Client Successfully';
  const [page, setPage] = useState(1);
  const [isNew, setIsNew] = useState(isNewClient || false);
  const dispatch = useDispatch();

  const addClientId = (values) => {
    dispatch(selectClient(values));
    return { ...values, id: client?.id };
  };

  const handleSuccessfulAdd = () => {
    setIsNew(false);
    nextStep();
  };

  const prevStep = () => {
    setPage(page - 1);
  };

  const nextStep = () => {
    setPage(page + 1);
  };

  const mutateInitialValues = (initialValues) => {
    if (client) {
      let { registeredBy, ...newValues } = client;
      return { ...initialValues, ...newValues };
    }
    return initialValues;
  };

  const onSubmit = () => {
    dispatch(resetClient());
    onClose();
  };

  switch (page) {
    case 1:
      return (
        <ClientFormOne
          initialValues={complainantInitialValues}
          validationSchema={complainantSchema}
          useMutate={isNew ? useAddClient : useUpdateClient}
          onSuccess={isNew ? handleSuccessfulAdd : nextStep}
          success={isNew ? CLIENT_ADDED : CLIENT_UPDATED}
          limit={limit}
          page={page}
          isMutable={true}
          mutateData={addClientId}
          mutateInitialValues={mutateInitialValues}
        />
      );
    case 2:
      return (
        <MultForm2
          initialValues={caseFileTwoInitialValues}
          useMutate={useUpdateClient}
          onSuccess={nextStep}
          success={CLIENT_UPDATED}
          onBack={prevStep}
          page={page}
          limit={limit}
          isMutable={true}
          mutateData={addClientId}
          mutateInitialValues={mutateInitialValues}
        />
      );
    case 3:
      return (
        <MultForm4
          initialValues={caseFileFourInitialValues}
          useMutate={useUpdateClient}
          onSuccess={onSubmit}
          success={CLIENT_UPDATED}
          onBack={prevStep}
          page={page}
          limit={limit}
          isMutable={true}
          mutateData={addClientId}
          mutateInitialValues={mutateInitialValues}
        />
      );
    default:
    // do nothing
  }
};

export default NewClientForm;
