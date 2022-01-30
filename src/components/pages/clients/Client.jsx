import { useDisclosure } from "@chakra-ui/react";
import { dummyDataTravel } from "../../../defaultData/dummyData";
import GenericModal from "../../common/GenericModal";
import StatCard from "../../common/StatCard";
import Table from "../../common/Table";
import { travelOrderColumns } from "../../tables/travelOrder/travelOrder";

function Client() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const openTable = () => {
    onOpen();
  };
  return (
    <>
      <StatCard title="Client" value={2} onClick={openTable} />
      <GenericModal isOpen={isOpen} onClose={onClose}>
        <Table
          data={dummyDataTravel}
          columns={travelOrderColumns}
          btnLabel={"New Travel Order"}
        />
      </GenericModal>
      s
    </>
  );
}

export default Client;
