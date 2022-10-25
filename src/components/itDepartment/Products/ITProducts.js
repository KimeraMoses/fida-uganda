import React, { useEffect, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import SectionHeader from "../../common/SectionHeader";
import ITProductForm from "../../forms/it/AddITProductForm";
import {
  itProductInitialValues,
  itProductOrderSchema,
} from "../../forms/it/schemas/it";
import Modal from "../../common/Modal";
import { useAddItProduct, useItProducts } from "../../../hooks/useItProduct";
import Loader from "../../common/UI/Loader/Loader";
import Table from "../../common/TableComponent/Table";
import { itProductsColumns } from "../../../lib/tableColumns";

const ITProducts = () => {
  const { isOpen, onClose } = useDisclosure();
  const { data: itProductsData, isLoading } = useItProducts();

  const [data, setData] = useState([]);
  useEffect(() => {
    setData([]);
    if (itProductsData?.ITProducts?.length) {
      const dataToSet = itProductsData?.ITProducts?.map((b) => {
        return {
          ...b,
          name: {
            name: b?.brand,
            location: b?.delivery_location,
          },
          category: {
            category: b?.category ? b?.category : "N/A",
            class: b?.class,
          },
          amount: {
            amount: b?.amount,
            currency: b?.currency
          },
            payment_status:{
              payment_status:b?.payment_status ? b?.payment_status : 'N/A',
              purchase_date: b?.purchase_date ? b?.purchase_date : 'N/A'
            }
        };
      });
      console.log('it data', dataToSet)
      setData(dataToSet);
    }
  }, [itProductsData]);

  return (
    <>
      <SectionHeader title="IT Products" />
      {isLoading ? (
        <Loader />
      ) : (
        <Table
        isLoading={isLoading}
        data={data ? data : null}
        btnLabel="Add Product"
        tableName="IT Products"
        columns={itProductsColumns}
        hideActions
      />
        
        // <ITProductsTable
        //   data={data?.ITProducts}
        //   isProducts={true}
        //   isLoading={isLoading}
        //   btnLabel="Add Product"
        //   btnClick={onOpen}
        //   keysToFilterOut={[
        //     "project_name",
        //     "brand",
        //     "id",
        //     "createdAt",
        //     "ITProduct_roles",
        //     "updateAt",
        //     "date_required",
        //     "budget_year",
        //     "name",
        //     "currency",
        //     "class",
        //     "status",
        //     "registeredBy",
        //   ]}
        //   tableName="IT Products"
        // />
      )}
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
          // useMutate={onSubmitAlert}
        />
      </Modal>
    </>
  );
};

export default ITProducts;
