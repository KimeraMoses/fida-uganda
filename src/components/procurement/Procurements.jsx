import React from "react";
import SectionHeader from "../common/SectionHeader";
import ProcurementTable from "./ProcurementTable";

const Procurements = () => {
  return (
    <>
      <SectionHeader title="Procurement" />
      <ProcurementTable isLoading={false} data={[]} />
    </>
  );
};

export default Procurements;
