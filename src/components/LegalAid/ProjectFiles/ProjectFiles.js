import React from "react";
import SectionHeader from "../../common/SectionHeader";
import ProjectTable from "./ProjectPFilesTable/ProjectTable";

const ProjectFiles = () => {
  // const { data } = useProjectFiles();

  return (
    <>
      <SectionHeader title="Project Files" />
      <ProjectTable showBtn={false} />
    </>
  );
};

export default ProjectFiles;
