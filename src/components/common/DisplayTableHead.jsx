import { Thead, Tr, Th, Box, useColorModeValue } from "@chakra-ui/react";

function DisplayTableHead({ headerGroups }) {
  const bg = useColorModeValue("gray.100", "gray.700");
  const color = useColorModeValue("black", "white");
  return (
    <Thead borderTopRadius="md" bgColor={bg}>
      {headerGroups.map((headerGroup) => (
        <Tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <Th
              fontWeight="semibold"
              color={color}
              fontSize="sm"
              {...column.getHeaderProps(column.getSortByToggleProps())}
            >
              {column.render("Header")}
              <Box as="span">
                {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
              </Box>
            </Th>
          ))}
        </Tr>
      ))}
    </Thead>
  );
}

export default DisplayTableHead;