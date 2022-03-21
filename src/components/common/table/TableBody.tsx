import { TableBodyProps, TableBodyPropGetter, Row } from "react-table";
import { Tbody, Tr, Td } from "@chakra-ui/react";

type Props = {
  getTableBodyProps: (
    propGetter?: TableBodyPropGetter<any> | undefined
  ) => TableBodyProps;
  prepareRow: (row: Row<any>) => void;
  rows: Row<any>[];
  onRowClick: (row: Row<any>) => void;
};

const TableBody = ({
  getTableBodyProps,
  prepareRow,
  onRowClick,
  rows,
}: Props) => {
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
