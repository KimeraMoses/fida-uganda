import React from "react";
import { useParams } from "react-router-dom";
import SectionHeader from "../../common/SectionHeader";
import EmployeeContractTable from "../../HumanResource/EmployeeContract/EmployeeContractTable/EmployeeContractTable";

const DatabaseOpen = () => {
  const { dbName } = useParams();
  return (
    <>
      <SectionHeader
        title={`Fida Database > ${dbName.replace(/-/g, " ")}`}
      />
      <EmployeeContractTable />
    </>
  );
};

export default DatabaseOpen;
