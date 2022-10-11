import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx/xlsx.mjs";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import TableSearch from "../table/TableSearch";
import TableComponent from "./TableComponent";
import classes from "./Table.module.css";
import { IconButton } from "@chakra-ui/react";
import { MdDeleteOutline, MdEdit, MdOutlineRemoveRedEye } from "react-icons/md";

const Table = ({
  data,
  columns,
  showBtn,
  btnLabel,
  btnClick,
  loading,
  keysToFilterOut,
  tableName,
  hideSearch,
  actions,
  hideActions,
  onEditHandler,
  onViewHandler,
  onDeleteHandler,
}) => {
  const [tableColumns, setTableColumns] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  let tableKeys = [];

  Array.isArray(data) && data.length && tableKeys.push(Object.keys(data[0]));

  let filteredtableKeys;

  if (
    data &&
    Array.isArray(data) &&
    data.length &&
    keysToFilterOut &&
    keysToFilterOut.length &&
    Array.isArray(keysToFilterOut)
  ) {
    filteredtableKeys = tableKeys[0].filter(
      (key) => !keysToFilterOut.includes(key)
    );
  } else {
    filteredtableKeys = tableKeys[0];
  }

  let formattedData;

  if (
    data &&
    Array.isArray(data) &&
    data.length &&
    keysToFilterOut &&
    keysToFilterOut.length &&
    Array.isArray(keysToFilterOut)
  ) {
    let tempArr = [];
    const newArray = data?.map((obj) => ({ ...obj }));
    newArray?.map((dat) => {
      keysToFilterOut.forEach((e) => delete dat[e]);

      return tempArr.push(Object.values(dat));
    });
    formattedData = tempArr;
  } else {
    formattedData =
      Array.isArray(data) &&
      data?.length &&
      data?.map((row) => {
        return Object.values(row);
      });
  }

  const excelData =
    Array.isArray(data) &&
    data?.length &&
    data?.map((row) => {
      return Object.values(row);
    });

  const handleDownload = () => {
    if (formattedData) {
      const doc = new jsPDF({
        orientation: "landscape",
      });
      doc.text(`${tableName}`, 10, 10);
      doc.autoTable({
        theme: "grid",
        columnStyles: { valign: "center" },
        headStyles: { minCellWidth: 20 },
        head: [filteredtableKeys],
        body: formattedData,
      });
      doc.save(`${tableName}-${new Date().toLocaleString("en-GB")}.pdf`);
    }
    return;
  };

  const downloadExcel = () => {
    if (excelData) {
      const workSheet = XLSX.utils.json_to_sheet(excelData);
      const workBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workBook, workSheet, "Sheet1");

      //binary string
      XLSX.write(workBook, { bookType: "xlsx", type: "binary" });
      //donwload
      XLSX.writeFile(
        workBook,
        `${tableName}-${new Date().toLocaleString("en-GB")}.xlsx`
      );
    }
    return;
  };

  const keyWordHandler = (e) => {
    const { value } = e.target;
    setSearchTerm(value);

    if (searchTerm !== "") {
      const Results =
        data &&
        data.filter((Result) => {
          return Object.values(Result)
            .join(" ")
            .replace(/-/g, " ")
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        });
      setSearchResults(Results);
    }
  };

  const hasSearched = searchTerm.length < 1 ? true : false;

  useEffect(() => {
    setSearchResults([]);
  }, [hasSearched]);

  // Only Add Actions if hideActions is false
  useEffect(() => {
    if (!hideActions) {
      const actionColumn = {
        Header: "Actions",
        accessor: "actions",
        Cell: ({ row }) => {
          return (
            <div className={classes.table_actions_icon_wrapper}>
              {onViewHandler && (
                <IconButton
                  size="xs"
                  aria-label="View Item"
                  icon={<MdOutlineRemoveRedEye />}
                  onClick={() => onViewHandler(row?.original)}
                />
              )}
              {onEditHandler && (
                <IconButton
                  size="xs"
                  aria-label="Edit Item"
                  icon={<MdEdit />}
                  onClick={() => onEditHandler(row?.original)}
                />
              )}
              {onDeleteHandler && (
                <IconButton
                  size="xs"
                  aria-label="Delete Item"
                  icon={<MdDeleteOutline />}
                  onClick={() => onDeleteHandler(row?.original)}
                />
              )}
            </div>
          );
        },
      };
      setTableColumns([...columns, actionColumn]);
    } else {
      setTableColumns(columns);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //   console.log("data", data);

  return (
    <>
      {!hideSearch && (
        <TableSearch
          showBtn={showBtn}
          btnLabel={btnLabel}
          btnClick={btnClick}
          searchTerm={searchTerm}
          onSearchHandler={keyWordHandler}
          handleDownload={handleDownload}
          downloadExcel={downloadExcel}
        />
      )}
      <TableComponent
        columns={tableColumns}
        data={searchResults?.length > 0 ? searchResults : data}
        actions={actions}
        loading={loading}
        handleDownload={handleDownload}
        onEditHandler={onEditHandler}
        hideSearch={hideSearch}
        onRowClickHandler={
          onEditHandler ? onEditHandler : onViewHandler ? onViewHandler : null
        }
      />
    </>
  );
};

export default Table;
