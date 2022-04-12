import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";
import FleetDatabaseForm from "../../forms/it/AddITProductForm";
import Modal from "../../common/Modal";
import CommonTable from "../CommonTable/CommonTable";

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

  return (
    <>
      <SectionHeader title="IT Services" />
      <TableSearch btnLabel="Add Service" btnClick={onOpen} />
      <CommonTable data={Servicesdata} />

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="IT Product Requisition Form"
      >
        <FleetDatabaseForm
        // onSubmit={mutate}
        // isSubmitting={isSubmitting}
        // isError={isError}
        // error={error}
        />
      </Modal>
    </>
  );
};

export default ITServices;
