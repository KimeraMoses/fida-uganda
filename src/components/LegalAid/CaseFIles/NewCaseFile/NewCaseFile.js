import { useState } from "react";
import MultForm5 from "./MultiForm/MultForm5";
import MultForm4 from "./MultiForm/MultForm4";
import MultForm3 from "./MultiForm/MultForm3";
import MultForm1 from "./MultiForm/MultForm1";
import MultForm6 from "./MultiForm/MultForm6";
import {
  useCaseFileId,
  useAddCaseFiles,
  useUpdateCaseFile,
} from "../../../../hooks/useCaseFiles";
import {
  caseFileFiveInitialValues,
  caseFileFourInitialValues,
  caseFileInitialValues,
  caseFileSixInitialValues,
  caseFileThreeInitialValues,
} from "./MultiForm/schema";

const NewCaseFile = ({ caseFile, isClvCaseFile, isNew, onClose }) => {
  const caseFileId = useCaseFileId();
  const limit = 5;
  const CASE_FILE_ADDED = "Case File Added Successfully";
  const CASE_FILE_UPDATED = "Case File Updated Successfully";
  const [page, setPage] = useState(1);
  const [selectedClient, setSelectedClient] = useState({});
  const [selectedClvName, setSelectedClvName] = useState({});
  const [referredTo, setReferredTo] = useState({});

  const mutateForm1 = (values) => {
    return { ...values, complainant: selectedClient.id };
  };

  const mutateForm1Update = (values) => {
    return { ...values, complainant: selectedClient.id, case_id: caseFileId };
  };

  const addCaseFileId = (values) => {
    return { ...values, case_id: caseFileId };
  };

  const mutateForm6 = (values) => {
    return { ...values, referred_to: referredTo.id, case_id: caseFileId };
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
        <MultForm1
          initialValues={isNew ? caseFileInitialValues : caseFile}
          isClvCaseFile={isClvCaseFile}
          isNew={isNew}
          useMutate={isNew ? useAddCaseFiles : useUpdateCaseFile}
          success={isNew ? CASE_FILE_ADDED : CASE_FILE_UPDATED}
          onSuccess={nextStep}
          selectedClient={selectedClient}
          setSelectedClient={setSelectedClient}
          page={page}
          limit={limit}
          isMutable={true}
          mutateData={isNew ? mutateForm1 : mutateForm1Update}
          selectedClvName={selectedClvName}
          setSelectedClvName={setSelectedClvName}
        />
      );
    case 2:
      return (
        <MultForm3
          initialValues={caseFileThreeInitialValues}
          useMutate={useUpdateCaseFile}
          onSuccess={nextStep}
          success={CASE_FILE_UPDATED}
          onBack={prevStep}
          page={page}
          limit={limit}
          isMutable={true}
          mutateData={addCaseFileId}
        />
      );
    case 3:
      return (
        <MultForm4
          initialValues={caseFileFourInitialValues}
          useMutate={useUpdateCaseFile}
          onSuccess={nextStep}
          success={CASE_FILE_UPDATED}
          onBack={prevStep}
          page={page}
          limit={limit}
          isMutable={true}
          mutateData={addCaseFileId}
        />
      );
    case 4:
      return (
        <MultForm5
          initialValues={caseFileFiveInitialValues}
          useMutate={useUpdateCaseFile}
          onSuccess={nextStep}
          success={CASE_FILE_UPDATED}
          onBack={prevStep}
          page={page}
          limit={limit}
          isMutable={true}
          mutateData={addCaseFileId}
        />
      );
    case 5:
      return (
        <MultForm6
          initialValues={caseFileSixInitialValues}
          useMutate={useUpdateCaseFile}
          onSuccess={onClose}
          success={CASE_FILE_UPDATED}
          onBack={prevStep}
          page={page}
          limit={limit}
          isMutable={true}
          setReferredTo={setReferredTo}
          referredTo={referredTo}
          mutateData={mutateForm6}
        />
      );
    default:
    // do nothing
  }
};

export default NewCaseFile;
