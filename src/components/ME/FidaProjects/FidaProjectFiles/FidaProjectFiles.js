import React from "react";
import { useParams } from "react-router-dom";
import ReportBreadCrumb from "./../../../HumanResource/Reports/BreadCrumb/ReportBreadCrumb";
import FidaProjectFilesTable from "./FidaProjectFilesTable";

const FidaProjectFiles = () => {
  const { folderName } = useParams();
  return (
    <>
      <ReportBreadCrumb
        root="Fida Projects"
        rootLink="/fida-projects"
        folderName={folderName.toLowerCase().replace(/-/g, " ")}
      />
        <FidaProjectFilesTable/>
    </>
  );
};

export default FidaProjectFiles;
