import { useEffect, useState } from "react";
import MultForm5 from "./MultiForm/MultForm5";
import MultForm4 from "./MultiForm/MultForm4";
import MultForm3 from "./MultiForm/MultForm3";
import MultForm2 from "./MultiForm/MultForm2";
import MultForm1 from "./MultiForm/MultForm1";
import MultForm6 from "./MultiForm/MultForm6";
import { useToast } from "@chakra-ui/react";
import { useAddCaseFiles } from "../../../../hooks/useCaseFiles";
import { toastSuccess } from "../../../../lib/toastDetails";

const NewCaseFile = ({ caseFile, isClvCaseFile, isNew }) => {
  const [page, setPage] = useState(1);
  const toast = useToast();
  const {
    // mutate: onAddCaseFile,
    isLoading: isAddingCaseFile,
    isError: isErrorAddingCaseFile,
    isSuccess: isAddedCaseFile,
    error: addCaseFileError,
  } = useAddCaseFiles();

  const handleAddCase = (values) => {
    alert(JSON.stringify(values, null, 2));
    // nextStep();
  };

  const handleEditForward = (values) => {
    alert(JSON.stringify(values, null, 2));
    // nextStep();
  };

  const handleEditBack = (values) => {
    alert(JSON.stringify(values, null, 2));
    prevStep();
  };

  useEffect(() => {
    if (isNew) {
      setPage(1);
    }
    if (isAddedCaseFile) {
      toast(toastSuccess("Case File Added Successfully"));
    }
  }, [isNew, isAddedCaseFile, toast]);

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
        />
      );
    case 2:
      return (
        <MultForm2
          prevStep={prevStep}
          nextStep={nextStep}
          caseFile={caseFile}
          page={page}
          handleEditForward={handleEditForward}
          handleEditBack={handleEditBack}
        />
      );
    case 3:
      return (
        <MultForm3
          prevStep={prevStep}
          nextStep={nextStep}
          caseFile={caseFile}
          page={page}
          handleEditForward={handleEditForward}
          handleEditBack={handleEditBack}
        />
      );
    case 4:
      return (
        <MultForm4
          prevStep={prevStep}
          nextStep={nextStep}
          caseFile={caseFile}
          page={page}
          handleEditForward={handleEditForward}
          handleEditBack={handleEditBack}
        />
      );
    case 5:
      return (
        <MultForm5
          prevStep={prevStep}
          nextStep={nextStep}
          caseFile={caseFile}
          page={page}
          handleEditForward={handleEditForward}
          handleEditBack={handleEditBack}
        />
      );
    case 6:
      return (
        <MultForm6
          prevStep={prevStep}
          nextStep={nextStep}
          caseFile={caseFile}
          page={page}
          handleEditForward={handleEditForward}
          handleEditBack={handleEditBack}
        />
      );
    default:
    // do nothing 
  }
};

export default NewCaseFile;
