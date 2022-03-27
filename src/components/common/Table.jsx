import ShowTable from "./table/Table";
import { Center, Spinner } from "@chakra-ui/react";

const Table = ({
  data,
  columns,
  onRowClick,
  isLoading,
  btnLabel,
  btnClick,
  showBtn,
}) => {
  if (isLoading || data === undefined) {
    return (
      <Center>
        <Spinner />
      </Center>
    );
  }
  return (
    <ShowTable
      data={data}
      columns={columns}
      onRowClick={onRowClick}
      showBtn={showBtn}
      btnLabel={btnLabel}
      btnClick={btnClick}
    />
  );
};

export default Table;
