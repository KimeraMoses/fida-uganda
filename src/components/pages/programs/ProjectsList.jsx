import { List, useDisclosure } from "@chakra-ui/react";
import ListItem from "./ListItem";
import ListItemHeader from "./ListItemHeader";
import BreadCrump from "./BreadCrump";
import ProjectsSearch from "./ProjectsSearch";
import GenericModal from "../../common/GenericModal";
import FidaProjectsForm from "../../forms/programs/FidaProjectsForm";

function ProjectsList({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onOpenModal = () => {
    onOpen();
  };

  return (
    <>
      <BreadCrump home="FIDA Projects" />
      <ProjectsSearch btnLabel="Add Project" btnClick={onOpenModal} />
      <GenericModal isOpen={isOpen} onClose={onClose}>
        <FidaProjectsForm />
      </GenericModal>
      <List width="100%">
        <ListItemHeader />
        <ListItem to="details" />
        <ListItem to="details" bgColor="white" />
        <ListItem to="details" />
      </List>
    </>
  );
}

export default ProjectsList;
