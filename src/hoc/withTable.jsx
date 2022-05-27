import React, { useEffect, useState } from "react";
import TableSearch from "../components/common/table/TableSearch";
import * as XLSX from 'xlsx/xlsx.mjs';
import { jsPDF } from "jspdf";
import 'jspdf-autotable'

const withTable = (TableComponent) => {
  return function WithNewTable({
    // keys,
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
    // const [downloadMetaData, setDownloadMetaData] = useState({ href: "", name: "" })
    let tableKeys = []

    console.log('data is', data)

    Array.isArray(data) && data.length &&
      tableKeys.push(Object.keys(data[0]))


    let formattedData = []
    Array.isArray(data) && data.length &&
      data.map((row) => {

        return formattedData.push(Object.values(row))

      })

      let formattedKeys2 = []

      console.log('table keys original', tableKeys)
     
      const tableKeys2 =
      Array.isArray(data) && data.length &&
      tableKeys[0].filter((item) => {
        console.log('item is', item)
        return item !== 'status' && 'subject_of_procurement' && 'delivery_location' && 'createdAt'
      })

    // const formattedKeys = 
    console.log('filtered is', tableKeys2)

 
    

    // console.log('formattedData', formattedData2)
    // formattedData()

    const handleDownload = () => {
      // console.log('donwload function called')
      // const theData = downloadFile(arrayToCsv(data, keys), "application/vnd.ms-excel", "Thedata.xlsx")
      // setDownloadMetaData(theData)
      const doc = new jsPDF({
        orientation: 'landscape',
      })
      doc.text('IT services', 10, 10);
      doc.autoTable({
        theme: 'grid',
        columnStyles: { valign: 'center' },
        headStyles: { minCellWidth: 20 },
        head: tableKeys,
        body: formattedData
      })
      doc.save(
        `The Table.pdf`
      )
    }
    // console.log('the keys is', keys)
    // console.log('table  keys', formattedKeys)

    const downloadExcel = () => {
      const workSheet = XLSX.utils.json_to_sheet(formattedData)
      const workBook = XLSX .utils.book_new()
      XLSX.utils.book_append_sheet(workBook, workSheet, 'The table')

      //buffer
      let buf = XLSX.write(workBook, {bookType: 'xlsx', type: 'buffer'})
      //binary string
      XLSX.write(workBook, {bookType: 'xlsx', type: 'binary'})
      //donwload
      XLSX.writeFile(workBook, 'The table.xlsx')
    }

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
