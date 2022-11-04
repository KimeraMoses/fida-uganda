import { useDisclosure } from "@chakra-ui/react";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import NewFidaProjectForm from "./NewFidaProject/NewFidaProjectForm";
import { useAddProject, useProjects } from "../../../hooks/useProjects";
import Loader from "./../../common/UI/Loader/Loader";
import { projectInitialValues, projectSchema } from "./NewFidaProject/schema";
import { fidaProjectsTableColumns } from "../../../lib/tableColumns";
import Table from "../../common/TableComponent/Table";
import { useNavigate } from "react-router-dom";

const FidaProjects = () => {
  const { isOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const { data, isLoading } = useProjects();

  const handleOpenFolder = (name) => {
    navigate(`/fida-projects/${name.name}/${name.id}`);
  };
  return (
    <>
      <SectionHeader title="Fida Projects" />
      {isLoading ? (
        <Loader />
      ) : (
        data && (
          <Table
            onViewHandler={handleOpenFolder}
            data={data ? data?.projects : null}
            columns={fidaProjectsTableColumns}
            showBtn={false}
            loading={isLoading}
          />
          // <FidaProjectTable
          //   data={data?.projects}
          //   btnLabel="Add Project"
          //   btnClick={onOpen}
          // />
        )
      )}
      <Modal isOpen={isOpen} onClose={onClose} title="Project Profiling Form">
        <NewFidaProjectForm
          initialValues={projectInitialValues}
          validationSchema={projectSchema}
          onSuccess={onClose}
          success={`Project added successfully`}
          useMutate={useAddProject}
        />
      </Modal>
    </>
  );
};

export default FidaProjects;
