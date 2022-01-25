import { AddIcon } from "@chakra-ui/icons";
import { Button, Flex, Input } from "@chakra-ui/react";

function ProjectsSearch () {
  return (
    <Flex bgColor="white" p="0.5rem" gap="2rem" borderRadius="sm">
      <Input />
      <Button leftIcon={<AddIcon />} px="2rem" display="inline-block">
        Add Project
      </Button>
    </Flex>
  );
}

export default ProjectsSearch;
