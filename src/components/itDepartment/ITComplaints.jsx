import { useState } from 'react'
import SectionHeader from "../common/SectionHeader";
import Table from "../common/Table";
import { itComplaintsColumns } from "../../assets/tableColumns/itDepartment";
// import { useDisclosure } from "@chakra-ui/react";


const ITComplaints = () => {
  const [data, setdata] = useState([])


  const onRowClick = (row) => { };
  return (
    <>
      <SectionHeader title="IT Complaints" />
      <Table
        data={data}
        columns={itComplaintsColumns}
        onRowClick={onRowClick}
      />
    </>
  );
};

export default ITComplaints;
