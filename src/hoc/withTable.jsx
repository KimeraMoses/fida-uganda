import React, { useEffect, useState } from "react";
import TableSearch from "../components/common/table/TableSearch";

const withTable = (TableComponent) => {
  return function WithNewTable({
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
