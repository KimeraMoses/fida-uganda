import { Box, useDisclosure } from "@chakra-ui/react";
import GenericModal from "../../common/GenericModal";
import SectionHeader from "../../common/SectionHeader";
import Table from "../../common/Table";
import CaseFilsForm from "../../forms/legalAid/CaseFilesForm";

function CaseFiles() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleBtnClick = () => {
    onOpen();
  };

  return (
    <Box>
      <SectionHeader title="Case Files" />
      {/* <Table btnLabel="Add Case" btnClick={handleBtnClick} /> */}
      <GenericModal isOpen={isOpen} onClose={onClose}>
        <CaseFilsForm />
      </GenericModal>
    </Box>
  );
}

export default CaseFiles;
