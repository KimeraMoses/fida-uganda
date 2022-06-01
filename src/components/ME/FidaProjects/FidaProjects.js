import { useDisclosure, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import FidaProjectTable from "./FidaProjectTable/FidaProjectTable";
import NewFidaProjectForm from "./NewFidaProject/NewFidaProjectForm";
import { useAddProject, useProjects } from "../../../hooks/useProjects";
import { toastSuccess } from "../../../lib/toastDetails";

const FidaProjects = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    mutate,
    isLoading: isSubmitting,
    isError,
    isSuccess,
    error,
  } = useAddProject();
  const { data } = useProjects();

  useEffect(() => {
    if (isSuccess) {
      toast(toastSuccess("Project added successfully"));
      onClose();
    }
  }, [isSuccess, onClose, toast]);

  return (
    <>
      <SectionHeader title="Fida Projects" />
      {data?.projects && (
        <FidaProjectTable
          data={data?.projects}
          btnLabel="Add Project"
          btnClick={onOpen}
        />
      )}
      <Modal isOpen={isOpen} onClose={onClose} title="Project Profiling Form">
        <NewFidaProjectForm
          isSubmitting={isSubmitting}
          isError={isError}
          error={error}
          onSubmit={mutate}
        />
      </Modal>
    </>
  );
};

export default FidaProjects;
