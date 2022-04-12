import { useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";
import FidaProjectTable from "./FidaProjectTable/FidaProjectTable";
import NewFidaProjectForm from "./NewFidaProject/NewFidaProjectForm";
import { useAddProject } from "../../../hooks/useProjects";

const FidaProjects = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isLoading, isError, isSuccess, error } = useAddProject();

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
      <TableSearch btnLabel="Add Project" btnClick={onOpen} />
      <FidaProjectTable />
      <Modal isOpen={isOpen} onClose={onClose} title="Project Profiling Form">
        <NewFidaProjectForm
          isSubmitting={isLoading}
          isError={isError}
          error={error}
          onSubmit={handleAddProject}
        />
      </Modal>
    </>
  );
};

export default FidaProjects;
