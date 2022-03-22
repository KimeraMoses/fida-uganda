import { Row } from "react-table";
import ShowTable from "./table/Table";
import { Center, Spinner } from "@chakra-ui/react";

type Props = {
  data: any[] | undefined;
  columns: any[];
  onRowClick: (row: Row<any>) => void;
  isLoading: boolean;
  btnLabel?: string;
  btnClick?: () => void;
  showBtn?: boolean;
};

const Table = ({
  data,
  columns,
  onRowClick,
  isLoading,
  btnLabel,
  btnClick,
  showBtn,
}: Props) => {
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
