import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import SectionHeader from "../../common/SectionHeader";
import AddITServiceForm from "../../forms/it/AddITServiceForm";
import Modal from "../../common/Modal";
import ITServicesTable from "./ITServicesTable";
import { useItServices, useAddItService } from "../../../hooks/useItServices";
import {
  itServicesInitialValues,
  itServiceSchema,
} from "../../forms/it/schemas/it";
import Loader from "../../common/UI/Loader/Loader";

const ITServices = () => {
  // const [data, setData] = useState([])

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, isLoading } = useItServices();

  return (
    <>
      <SectionHeader title="IT Services" />
      {isLoading ? (
        <Loader />
      ) : (
        <ITServicesTable
          data={data?.services}
          isLoading={isLoading}
          btnLabel="Add Service"
          btnClick={onOpen}
          keysToFilterOut={[
            "status",
            "createdBy",
            // "expiry_date",
            // "purchase_date",
            // "updateAt",
            // "id",
          ]}
          tableName="IT Services"
        />
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
