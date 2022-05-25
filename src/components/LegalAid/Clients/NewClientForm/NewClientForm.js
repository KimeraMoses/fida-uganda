import {
  useAddClient,
  useUpdateClient,
  useClientId,
} from "../../../../hooks/useClients";
import { complainantInitialValues } from "../../../../form_schemas/complainant";
import { useState } from "react";
import ClientFormOne from "./ClientFormOne";
import { caseFileTwoInitialValues } from "../../CaseFIles/NewCaseFile/MultiForm/schema";
import MultForm2 from "../../CaseFIles/NewCaseFile/MultiForm/MultForm2";

const NewClientForm = ({ client, setClient, onClose, isNewClient }) => {
  const clientId = useClientId();
  const limit = 2;
  const CLIENT_ADDED = "Added Client Successfully";
  const CLIENT_UPDATED = "Updated Client Successfully";
  const [page, setPage] = useState(1);
  const [isNew, setIsNew] = useState(isNewClient || false);

  const addClientId = (values) => {
    setClient({ ...values, id: clientId });
    return { ...values, id: clientId };
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

  switch (page) {
    case 1:
      return (
        <ClientFormOne
          initialValues={isNew ? complainantInitialValues : client}
          useMutate={isNew ? useAddClient : useAddClient}
          onSuccess={isNew ? handleSuccessfulAdd : nextStep}
          success={isNew ? CLIENT_ADDED : CLIENT_UPDATED}
          limit={limit}
          page={page}
        />
      );
    case 2:
      return (
        <MultForm2
          initialValues={client ? client : caseFileTwoInitialValues}
          useMutate={useUpdateClient}
          onSuccess={onClose}
          success={CLIENT_UPDATED}
          onBack={prevStep}
          page={page}
          limit={limit}
          isMutable={true}
          mutateData={addClientId}
        />
      );
    default:
    // do nothing
  }
};

export default NewClientForm;
