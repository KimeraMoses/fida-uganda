import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CaseFilesForm from "./CaseFilesForm";
import DeclarationForm from "./DeclarationForm";
import DisabilityAssessmentForm from "./DisabilityAssessmentForm";
import IssueForm from "./IssueForm";
import { getAllDistricts } from "../../../store/reducers/registration";

function CaseForm({ onClose }) {
  const [currentForm, setCurrentForm] = useState(1);
  const { districts } = useSelector((state) => state.registration);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!districts) {
      dispatch(getAllDistricts());
    }
  }, [dispatch, districts]);

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
