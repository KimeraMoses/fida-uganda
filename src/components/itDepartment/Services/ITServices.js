import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";
import AddITServiceForm from "../../forms/it/AddITServiceForm";
import Modal from "../../common/Modal";
import ITServicesTable from "./ITServicesTable";
import {useItServices, useAddItService} from "../../../hooks/useItServices";
import {
  itServicesInitialValues,
} from "../../forms/it/schemas/it";


const ITServices = () => {
  // const [data, setData] = useState([])

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, isLoading } = useItServices();

  console.log('data is', data)
  return (
    <>
      <SectionHeader title="IT Services" />
      <TableSearch btnLabel="Add Service" btnClick={onOpen} />
      <ITServicesTable data={data?.services} isLoading={isLoading} />

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Service Requisition Form"
      >
        <AddITServiceForm
              title="Allocations"
              initialValues={itServicesInitialValues}
              // validationSchema={itProductOrderSchema}
              onSuccess={onClose}
              success={`IT Service added successfully`}
              useMutate={useAddItService}
        />
      </Modal>
    </>
  );
};

export default ITServices;
