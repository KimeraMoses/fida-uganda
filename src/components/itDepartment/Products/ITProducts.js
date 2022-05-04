import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";
import ITProductForm from "../../forms/it/AddITProductForm";
import { itProductInitialValues } from "../../forms/it/schemas/it";
import Modal from "../../common/Modal";
import ITProductsTable from "./ITProductsTable";
import { useAddItProduct, useItProducts} from "../../../hooks/useItProduct";

const ITProducts = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data } = useItProducts();

  return (
    <>
      <SectionHeader title="IT Products" />
      <TableSearch btnLabel="Add Product" btnClick={onOpen} />
      <ITProductsTable data={data?.ITProducts} isProducts={true} />

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="IT Product Requisition Form"
      >
        <ITProductForm
          title="It Products"
          initialValues={itProductInitialValues}
          // validationSchema={itProductOrderSchema}
          onSuccess={onClose}
          success={`IT Product added successfully`}
          useMutate={useAddItProduct}
        />
      </Modal>
    </>
  );
};

export default ITProducts;
