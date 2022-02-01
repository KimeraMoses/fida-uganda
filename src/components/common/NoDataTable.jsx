import { Button, Center, Flex, Heading } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";

function NoDataTable({ btnClick, btnLabel, showBtn = true }) {
  return (
    <Center py="3rem">
      <Flex flexDir="column" gap="2rem">
        {showBtn && (
          <Button
            leftIcon={<MdAdd />}
            borderRadius="full"
            bgColor="purple.500"
            color="white"
            px="2.5rem"
            _hover={{ bgColor: "purple.700" }}
            onClick={btnClick}
          >
            {btnLabel}
          </Button>
        )}
        <Heading color="purple.400">No Data Available</Heading>
      </Flex>
    </Center>
  );
}

export default NoDataTable;
