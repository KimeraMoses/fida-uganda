import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";
import FidaAssetsTable from "./FidaAssetsTable/FidaAssetsTable";
import NewAsset from "./NewAsset/NewAsset";

const FidaAssets = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <SectionHeader title="Approvals" />
      <TableSearch btnLabel="Add Notes" btnClick={onOpen} />
      <FidaAssetsTable />
      <Modal isOpen={isOpen} onClose={onClose} title="Asset Entry Form">
        <NewAsset/>
      </Modal>
    </>
  );
};

export default FidaAssets;
