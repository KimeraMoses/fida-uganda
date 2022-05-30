import React, { useEffect, useState } from "react";
import TableSearch from "../components/common/table/TableSearch";
import * as XLSX from "xlsx/xlsx.mjs";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const withTable = (TableComponent) => {
  return function WithNewTable({
    tableName,
    data,
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

    let formattedData = [];
    Array.isArray(data) &&
      data.length &&
      data.map((row) => {
        return formattedData.push(Object.values(row));
      });

      console.log('keys',tableKeys);




    const handleDownload = () => {
      const doc = new jsPDF({
        orientation: "landscape",
      });
      doc.text(`${tableName}`, 10, 10);
      doc.autoTable({
        theme: "grid",
        columnStyles: { valign: "center" },
        headStyles: { minCellWidth: 20 },
        head: tableKeys,
        body: formattedData,
      });
      doc.save(`${tableName}-${new Date().toLocaleString("en-GB")}.pdf`);
    };
    
    const downloadExcel = () => {
      const workSheet = XLSX.utils.json_to_sheet(formattedData);
      const workBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workBook, workSheet, "Sheet1");

    
      //binary string
      XLSX.write(workBook, { bookType: "xlsx", type: "binary" });
      //donwload
      XLSX.writeFile(workBook, `${tableName}.xlsx`);
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
          isLoading={isLoading}
          data={searchResults.length > 0 ? searchResults : data}
        />
      </>
    );
  };
};

export default withTable;
