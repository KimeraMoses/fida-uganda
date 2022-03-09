import { VStack, Avatar, SimpleGrid, Flex, Button } from "@chakra-ui/react";
import TextFieldRead from "../../common/TextFieldRead";

const SettingsFormView = () => {
  return (
    <VStack alignItems="stretch" p={10} gap={10}>
      <Avatar alignSelf="center" size="2xl" />
      <SimpleGrid columns={2} gap={5}>
        <TextFieldRead label="Name" value="Name" />
        <TextFieldRead label="Email" value="Email" />
        <TextFieldRead label="Project" value="Project" />
        <TextFieldRead label="Designation" value="Designation" />
      </SimpleGrid>
      <Flex justifyContent="space-around">
        <Button variant="outline" colorScheme="red">Reject</Button>
        <Button colorScheme="green">Approve</Button>
      </Flex>
    </VStack>
  );
};

export default SettingsFormView;
