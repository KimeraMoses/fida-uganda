import { useState } from 'react'
import SectionHeader from "../common/SectionHeader";
import Table from "../common/Table";
import { itProductsColumns } from "../../assets/tableColumns/itDepartment";
import { useDisclosure } from "@chakra-ui/react";
import Modal from "../common/Modal";
import AddITProductForm from "../forms/it/AddITProductForm";


const ITProducts = () => {
  const [data, setdata] = useState([])

  const { isOpen, onOpen, onClose } = useDisclosure();

  const onRowClick = (row) => { };
  return (
    <>
      <SectionHeader title="IT Products" />
      <Table
        data={data}
        columns={itProductsColumns}
        onRowClick={onRowClick}
        btnLabel="Add Product"
        btnClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose} title="IT Product Requisition Form">
        <AddITProductForm
        // onSubmit={mutate}
        // isSubmitting={isSubmitting}
        // isError={isError}
        // error={error}
        />
      </Modal>
    </>
  );
};

export default ITProducts;
