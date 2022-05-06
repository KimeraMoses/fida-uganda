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

const NewClientForm = ({ onClose }) => {
  const clientId = useClientId();
  const limit = 1;
  const CLIENT_ADDED = "Added Client Successfully";
  const CLIENT_UPDATED = "Updated Client Successfully";
  const [page, setPage] = useState(1);

  const addClientId = (values) => {
    return { ...values, id: clientId };
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
          initialValues={complainantInitialValues}
          useMutate={useAddClient}
          onSuccess={nextStep}
          success={CLIENT_ADDED}
          limit={limit}
          page={page}
        />
      );
    case 2:
      return (
        <MultForm2
          initialValues={caseFileTwoInitialValues}
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
