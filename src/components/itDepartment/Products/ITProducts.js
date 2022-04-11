import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";
import FleetDatabaseForm from "../../forms/it/AddITProductForm";
import Modal from "../../common/Modal";
import CommonTable from "../CommonTable/CommonTable";

const Productdata = [
  {
    name: "MacBook Pro",
    brand: "Apple",
    category: "Laptop",
    class: "Pro Book",
    desc: "White 2015 Macbook pro with a 256GB hard drive an...",
    status: true,
    payStatus: false,
    date: "15/APR/2020",
    amount: "20,000",
    currency: "UGX",
  },
  {
    name: "MacBook Pro",
    brand: "Apple",
    category: "Laptop",
    class: "Pro Book",
    desc: "White 2015 Macbook pro with a 256GB hard drive an...",
    status: false,
    payStatus: true,
    date: "15/APR/2020",
    amount: "20,000",
    currency: "UGX",
  },
];

const ITProducts = () => {
  // const [data, setData] = useState([])

  const { isOpen, onOpen, onClose } = useDisclosure();

  // const onRowClick = (row) => { };
  return (
    <>
      <SectionHeader title="IT Products" />
      <TableSearch btnLabel="Add Product" btnClick={onOpen} />
      <CommonTable data={Productdata} isProducts={true} />

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

export default ITProducts;
