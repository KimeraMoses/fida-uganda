// import { useState } from 'react'
import SectionHeader from "../common/SectionHeader";
// import Table from "../common/Table";
import { itServicesColumns } from "../../assets/tableColumns/itDepartment";
// import { useDisclosure } from "@chakra-ui/react";
// import Modal from "../common/Modal";
// import AddITProductForm from "../forms/it/AddITProductForm";


const ITServices = () => {
  // const [data, setdata] = useState([])

  // const { isOpen, onOpen, onClose } = useDisclosure();

  const onRowClick = (row) => { };
  return (
    <>
      <SectionHeader title="IT Services" />
      // <Table
      //   data={data}
      //   columns={itServicesColumns}
      //   onRowClick={onRowClick}
      //   btnLabel="Add Service"
      //   btnClick={onOpen}
      // />
      // <Modal isOpen={isOpen} onClose={onClose} title="IT Services">
      //   <AddITProductForm
        // onSubmit={mutate}
        // isSubmitting={isSubmitting}
        // isError={isError}
        // error={error}
      //   />
      // </Modal>
    </>
  );
};

export default ITServices;
