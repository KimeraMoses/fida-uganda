import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, useDisclosure } from "@chakra-ui/react";
import GenericModal from "../../common/GenericModal";
import FidaProjectsForm from "../../forms/programs/FidaProjectsForm";
import { loadProjects } from "../../../store/reducers/projects";
import ProjectList from "./ProjectList";
import ProjectsSearch from "./ProjectsSearch";
import BreadCrump from "./BreadCrump";

function FidaProjects() {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.projects);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onOpenModal = () => {
    onOpen();
  };

  useEffect(() => {
    dispatch(loadProjects());
  }, [dispatch]);

  return (
    <Box>
      <BreadCrump home="FIDA Projects" />
      <ProjectsSearch btnLabel="Add Project" btnClick={onOpenModal}  />
      <ProjectList />
      <GenericModal isOpen={isOpen} onClose={onClose}>
        <FidaProjectsForm />
      </GenericModal>
    </Box>
  );
}

export default FidaProjects;
