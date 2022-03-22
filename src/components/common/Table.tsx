import { Row } from "react-table";
import ShowTable from "./table/Table";
import { Heading, Center, Spinner } from "@chakra-ui/react";

type Props = {
  data: any[] | undefined;
  columns: any[];
  onRowClick: (row: Row<any>) => void;
  isLoading: boolean;
};

const Table = ({ data, columns, onRowClick, isLoading }: Props) => {
  if (isLoading) {
    return (
      <Center>
        <Spinner />
      </Center>
    );
  }
  if (!data) {
    return <Heading>No data</Heading>;
  }
  return <ShowTable data={data} columns={columns} onRowClick={onRowClick} />;
};

export default Table;
