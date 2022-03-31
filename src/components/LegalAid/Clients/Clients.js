import React from "react";
import TableSearch from "../../common/table/TableSearch";
import SectionHeader from "../../common/SectionHeader";
import ClientsTable from "./ClientsTable/ClientsTable";

const Clients = () => {
  return (
    <>
      <SectionHeader title="Clients" />
      <TableSearch showBtn={false} />
      <ClientsTable />
    </>
  );
};

export default Clients;
