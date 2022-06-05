import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import SectionHeader from "../../common/SectionHeader";
import ITProductForm from "../../forms/it/AddITProductForm";
import {
  itProductInitialValues,
  itProductOrderSchema,
} from "../../forms/it/schemas/it";
import Modal from "../../common/Modal";
import ITProductsTable from "./ITProductsTable";
import { useAddItProduct, useItProducts } from "../../../hooks/useItProduct";

const ITProducts = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, isLoading } = useItProducts();

  return (
    <>
      <SectionHeader title="IT Products" />
      <ITProductsTable
        data={data?.ITProducts}
        isProducts={true}
        isLoading={isLoading}
        btnLabel="Add Product"
        btnClick={onOpen}
        keysToFilterOut={[
          "project_name",
          "brand",
          "id",
          "createdAt",
          "ITProduct_roles",
          "updateAt",
          "date_required",
          'budget_year',
          'name',
          'currency',
          'class',
          'registeredBy'
        ]}
        tableName="IT Products"
      />

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="IT Product Requisition Form"
      >
        <ITProductForm
          title="It Products"
          initialValues={itProductInitialValues}
          validationSchema={itProductOrderSchema}
          onSuccess={onClose}
          success={`IT Product added successfully`}
          useMutate={useAddItProduct}
        />
      </Modal>
    </>
  );
};

export default ITProducts;
