import { Tbody, Tr, Td } from "@chakra-ui/react";

const TableBody = ({ getTableBodyProps, prepareRow, onRowClick, rows }) => {
  return (
    <Tbody {...getTableBodyProps()}>
      {rows.map((row) => {
        prepareRow(row);
        return (
          <Tr
            {...row.getRowProps()}
            whiteSpace="nowrap"
            onClick={() => onRowClick(row)}
            cursor="pointer"
            key={row.id}
          >
            {row.cells.map((cell, index) => {
              return (
                <Td {...cell.getCellProps()} key={index.toString()}>
                  {cell.render("Cell")}
                </Td>
              );
            })}
          </Tr>
        );
      })}
    </Tbody>
  );
};

export default TableBody;
