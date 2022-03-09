import { Tbody, Tr, Td, useColorModeValue } from "@chakra-ui/react";

function DisplayTableBody({
  bodyProps,
  rows,
  prepareRow,
  onRowClick = () => {},
}) {
  const color = useColorModeValue("black", "white");
  const bg = useColorModeValue("white", "gray.600");
  return (
    <Tbody {...bodyProps()}>
      {rows.map((row) => {
        prepareRow(row);
        return (
          <Tr
            {...row.getRowProps()}
            bgColor={bg}
            onClick={() => onRowClick(row)}
            _hover={{ cursor: "pointer" }}
          >
            {row.cells.map((cell) => {
              return (
                <Td {...cell.getCellProps()} color={color} whiteSpace="nowrap">
                  {cell.render("Cell")}
                </Td>
              );
            })}
          </Tr>
        );
      })}
    </Tbody>
  );
}

export default DisplayTableBody;
