import { useTable } from "react-table";
import { Table as ChakraTable, Box } from "@chakra-ui/react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableSearch from "./TableSearch";

const Table = ({
  columns,
  data,
  onRowClick,
  btnLabel,
  btnClick,
  showBtn,
}) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      <TableSearch btnLabel={btnLabel} btnClick={btnClick} showBtn={showBtn} />
      <Box overflowX="auto" boxShadow="lg" p={3} bgColor="white">
        <ChakraTable {...getTableProps()}>
          <TableHead headerGroups={headerGroups} />
          <TableBody
            getTableBodyProps={getTableBodyProps}
            prepareRow={prepareRow}
            rows={rows}
            onRowClick={onRowClick}
          />
        </ChakraTable>
      </Box>
    </>
  );
};

export default Table;
