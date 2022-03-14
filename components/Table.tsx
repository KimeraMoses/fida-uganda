import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Tfoot,
  TableCaption,
  Box,
} from "@chakra-ui/react";

const Table = () => {
  return (
    <Box bgColor="white" overflow="auto" p={5} boxShadow="xl" borderRadius="xl">
      <ChakraTable variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead bgColor="purple.50">
          <Tr>
            <Th whiteSpace="nowrap">To convert</Th>
            <Th whiteSpace="nowrap">into</Th>
            <Th whiteSpace="nowrap" isNumeric>
              multiply by
            </Th>
            <Th whiteSpace="nowrap">To convert</Th>
            <Th whiteSpace="nowrap">into</Th>
            <Th whiteSpace="nowrap" isNumeric>
              multiply by
            </Th>
            <Th whiteSpace="nowrap">To convert</Th>
            <Th whiteSpace="nowrap">into</Th>
            <Th whiteSpace="nowrap" isNumeric>
              multiply by
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </ChakraTable>
    </Box>
  );
};

export default Table;
