import React from "react";
import { useApprovedRequisitions } from "../../hooks/useRequisitions";
import SectionHeader from "../common/SectionHeader";
import ProcurementTable from "./ProcurementTable";
import Loader from "../common/UI/Loader/Loader";
import { procurementsTableColumns } from "../../lib/tableColumns";
import Table from "../common/TableComponent/Table";

const Procurements = () => {
  const { data, isLoading } = useApprovedRequisitions();
  return (
    <>
      <SectionHeader title="Procurement" />
      {isLoading ? (
        <Loader />
      ) : (
        <Table
        isLoading={isLoading}
        data={data ? data?.Requisitions : null}
        showBtn={false}
        tableName="Procurements"
        columns={ procurementsTableColumns}
      />
        
        // <ProcurementTable
        //   data={data?.Requisitions}
        //   isProducts={true}
        //   isLoading={isLoading}
        //   btn={false}
        // />
      )}
    </>
  );
};

export default Procurements;
