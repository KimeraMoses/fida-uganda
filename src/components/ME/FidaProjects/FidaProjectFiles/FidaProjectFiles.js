import React from "react";
import { useParams } from "react-router-dom";
import ProjectTable from "../../../LegalAid/ProjectFiles/ProjectPFilesTable/ProjectTable";
import ReportBreadCrumb from "./../../../HumanResource/Reports/BreadCrumb/ReportBreadCrumb";

const FidaProjectFiles = () => {
  const { folderName } = useParams();
  return (
    <>
      <ReportBreadCrumb
        root="Fida Projects"
        rootLink="/fida-projects"
        folderName={folderName.toLowerCase().replace(/-/g, " ")}
      />
      <ProjectTable showBtn={false} tableName="Project Files" />
    </>
  );
};

export default FidaProjectFiles;
