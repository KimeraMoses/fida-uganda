import React, { useEffect, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import SectionHeader from "../../common/SectionHeader";
import AddITServiceForm from "../../forms/it/AddITServiceForm";
import Modal from "../../common/Modal";
import { useItServices, useAddItService } from "../../../hooks/useItServices";
import {
  itServicesInitialValues,
  itServiceSchema,
} from "../../forms/it/schemas/it";
import Loader from "../../common/UI/Loader/Loader";
import { itServicesColumns } from "../../../lib/tableColumns";
import TableComponent from "../../common/TableComponent/TableComponent";

const ITServices = () => {
  const { isOpen, onClose } = useDisclosure();
  const { data: itServicesData, isLoading } = useItServices();
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([]);
    if (itServicesData?.services?.length) {
      const dataToSet = itServicesData?.services?.map((b) => {
        return {
          ...b,
          name: {
            name: b?.name,
            location: b?.delivery_location,
          },
          category: {
            category: b?.category ? b?.category : "N/A",
            class: b?.class,
          },
          amount: {
            amount: b?.amount,
            currency: b?.currency,
          },
          payment_status: {
            payment_status: b?.payment_status ? b?.payment_status : "N/A",
            purchase_date: b?.purchase_date ? b?.purchase_date : "N/A",
          },
          status: {
            status: b?.status,
            isPaid: b?.status === "paid" ? true : false,
          },
        };
      });
      // console.log('it data', dataToSet)
      setData(dataToSet);
    }
  }, [itServicesData]);

  return (
    <>
      <SectionHeader title="IT Services" />
      {isLoading ? (
        <Loader />
      ) : (
        <TableComponent
          isLoading={isLoading}
          data={data ? data : null}
          btnLabel="Add Service"
          tableName="IT Services"
          columns={itServicesColumns}
        />
        // <ITServicesTable
        //   data={itServicesData?.services}
        //   isLoading={isLoading}
        //   btnLabel="Add Service"
        //   btnClick={onOpen}
        //   keysToFilterOut={[
        //     "status",
        //     "createdBy",
        //     // "expiry_date",
        //     // "purchase_date",
        //     // "updateAt",
        //     // "id",
        //   ]}
        //   tableName="IT Services"
        // />
      )}
      <Modal isOpen={isOpen} onClose={onClose} title="Service Requisition Form">
        <AddITServiceForm
          initialValues={itServicesInitialValues}
          validationSchema={itServiceSchema}
          onSuccess={onClose}
          success={`IT Service added successfully`}
          useMutate={useAddItService}
          tableName="IT Services"
        />
      </Modal>
    </>
  );
};

export default ITServices;
