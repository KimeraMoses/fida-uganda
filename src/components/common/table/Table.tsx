import { useTable, Row } from "react-table";
import { Table as ChakraTable, Box } from "@chakra-ui/react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableSearch from "./TableSearch";

type Props = {
  data: any[];
  columns: any[];
  onRowClick: (row: Row<any>) => void;
  btnLabel?: string;
  btnClick?: () => void;
  showBtn?: boolean;
};

const Table = ({
  columns,
  data,
  onRowClick,
  btnLabel,
  btnClick,
  showBtn,
}: Props) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <Box overflowX="auto" boxShadow="lg" p={3} bgColor="white">
      <TableSearch btnLabel={btnLabel} btnClick={btnClick} showBtn={showBtn} />
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
  );
};

export default Table;
