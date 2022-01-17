import { Box, useDisclosure } from "@chakra-ui/react";
import DisplayTable from "../../common/DisplayTable";
import GenericModal from "../../common/GenericModal";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/TableSearch";
import CaseFilsForm from "../../forms/legalAid/CaseFilesForm";

function CaseFiles() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleBtnClick = () => {
    onOpen();
  };

  return (
    <Box>
      <SectionHeader title="Case Files" />
      <TableSearch btnLabel="Add Case" btnClick={handleBtnClick} />
      <DisplayTable />
      <GenericModal isOpen={isOpen} onClose={onClose}>
        <CaseFilsForm />
      </GenericModal>
    </Box>
  );
}

export default CaseFiles;
