import { useState } from "react";
// import MultForm5 from "./MultiForm/MultForm5";
// import MultForm4 from "./MultiForm/MultForm4";
// import MultForm3 from "./MultiForm/MultForm3";
// import MultForm2 from "./MultiForm/MultForm2";
import MultForm1 from "./MultiForm/MultForm1";
// import MultForm6 from "./MultiForm/MultForm6";
import {
  // useAddCaseFiles,
  useUpdateCaseFile,
} from "../../../../hooks/useCaseFiles";
import { caseFileInitialValues } from "./MultiForm/schema";
import { onSubmitAlert } from '../../../../lib/deleteInProd';

const NewCaseFile = ({ caseFile, isClvCaseFile, isNew, onClose }) => {
  const limit = 6;
  const CASE_FILE_ADDED = "Case File Added Successfully";
  const CASE_FILE_UPDATED = "Case File Updated Successfully";
  const [page, setPage] = useState(1);
  const [selectedClient, setSelectedClient] = useState({});

  // const prevStep = () => {
  //   setPage(page - 1);
  // };
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
          useMutate={isNew ? onSubmitAlert : useUpdateCaseFile}
          success={isNew ? CASE_FILE_ADDED : CASE_FILE_UPDATED}
          onSuccess={nextStep}
          selectedClient={selectedClient}
          setSelectedClient={setSelectedClient}
          page={page}
          limit={limit}
        />
      );
    // case 2:
    //   return (
    //     <MultForm2
    //       caseFile={caseFile}
    //       page={page}
    //       handleEditForward={handleEditForward}
    //       handleEditBack={handleEditBack}
    //       isBackwardLoading={isUpdatingCaseFile}
    //       isForwardLoading={isAddingCaseFile}
    //       isErrorUpdatingCaseFile={isErrorUpdatingCaseFile}
    //       errorUpdatingCaseFile={updateCaseFileError}
    //     />
    //   );
    // case 3:
    //   return (
    //     <MultForm3
    //       caseFile={caseFile}
    //       page={page}
    //       handleEditForward={handleEditForward}
    //       handleEditBack={handleEditBack}
    //       isBackwardLoading={isUpdatingCaseFile}
    //       isForwardLoading={isAddingCaseFile}
    //       isErrorUpdatingCaseFile={isErrorUpdatingCaseFile}
    //       errorUpdatingCaseFile={updateCaseFileError}
    //     />
    //   );
    // case 4:
    //   return (
    //     <MultForm4
    //       caseFile={caseFile}
    //       page={page}
    //       handleEditForward={handleEditForward}
    //       handleEditBack={handleEditBack}
    //       isBackwardLoading={isUpdatingCaseFile}
    //       isForwardLoading={isAddingCaseFile}
    //       isErrorUpdatingCaseFile={isErrorUpdatingCaseFile}
    //       errorUpdatingCaseFile={updateCaseFileError}
    //     />
    //   );
    // case 5:
    //   return (
    //     <MultForm5
    //       caseFile={caseFile}
    //       page={page}
    //       handleEditForward={handleEditForward}
    //       handleEditBack={handleEditBack}
    //       isBackwardLoading={isUpdatingCaseFile}
    //       isForwardLoading={isAddingCaseFile}
    //       isErrorUpdatingCaseFile={isErrorUpdatingCaseFile}
    //       errorUpdatingCaseFile={updateCaseFileError}
    //     />
    //   );
    // case 6:
    //   return (
    //     <MultForm6
    //       caseFile={caseFile}
    //       page={page}
    //       handleEditForward={handleLastStep}
    //       handleEditBack={handleEditBack}
    //       isBackwardLoading={isUpdatingCaseFile}
    //       isForwardLoading={isAddingCaseFile}
    //       isErrorUpdatingCaseFile={isErrorUpdatingCaseFile}
    //       errorUpdatingCaseFile={updateCaseFileError}
    //     />
    //   );
    default:
    // do nothing
  }
};

export default NewCaseFile;
