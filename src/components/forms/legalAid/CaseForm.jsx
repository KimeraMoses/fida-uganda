import { useState } from "react";
import CaseFilesForm from "./CaseFilesForm";
import DeclarationForm from "./DeclarationForm";
import DisabilityAssessmentForm from "./DisabilityAssessmentForm";
import IssueForm from "./IssueForm";

function CaseForm({ onClose }) {
  const [currentForm, setCurrentForm] = useState(1);

  return (
    <>
      {currentForm === 1 && (
        <CaseFilesForm onClose={onClose} setCurrentForm={setCurrentForm} />
      )}
      {currentForm === 2 && (
        <DisabilityAssessmentForm
          onClose={onClose}
          setCurrentForm={setCurrentForm}
        />
      )}
      {currentForm === 3 && (
        <IssueForm onClose={onClose} setCurrentForm={setCurrentForm} />
      )}
      {currentForm === 4 && (
        <DeclarationForm onClose={onClose} setCurrentForm={setCurrentForm} />
      )}
    </>
  );
}

export default CaseForm;
