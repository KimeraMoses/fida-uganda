import { useEffect, useState } from "react";
import MultForm5 from "./MultiForm/MultForm5";
import MultForm4 from "./MultiForm/MultForm4";
import MultForm3 from "./MultiForm/MultForm3";
import MultForm2 from "./MultiForm/MultForm2";
import MultForm1 from "./MultiForm/MultForm1";
import MultForm6 from "./MultiForm/MultForm6";
import { useToast } from "@chakra-ui/react";
import {
  useAddCaseFiles,
  useUpdateCaseFile,
} from "../../../../hooks/useCaseFiles";
import { toastSuccess } from "../../../../lib/toastDetails";

const NewCaseFile = ({ caseFile, isClvCaseFile, isNew, onClose }) => {
  const [page, setPage] = useState(1);
  const toast = useToast();
  const {
    mutate: onAddCaseFile,
    isLoading: isAddingCaseFile,
    isError: isErrorAddingCaseFile,
    isSuccess: isAddedCaseFile,
    error: addCaseFileError,
  } = useAddCaseFiles();
  const {
    mutate: onUpdateCaseFile,
    isLoading: isUpdatingCaseFile,
    isSuccess: isUpdatedCaseFile,
    isError: isErrorUpdatingCaseFile,
    error: updateCaseFileError,
  } = useUpdateCaseFile();

  const handleAddCase = (values) => {
    onAddCaseFile(values);
    nextStep();
  };

  const handleLastStep = (values) => {
    onUpdateCaseFile(values);
    onClose();
  };

  const handleEditForward = (values) => {
    onUpdateCaseFile(values);
    nextStep();
  };

  const handleEditBack = (values) => {
    onUpdateCaseFile(values);
    prevStep();
  };

  useEffect(() => {
    if (isNew) {
      setPage(1);
    }
    if (isAddedCaseFile) {
      toast(toastSuccess("Case File Added Successfully"));
    }
    if (isUpdatedCaseFile) {
      toast(toastSuccess("Case File Updated Successfully"));
    }
  }, [isNew, isAddedCaseFile, toast, isUpdatedCaseFile]);

  const prevStep = () => {
    setPage((prePage) => prePage - 1);
  };
  const nextStep = () => {
    setPage((prePage) => prePage + 1);
  };

  switch (page) {
    case 1:
      return (
        <MultForm1
          caseFile={caseFile}
          page={page}
          isClvCaseFile={isClvCaseFile}
          isNew={isNew}
          onAddCaseFile={handleAddCase}
          isAddingCaseFile={isAddingCaseFile}
          isErrorAddingCaseFile={isErrorAddingCaseFile}
          errorAddingCaseFile={addCaseFileError}
          handleEditForward={handleEditForward}
          isErrorUpdatingCaseFile={isErrorUpdatingCaseFile}
          errorUpdatingCaseFile={updateCaseFileError}
        />
      );
    case 2:
      return (
        <MultForm2
          caseFile={caseFile}
          page={page}
          handleEditForward={handleEditForward}
          handleEditBack={handleEditBack}
          isBackwardLoading={isUpdatingCaseFile}
          isForwardLoading={isAddingCaseFile}
          isErrorUpdatingCaseFile={isErrorUpdatingCaseFile}
          errorUpdatingCaseFile={updateCaseFileError}
        />
      );
    case 3:
      return (
        <MultForm3
          caseFile={caseFile}
          page={page}
          handleEditForward={handleEditForward}
          handleEditBack={handleEditBack}
          isBackwardLoading={isUpdatingCaseFile}
          isForwardLoading={isAddingCaseFile}
          isErrorUpdatingCaseFile={isErrorUpdatingCaseFile}
          errorUpdatingCaseFile={updateCaseFileError}
        />
      );
    case 4:
      return (
        <MultForm4
          caseFile={caseFile}
          page={page}
          handleEditForward={handleEditForward}
          handleEditBack={handleEditBack}
          isBackwardLoading={isUpdatingCaseFile}
          isForwardLoading={isAddingCaseFile}
          isErrorUpdatingCaseFile={isErrorUpdatingCaseFile}
          errorUpdatingCaseFile={updateCaseFileError}
        />
      );
    case 5:
      return (
        <MultForm5
          caseFile={caseFile}
          page={page}
          handleEditForward={handleEditForward}
          handleEditBack={handleEditBack}
          isBackwardLoading={isUpdatingCaseFile}
          isForwardLoading={isAddingCaseFile}
          isErrorUpdatingCaseFile={isErrorUpdatingCaseFile}
          errorUpdatingCaseFile={updateCaseFileError}
        />
      );
    case 6:
      return (
        <MultForm6
          caseFile={caseFile}
          page={page}
          handleEditForward={handleLastStep}
          handleEditBack={handleEditBack}
          isBackwardLoading={isUpdatingCaseFile}
          isForwardLoading={isAddingCaseFile}
          isErrorUpdatingCaseFile={isErrorUpdatingCaseFile}
          errorUpdatingCaseFile={updateCaseFileError}
        />
      );
    default:
    // do nothing
  }
};

export default NewCaseFile;
