import React from "react";
import SectionHeader from "../../common/SectionHeader";
import ProjectTable from "./ProjectFilesTable/ProjectTable";

const ProjectFiles = () => {
  // const { data } = useProjectFiles();

  return (
    <>
      <SectionHeader title="Project Files" />
      <ProjectTable showBtn={false} tableName="Project Files" />
    </>
  );
};

export default ProjectFiles;
