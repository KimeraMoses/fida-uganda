import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, useDisclosure } from "@chakra-ui/react";
import GenericModal from "../../common/GenericModal";
import SectionHeader from "../../common/SectionHeader";
import FidaProjectsForm from "../../forms/programs/FidaProjectsForm";
import { loadProjects } from "../../../store/reducers/projects";
import ProjectList from "./ProjectList";
import { ChevronRightIcon } from "@chakra-ui/icons";
import ProjectsSearch from "./ProjectsSearch";

function FidaProjects() {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.projects);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    onOpen();
  };

  useEffect(() => {
    dispatch(loadProjects());
  }, [dispatch]);

  return (
    <Box>
      <SectionHeader title="FIDA Projects" />
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">About</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Contact</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <ProjectsSearch />
      <ProjectList />
      <GenericModal isOpen={isOpen} onClose={onClose}>
        <FidaProjectsForm />
      </GenericModal>
    </Box>
  );
}

export default FidaProjects;
