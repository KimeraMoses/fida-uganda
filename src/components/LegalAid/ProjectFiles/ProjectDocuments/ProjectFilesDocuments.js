import FolderFilesTable from "../../../HumanResource/Reports/ReportTable/FolderFilesTable";
import ReportBreadCrumb from "./../../../HumanResource/Reports/BreadCrumb/ReportBreadCrumb";
// import { useReports } from "./../../../../hooks/useReports";
import { FolderFileData } from "./../../../HumanResource/Reports/Reports";

const ProjectFilesDocuments = () => {
  //   const { data } = useReports();
  return (
    <>
      <ReportBreadCrumb
        root="Project Files"
        rootLink="/project-files"
        folderName="Project Documents"
      />

      <FolderFilesTable data={FolderFileData} showBtn={false} />
    </>
  );
};

export default ProjectFilesDocuments;
