import React from "react";
import { useTable, usePagination } from "react-table";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  IconButton,
  Text,
  Tooltip,
  Select,
  //   NumberInput,
  //   NumberInputField,
  //   NumberInputStepper,
  //   NumberIncrementStepper,
  //   NumberDecrementStepper,
} from "@chakra-ui/react";
import classes from "./Table.module.css";

import {
  //   MdEdit,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";

function TableComponent({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    // pageCount,
    // gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  // Render the UI for your table
  return (
    <div className={classes.table}>
      <Table {...getTableProps()}>
        <Thead className={classes.table_header}>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th {...column.getHeaderProps()}>{column.render("Header")}</Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>

      <Flex justifyContent="flex-end" m={3} alignItems="center">
        <Flex alignItems="center">
          <Text flexShrink="0" mr={8}>
            Page{" "}
            <Text fontWeight="bold" as="span">
              {pageIndex + 1}
            </Text>{" "}
            of{" "}
            <Text fontWeight="bold" as="span">
              {pageOptions.length}
            </Text>
          </Text>
        </Flex>
        <Flex gap={4}>
          <Tooltip label="Previous Page">
            <IconButton
              onClick={previousPage}
              isDisabled={!canPreviousPage}
              icon={<MdKeyboardArrowLeft h={6} w={6} />}
            />
          </Tooltip>
          <Tooltip label="Next Page">
            <IconButton
              onClick={nextPage}
              isDisabled={!canNextPage}
              icon={<MdKeyboardArrowRight h={6} w={6} />}
            />
          </Tooltip>
          <Select
            w={32}
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[5, 10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize} / page
              </option>
            ))}
          </Select>
        </Flex>
      </Flex>
    </div>
  );
}

export default TableComponent;
