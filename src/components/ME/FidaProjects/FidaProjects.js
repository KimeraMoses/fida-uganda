import { useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";
import FidaProjectTable from "./FidaProjectTable/FidaProjectTable";
import NewFidaProjectForm from "./NewFidaProject/NewFidaProjectForm";
import { useAddProject, useProjects } from "../../../hooks/useProjects";

const FidaProjects = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isLoading: isSubmitting,
    isError,
    isSuccess,
    error,
  } = useAddProject();
  const { data } = useProjects();

  useEffect(() => {
    if (isSuccess) {
      onClose();
    }
  }, [isSuccess, onClose]);

  const handleAddProject = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <>
      <SectionHeader title="Fida Projects" />
      <p>{JSON.stringify(data?.projects, null, 2)}</p>
      <TableSearch btnLabel="Add Project" btnClick={onOpen} />
      {data?.projects && <FidaProjectTable data={data?.projects} />}
      <Modal isOpen={isOpen} onClose={onClose} title="Project Profiling Form">
        <NewFidaProjectForm
          isSubmitting={isSubmitting}
          isError={isError}
          error={error}
          onSubmit={handleAddProject}
        />
      </Modal>
    </>
  );
};

export default FidaProjects;
