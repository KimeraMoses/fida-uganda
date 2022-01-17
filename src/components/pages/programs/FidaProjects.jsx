import { Box, useDisclosure } from "@chakra-ui/react";
import DisplayTable from "../../common/DisplayTable";
import GenericModal from "../../common/GenericModal";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/TableSearch";
import FidaProjectsForm from "../../forms/programs/FidaProjectsForm";

function FidaProjects() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    onOpen();
  };

  return (
    <Box>
      <SectionHeader title="FIDA Projects" />
      <TableSearch btnLabel="Add Project" btnClick={handleClick} />
      <DisplayTable />
      <GenericModal isOpen={isOpen} onClose={onClose}>
        <FidaProjectsForm />
      </GenericModal>
    </Box>
  );
}

export default FidaProjects;
