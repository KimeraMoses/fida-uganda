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
} from "@chakra-ui/react";
import classes from "./Table.module.css";
import "./ExtraFormats.css";
import {
  MdCloudDownload,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";

function TableComponent({
  columns,
  data,
  handleDownload,
  hideSearch,
  loading,
  onRowClickHandler,
  emptyText,
}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    usePagination
  );

  return (
    <>
      <div className={classes.table}>
        <>
          <Table {...getTableProps()} variant="striped" size="sm">
            <Thead className={classes.table_header}>
              {headerGroups.map((headerGroup) => (
                <Tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <Th {...column.getHeaderProps()} key={column?.Header}>
                      <div>{column.render("Header")}</div>
                      {column?.subHeader && (
                        <div className={classes.subheader_wrapper}>
                          {column.render("subHeader")}
                        </div>
                      )}
                    </Th>
                  ))}
                </Tr>
              ))}
            </Thead>
            <Tbody {...getTableBodyProps()}>
              {page.map((row, i) => {
                prepareRow(row);
                return (
                  <Tr {...row.getRowProps()} key={row?.original?.id}>
                    {row.cells.map((cell) => {
                      return (
                        <>
                          <Td
                            {...cell.getCellProps()}
                            onClick={() =>
                              onRowClickHandler !== null &&
                              cell?.column?.Header !== "Actions"
                                ? onRowClickHandler(row?.original)
                                : null
                            }
                          >
                            {cell.render("Cell")}
                          </Td>
                        </>
                      );
                    })}
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
          {data?.length < 1 && (
            <div className={classes.no_data_wrapper}>
              {loading ? "Loading data..." : emptyText ? emptyText : "No data"}
            </div>
          )}

          <Flex
            justifyContent={!hideSearch ? "flex-end" : "space-between"}
            m={3}
            alignItems="center"
          >
            {hideSearch && (
              <Tooltip label="Download">
                <IconButton
                  onClick={handleDownload}
                  icon={<MdCloudDownload />}
                />
              </Tooltip>
            )}
            <Flex justifyContent="flex-end" alignItems="center">
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
          </Flex>
        </>
        {/* )} */}
      </div>
    </>
  );
}

export default TableComponent;
