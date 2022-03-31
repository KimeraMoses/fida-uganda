import React from "react";
import { useProjects } from "../../../hooks/useProjects";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";
import ProjectTable from "./ProjectPFilesTable/ProjectFilesTable";

const ProjectFiles = () => {
  const { data } = useProjects();

  return (
    <>
      <SectionHeader title="Project Files" />
      <TableSearch showBtn={false} />
      {data && <ProjectTable data={data.projects} />}
    </>
  );
};

export default ProjectFiles;
