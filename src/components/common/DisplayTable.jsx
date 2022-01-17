import { useMemo } from "react";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";
import { Box, Table, TableCaption, VStack } from "@chakra-ui/react";
import DisplayTableBody from "./DisplayTableBody";
import DisplayTableFoot from "./DisplayTableFoot";
import DisplayTableHead from "./DisplayTableHead";
import TableSearch from "./TableSearch";
import fuzzyTextFilter from "../../defaultData/textFilter";
import { scrollbar } from "../../defaultData/theme";

function DisplayTable({ data, columns, caption, btnLabel, btnClick }) {
  const filterTypes = useMemo(
    () => ({
      fuzzyText: fuzzyTextFilter,
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    []
  );

  const tableInstance = useTable(
    { data, columns, filterTypes },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setGlobalFilter,
    state: { pageIndex, pageSize, globalFilter },
  } = tableInstance;

  return (
    <VStack>
      <TableSearch
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        btnLabel={btnLabel}
        btnClick={btnClick}
      />
      <Box overflowY="auto" width="100%" css={scrollbar}>
        <Table variant="simple" bgColor="white" {...getTableProps()}>
          {caption && <TableCaption>{caption}</TableCaption>}
          <DisplayTableHead headerGroups={headerGroups} />
          <DisplayTableBody
            bodyProps={getTableBodyProps}
            rows={page}
            prepareRow={prepareRow}
          />
        </Table>
      </Box>
      <DisplayTableFoot
        gotoPage={gotoPage}
        canPreviousPage={canPreviousPage}
        previousPage={previousPage}
        canNextPage={canNextPage}
        nextPage={nextPage}
        pageCount={pageCount}
        pageOptions={pageOptions}
        pageIndex={pageIndex}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />
    </VStack>
  );
}

export default DisplayTable;
