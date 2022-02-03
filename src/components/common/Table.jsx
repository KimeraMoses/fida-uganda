import NoDataTable from "./NoDataTable";
import DisplayTable from "./DisplayTable";

function Table({
  data,
  columns,
  caption,
  btnLabel,
  btnClick,
  onRowClick,
  showBtn,
  showSearch,
  showPagination,
}) {
  if (data.length > 0) {
    return (
      <DisplayTable
        data={data}
        columns={columns}
        onRowClick={onRowClick}
        caption={caption}
        btnLabel={btnLabel}
        btnClick={btnClick}
        showBtn={showBtn}
        showSearch={showSearch}
        showPagination={showPagination}
      />
    );
  }

  return (
    <NoDataTable btnClick={btnClick} btnLabel={btnLabel} showBtn={showBtn} />
  );
}

export default Table;
