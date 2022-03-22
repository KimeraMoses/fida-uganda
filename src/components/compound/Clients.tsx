import { Row } from "react-table";
import { useClients } from "../../hooks/useClients";
import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import { toastError } from "../../lib/toastDetails";
import SectionHeader from "../common/SectionHeader";
import Table from "../common/Table";
import { clientsColumns } from "../../assets/tableColumns/clients";

const Clients = () => {
  const { data, isLoading, isError, error } = useClients();
  const toast = useToast();

  useEffect(() => {
    if (isError) {
      toast(toastError(error));
    }
  }, [isError, error, toast]);

  const onRowClick = (row: Row) => {};

  return (
    <>
      <SectionHeader title="Clients" />
      <Table
        data={data?.clients}
        columns={clientsColumns}
        isLoading={isLoading}
        onRowClick={onRowClick}
        showBtn={false}
      />
    </>
  );
};

export default Clients;
