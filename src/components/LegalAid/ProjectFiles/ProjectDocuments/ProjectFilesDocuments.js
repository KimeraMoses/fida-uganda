import ReportBreadCrumb from "../../../HumanResource/Reports/BreadCrumb/ReportBreadCrumb";
import {useParams} from "react-router-dom";
import ProjectFilesTable from "../../../LegalAid/ProjectFiles/ProjectFilesTable/ProjectFilesTable";
import {useAddProjectFile, useProjectFilesByProject} from "../../../../hooks/useProjectFiles";
import Loader from "../../../common/UI/Loader/Loader";
import React, {useEffect} from "react";
import { useToast} from "@chakra-ui/react";
import NewDocumentForm from "../../../LegalAid/ProjectFiles/NewDocumentForm/NewDocumentForm";
 import {useDisclosure} from "@chakra-ui/react";
import {toastSuccess} from "../../../../lib/toastDetails";
import Modal from "../../../common/Modal";

const ProjectFilesDocuments = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const {folderName,id} = useParams();
    const { data, isLoading } = useProjectFilesByProject(id);
    // console.log(data)
    const {  mutate,
        isLoading: isSubmitting,
        isError,
        error,
        isSuccess,} = useAddProjectFile();
    const toast = useToast();
    useEffect(() => {
        if (isSuccess) {
            toast(toastSuccess("Document added successfully"));
            onClose();
        }
    }, [isSuccess, toast, onClose]);
  return (
    <>
      <ReportBreadCrumb
          root="Fida Projects"
          rootLink="/fida-projects"
          folderName={folderName.toLowerCase().replace(/-/g, " ")}
        folderLink={`/fida-projects/${folderName}/${id}`}
        reportName="Project Documents"

      />
        {isLoading ? (
            <Loader />
        ) : (
            data?.ProjectFiles && (
                <ProjectFilesTable
                    data={data?.ProjectFiles}
                    btnLabel="Add Document"
                    btnClick={onOpen}
                />
            )
        )}

        <Modal isOpen={isOpen} onClose={onClose} title="New Document Form">
            <NewDocumentForm
                onClose={onClose}
                projectId={id}
                projectName={folderName}
                isError={isError}
                onSubmit={mutate}
                error={error}
                isSubmitting={isSubmitting}
                onSucess={onClose}

            />
            {/*<NewFidaProjectForm*/}
            {/*    initialValues={projectInitialValues}*/}
            {/*    validationSchema={projectSchema}*/}
            {/*    onSuccess={onClose}*/}
            {/*    success={`Project added successfully`}*/}
            {/*    useMutate={useAddProject}*/}
            {/*/>*/}
            {/*<NewDocumentForm*/}
            {/*    onClose={onClose}*/}
            {/*    onSubmit={mutate}*/}
            {/*    isSubmitting={isSubmitting}*/}
            {/*    isError={isError}*/}
            {/*    error={error}*/}
            {/*    projectId={id}*/}
            {/*/>*/}
        </Modal>
    </>
  );
};

export default ProjectFilesDocuments;
