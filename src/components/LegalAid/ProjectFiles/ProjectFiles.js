import React from "react";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";
import ProjectTable from "./ProjectPFilesTable/ProjectFilesTable";

const ProjectFiles = () => {

  return (
    <>
      <SectionHeader title="Project Files" />
      <TableSearch showBtn={false}/>
      <ProjectTable />

    </>
  );
};

export default ProjectFiles;
