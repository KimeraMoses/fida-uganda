import TableSearch from "../../common/table/TableSearch";
import SectionHeader from "../../common/SectionHeader";
import { useDisclosure } from "@chakra-ui/react";
import Modal from "../../common/Modal";
import CLVTable from "./CLVTable/ClvTable";
import NewClvForm from "./CLVForms/NewClvForm";
import { useClvs, useAddClv } from "../../../hooks/useClv";
import { clvInitialValues } from "./CLVForms/schema";

const CLVs = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, isLoading } = useClvs();

  return (
    <>
      <SectionHeader title="CLVs" />
      <TableSearch btnLabel="Add CLV" btnClick={onOpen} />
      {data?.clvs && <CLVTable data={data?.clvs} isLoading={isLoading} />}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <NewClvForm
          action="newClv"
          onClose={onClose}
          initialValues={clvInitialValues}
          useMutate={useAddClv}
          onSuccess={onClose}
          success={"CLV added successfully"}
        />
      </Modal>
    </>
  );
};

export default CLVs;
