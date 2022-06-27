import { useDisclosure } from "@chakra-ui/react";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import FidaProjectTable from "./FidaProjectTable/FidaProjectTable";
import NewFidaProjectForm from "./NewFidaProject/NewFidaProjectForm";
import { useAddProject, useProjects } from "../../../hooks/useProjects";
import Loader from "./../../common/UI/Loader/Loader";
import { projectInitialValues, projectSchema } from "./NewFidaProject/schema";

const FidaProjects = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { data, isLoading } = useProjects();



  return (
    <>
      <SectionHeader title="Fida Projects" />
      {isLoading ? (
        <Loader />
      ) : (
        data?.projects && (
          <FidaProjectTable
            data={data?.projects}
            btnLabel="Add Project"
            btnClick={onOpen}
          />
        )
      )}
      <Modal isOpen={isOpen} onClose={onClose} title="Project Profiling Form">
        <NewFidaProjectForm
          initialValues={projectInitialValues}
          validationSchema={projectSchema}
          onSuccess={onClose}
          success={`IT Complaint added successfully`}
          useMutate={useAddProject}
        />
      </Modal>
    </>
  );
};

export default FidaProjects;
