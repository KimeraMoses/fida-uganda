import SectionHeader from "../common/SectionHeader";
import { useCaseFiles } from "../../hooks/useCaseFiles";
import Table from "../common/Table";
import { caseFilesColumns } from "../../assets/tableColumns/cases";

const CaseFiles = () => {
  const { data, isLoading } = useCaseFiles();

  const onRowClick = (row) => {};

  return (
    <>
      <SectionHeader title="Case Files" />
      <Table
        data={data?.cases}
        columns={caseFilesColumns}
        onRowClick={onRowClick}
        isLoading={isLoading}
        btnLabel="Case File"
      />
    </>
  );
};

export default CaseFiles;
