import SectionHeader from "../common/SectionHeader";
import { useCaseFiles } from "../../hooks/useCaseFiles";
import Table from "../common/Table";
import { caseFilesColumns } from "../../assets/tableColumns/cases";
import CaseFilesForm from "../forms/caseFiles/CaseRegistrationForm6";
import { useDisclosure } from "@chakra-ui/react";
import ModalLarge from "../common/ModalLarge";

const CaseFiles = () => {
  const { data, isLoading } = useCaseFiles();

  
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onRowClick = (row) => { };

  return (
    <>
      <SectionHeader title="Case Files" />
      <Table
        data={data?.cases}
        columns={caseFilesColumns}
        onRowClick={onRowClick}
        isLoading={isLoading}
        btnLabel="Case File"
        btnClick={onOpen}
      />
      <ModalLarge isOpen={isOpen} onClose={onClose} title="Case Registration Form">
        <CaseFilesForm
        // onSubmit={mutate}
        // isSubmitting={isSubmitting}
        // isError={isError}
        // error={error}
        />
      </ModalLarge>
    </>
  );
};

export default CaseFiles;
