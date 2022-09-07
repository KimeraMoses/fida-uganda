import FolderFilesTable from "../../../HumanResource/Reports/ReportTable/FolderFilesTable";
import ReportBreadCrumb from "./../../../HumanResource/Reports/BreadCrumb/ReportBreadCrumb";
// import { useReports } from "./../../../../hooks/useReports";
import { FolderFileData } from "../../../HumanResource/Reports/Reports";
import {useReports} from "../../../../hooks/useReports";

const ProjectFilesDocuments = () => {
    const { data } = useReports();
    console.log(data)
  return (
    <>
        {/*<ReportBreadCrumb*/}
        {/*    root="Project Files"*/}
        {/*    rootLink="/project-files"*/}
        {/*    folderName="Project Documents"*/}
        {/*/>*/}
      <ReportBreadCrumb
          root="Fida Projects"
          rootLink="/fida-projects"
          // folderName={folderName.toLowerCase().replace(/-/g, " ")}
        folderName="Project Files"
        folderLink={"/fida-projects/Secretariat"}
        reportName="Project Documents"

      />

      <FolderFilesTable data={FolderFileData} showBtn={false} />
    </>
  );
};

export default ProjectFilesDocuments;
