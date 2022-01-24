import React from "react";
import NoDataTable from "./NoDataTable";
import DisplayTable from "./DisplayTable";

function Table({ data, columns, caption, btnLabel, btnClick, showBtn }) {
  if (data.length > 0) {
    return (
      <DisplayTable
        data={data}
        columns={columns}
        caption={caption}
        btnLabel={btnLabel}
        btnClick={btnClick}
        showBtn={showBtn}
      />
    );
  }

  return <NoDataTable />;
}

export default Table;
