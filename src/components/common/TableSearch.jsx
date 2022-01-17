import { useState } from "react";
import { useAsyncDebounce } from "react-table";
import { Flex, Button, Input } from "@chakra-ui/react";
import { MdFilterList, MdAdd } from "react-icons/md";

function TableSearch({ btnLabel, btnClick, setGlobalFilter, globalFilter }) {
  const [search, setSearch] = useState(globalFilter);

  const handleChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <Flex
      as="form"
      width="100%"
      gap="2rem"
      my="2rem"
      p="1rem"
      bgColor="white"
      borderRadius="xl"
    >
      <Button
        leftIcon={<MdFilterList />}
        variant="ghost"
        color="blackAlpha.800"
        px="2rem"
      >
        Filter
      </Button>
      <Input
        placeholder="Search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          handleChange(e.target.value);
        }}
      />
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
    </Flex>
  );
}

export default TableSearch;
