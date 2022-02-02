import { useState } from "react";
import { Button, Flex, Input, useDisclosure } from "@chakra-ui/react";
import GenericModal from "../../common/GenericModal";
import ReportUpload from "../../forms/reports/ReportUpload";
import { MdAdd } from "react-icons/md";

function ReportsHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [search, setSearch] = useState("");

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
      <Button
        leftIcon={<MdAdd />}
        onClick={onOpen}
        borderRadius="full"
        bgColor="purple.500"
        color="white"
        px="2.5rem"
        _hover={{ bgColor: "purple.700" }}
      >
        New Report
      </Button>
      <>
        <GenericModal isOpen={isOpen} onClose={onClose}>
          <ReportUpload onClose={onClose} />
        </GenericModal>
      </>
    </Flex>
  );
}

export default ReportsHeader;
