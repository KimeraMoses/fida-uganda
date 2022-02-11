import { useState, useEffect } from "react";
import { Flex, Input, useDisclosure } from "@chakra-ui/react";
import GenericModal from "../../common/GenericModal";
import ReportUpload from "../../forms/reports/ReportUpload";
import FileInput from "../../common/FileInput";

function ReportsHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [search, setSearch] = useState("");
  const [file, setFile] = useState(null);
  const [doc, setDoc] = useState("");

  useEffect(() => {
    if (doc) {
      onOpen();
    }
  }, [doc, onOpen]);

  return (
    <Flex
      align="center"
      justifyContent="space-between"
      p="1rem"
      bgColor="white"
      boxShadow="lg"
      borderTopRadius="lg"
      mt="2rem"
      gap="2rem"
    >
      <Input
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <FileInput onFileSelectSuccess={setFile} getFile={setDoc} accept="" />
      <>
        <GenericModal isOpen={isOpen} onClose={onClose}>
          <ReportUpload onClose={onClose} file={file} doc={doc} />
        </GenericModal>
      </>
    </Flex>
  );
}

export default ReportsHeader;
