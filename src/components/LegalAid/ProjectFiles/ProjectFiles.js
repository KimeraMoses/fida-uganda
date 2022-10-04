import React from "react";
import SectionHeader from "../../common/SectionHeader";
import ProjectTable from "./ProjectFilesTable/ProjectTable";
import {useSelector} from "react-redux";

const ProjectFiles = () => {
  // const { data } = useProjectFiles();
    const { user } = useSelector((state) => state.auth);
    const projectName =user?.project?.name

    return (
    <>
        { user.project == null ? (
            <SectionHeader title="No project attached"/>
        ): (
            <>
            <SectionHeader title={projectName + " Project Files"} />
            <ProjectTable showBtn={false} tableName="Project Files" />
            </>
        )



    }

    </>
  );
};

export default ProjectFiles;
