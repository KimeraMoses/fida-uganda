import React, { useEffect, useState } from "react";
import TableSearch from "../components/common/table/TableSearch";
import * as XLSX from "xlsx/xlsx.mjs";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const withTable = (TableComponent) => {
  return function WithNewTable({
    tableName,
    data,
    keysToFilterOut,
    subHeading,
    showBtn,
    btnLabel,
    btnClick,
    isLoading,
    ...rest
  }) {
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

    return (
      <>
        <TableSearch
          showBtn={showBtn}
          btnLabel={btnLabel}
          btnClick={btnClick}
          searchTerm={searchTerm}
          onSearchHandler={keyWordHandler}
          handleDownload={handleDownload}
          downloadExcel={downloadExcel}
          // downloadMetaData={downloadMetaData}
        />
        {subHeading && subHeading}
        <TableComponent
          data={searchResults?.length > 0 ? searchResults : data}
          isLoading={isLoading}
        />
      </>
    );
  };
};

export default withTable;
