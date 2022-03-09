import { Thead, Tr, Th, Box, useColorModeValue } from "@chakra-ui/react";

function DisplayTableHead({ headerGroups }) {
  const bg = useColorModeValue("purple.50", "purple.700");
  return (
    <Thead borderTopRadius="md" bgColor={bg}>
      {headerGroups.map((headerGroup) => (
        <Tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <Th
              fontSize="sm"
              whiteSpace="nowrap"
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
