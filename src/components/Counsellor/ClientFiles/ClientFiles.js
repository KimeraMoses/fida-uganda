import { useDisclosure } from "@chakra-ui/react";
import { useAddPatient, usePatients } from "../../../hooks/usePatients";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";
import ClientFilesTable from "./ClientFilesTable/ClientFilesTable";
import NewClientForm from "./NewClientForm/NewClientForm";
import { patientInitialValues } from "./NewClientForm/schema";

const ClientFiles = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data } = usePatients();

  return (
    <>
      <SectionHeader title="Client Files" />
      <TableSearch btnLabel="Add Client" btnClick={onOpen} />
      {data?.patients && <ClientFilesTable data={data?.patients} />}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Patient Profiling Form"
        size="xl"
      >
        <NewClientForm
          initialValues={patientInitialValues}
          onSuccess={onClose}
          success={"Client added successfully"}
          useMutate={useAddPatient}
        />
      </Modal>
    </>
  );
};

export default ClientFiles;
