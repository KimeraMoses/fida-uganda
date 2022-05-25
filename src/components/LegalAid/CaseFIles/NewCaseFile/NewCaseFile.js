import { useState } from "react";
import MultForm5 from "./MultiForm/MultForm5";
import MultForm3 from "./MultiForm/MultForm3";
import MultForm1 from "./MultiForm/MultForm1";
import MultForm6 from "./MultiForm/MultForm6";
import {
  useAddCaseFiles,
  useUpdateCaseFile,
  useCaseFileTemp,
} from "../../../../hooks/useCaseFiles";
import {
  caseFileFiveInitialValues,
  caseFileInitialValues,
  caseFileSchema,
  caseFileSixInitialValues,
  caseFileThreeInitialValues,
} from "./MultiForm/schema";
import { useDispatch } from "react-redux";
import {
  resetCaseFile,
  selectCaseFile,
} from "../../../../store/caseFileReducer";

const NewCaseFile = ({ isClvCaseFile, onClose, isNewCaseFile = false }) => {
  const caseFile = useCaseFileTemp();
  const limit = 4;
  const CASE_FILE_ADDED = "Case File Added Successfully";
  const CASE_FILE_UPDATED = "Case File Updated Successfully";
  const [isNew, setIsNew] = useState(isNewCaseFile);
  const [page, setPage] = useState(1);
  const [selectedClient, setSelectedClient] = useState(
    caseFile?.complainant || {}
  );
  const [selectedClvName, setSelectedClvName] = useState(caseFile?.clv || {});
  const [referredTo, setReferredTo] = useState({});
  const dispatch = useDispatch();

  const mutateForm1 = (values) => {
    const data = {
      ...values,
      complainant: selectedClient.id,
    };

    if (isClvCaseFile) {
      data.isByClv = true;
      data.clv = selectedClvName.id;
      dispatch(selectCaseFile(data));
      return data;
    }

    dispatch(selectCaseFile(data));
    return data;
  };

  const onSuccessfulAdd = () => {
    setIsNew(false);
    nextStep();
  };

  const onSubmit = () => {
    dispatch(resetCaseFile());
    onClose();
  };

  const addCaseFileId = (values) => {
    dispatch(selectCaseFile({ ...values }));
    return { ...values, id: caseFile?.id };
  };

  const mutateForm6 = (values) => {
    dispatch(selectCaseFile({ ...values, referred_to: referredTo.id }));
    return { ...values, referred_to: referredTo.id, id: caseFile?.id };
  };

  const prevStep = () => {
    setPage(page - 1);
  };

  const nextStep = () => {
    setPage(page + 1);
  };

  const mutateInitialValues = (initialValues) => {
    return { ...initialValues, ...caseFile };
  };

  switch (page) {
    case 1:
      return (
        <MultForm1
          initialValues={isNew ? caseFileInitialValues : caseFile}
          validationSchema={caseFileSchema}
          isClvCaseFile={isClvCaseFile}
          isNew={isNew}
          useMutate={isNew ? useAddCaseFiles : useUpdateCaseFile}
          success={isNew ? CASE_FILE_ADDED : CASE_FILE_UPDATED}
          onSuccess={isNew ? onSuccessfulAdd : nextStep}
          selectedClient={selectedClient}
          setSelectedClient={setSelectedClient}
          page={page}
          limit={limit}
          isMutable={true}
          mutateData={mutateForm1}
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
          mutateInitialValues={mutateInitialValues}
        />
      );
    case 3:
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
          mutateInitialValues={mutateInitialValues}
        />
      );
    case 4:
      return (
        <MultForm6
          initialValues={caseFileSixInitialValues}
          useMutate={useUpdateCaseFile}
          onSuccess={onSubmit}
          success={CASE_FILE_UPDATED}
          onBack={prevStep}
          page={page}
          limit={limit}
          isMutable={true}
          setReferredTo={setReferredTo}
          referredTo={referredTo}
          mutateData={mutateForm6}
          mutateInitialValues={mutateInitialValues}
        />
      );
    default:
    // do nothing
  }
};

export default NewCaseFile;
