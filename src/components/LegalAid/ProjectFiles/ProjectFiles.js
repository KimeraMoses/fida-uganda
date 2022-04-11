import React from "react";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";
import ProjectTable from "./ProjectPFilesTable/ProjectFilesTable";
import { useProjectFiles } from "../../../hooks/useProjectFiles";

const ProjectFiles = () => {
  const { data } = useProjectFiles();

  return (
    <>
      <SectionHeader title="Project Files" />
      <TableSearch showBtn={false} />
      {data?.ProjectFiles && <ProjectTable data={data?.ProjectFiles} />}
    </>
  );
};

export default ProjectFiles;
