import SectionHeader from "../common/SectionHeader";
import { useCaseFiles } from "../../hooks/useCaseFiles";
import { Row } from "react-table";
import Table from "../common/Table";
import { caseFilesColumns } from "../../assets/tableColumns/cases";

const CaseFiles = () => {
  const { data, isLoading } = useCaseFiles();

  const onRowClick = (row: Row) => {};

  return (
    <>
      <SectionHeader title="Case Files" />
      <Table
        data={data?.cases}
        columns={caseFilesColumns}
        onRowClick={onRowClick}
        isLoading={isLoading}
      />
    </>
  );
};

export default CaseFiles;
