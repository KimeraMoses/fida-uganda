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

const Servicesdata = [
  {
    name: "Airtel Internet",
    brand: "Zombo",
    category: "Service",
    class: "Data",
    desc: "10 Mbs internet fibre for the Zombo feild office.",
    status: true,
    payStatus: false,
    date: "15/APR/2020",
    amount: "200,000",
    currency: "UGX",
  },
  {
    name: "Airtel Internet",
    brand: "Zombo",
    category: "Laptop",
    class: "Data",
    desc: "10 Mbs internet fibre for the Zombo feild office.",
    status: false,
    payStatus: true,
    date: "15/APR/2020",
    amount: "20,000",
    currency: "UGX",
  },
];

const ITServices = () => {
  // const [data, setData] = useState([])

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, isLoading } = useItServices();

  console.log('data is', data)
  return (
    <>
      <SectionHeader title="IT Services" />
      <TableSearch btnLabel="Add Service" btnClick={onOpen} />
      <ITServicesTable data={data?.services} />

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
