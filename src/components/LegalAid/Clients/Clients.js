import React from "react";
import TableSearch from "../../common/table/TableSearch";
import SectionHeader from "../../common/SectionHeader";
import ClientsTable from "./ClientsTable/ClientsTable";
import { useClients } from "../../../hooks/useClients";

const Clients = () => {
  const { data } = useClients();

  return (
    <>
      <SectionHeader title="Clients" />
      <TableSearch showBtn={false} />
      {data && <ClientsTable data={data.clients} />}
    </>
  );
};

export default Clients;
