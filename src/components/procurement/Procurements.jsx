import React from "react";
import { useApprovedRequisitions } from "../../hooks/useRequisitions";
import SectionHeader from "../common/SectionHeader";
import ProcurementTable from "./ProcurementTable";
import Loader from "../common/UI/Loader/Loader";

const Procurements = () => {
  const { data, isLoading } = useApprovedRequisitions();
  return (
    <>
      <SectionHeader title="Procurement" />
      {isLoading ? (
        <Loader />
      ) : (
        <ProcurementTable
          data={data?.Requisitions}
          isProducts={true}
          isLoading={isLoading}
          btn={false}
        />
      )}
    </>
  );
};

export default Procurements;
