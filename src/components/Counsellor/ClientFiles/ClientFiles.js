import { useDisclosure } from "@chakra-ui/react";
import { useAddPatient, usePatients } from "../../../hooks/usePatients";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import ClientFilesTable from "./ClientFilesTable/ClientFilesTable";
import NewClientForm from "./NewClientForm/NewClientForm";
import { patientInitialValues, patientSchema } from "./NewClientForm/schema";

const ClientFiles = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data } = usePatients();

  return (
    <>
      <SectionHeader title="Client Files" />
      {data?.patients && (
        <ClientFilesTable
          data={data?.patients}
          btnLabel="Add Client"
          btnClick={onOpen}
        />
      )}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Patient Profiling Form"
        size="xl"
      >
        <NewClientForm
          initialValues={patientInitialValues}
          validationSchema={patientSchema}
          onSuccess={onClose}
          success={"Client added successfully"}
          useMutate={useAddPatient}
        />
      </Modal>
    </>
  );
};

export default ClientFiles;
