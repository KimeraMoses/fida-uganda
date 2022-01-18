import { Box, useDisclosure } from "@chakra-ui/react";
import GenericModal from "../../common/GenericModal";
import SectionHeader from "../../common/SectionHeader";
import FidaProjectsForm from "../../forms/programs/FidaProjectsForm";

function FidaProjects() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    onOpen();
  };

  return (
    <Box>
      <SectionHeader title="FIDA Projects" />
      <GenericModal isOpen={isOpen} onClose={onClose}>
        <FidaProjectsForm />
      </GenericModal>
    </Box>
  );
}

export default FidaProjects;
