import React from "react";
import NoDataTable from "./NoDataTable";
import DisplayTable from "./DisplayTable";

function Table({
  data,
  columns,
  caption,
  btnLabel,
  btnClick,
  showBtn,
  showSearch,
  showPagination,
}) {
  if (data.length > 0) {
    return (
      <DisplayTable
        data={data}
        columns={columns}
        caption={caption}
        btnLabel={btnLabel}
        btnClick={btnClick}
        showBtn={showBtn}
        showSearch={showSearch}
        showPagination={showPagination}
      />
    );
  }

  return <NoDataTable />;
}

export default Table;
