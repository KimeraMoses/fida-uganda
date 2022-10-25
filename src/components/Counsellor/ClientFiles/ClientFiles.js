import { useDisclosure } from "@chakra-ui/react";
import { useAddPatient, usePatients } from "../../../hooks/usePatients";
import { clientFilesColumns } from "../../../lib/tableColumns";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import Table from "../../common/TableComponent/Table";
import NewClientForm from "./NewClientForm/NewClientForm";
import { patientInitialValues, patientSchema } from "./NewClientForm/schema";

const ClientFiles = () => {
  const { isOpen, onClose } = useDisclosure();
  const { data, isLoading } = usePatients();
  return (
    <>
      <SectionHeader title="Client Files" />
      {data?.patients && (
        <Table
          isLoading={isLoading}
          data={data ? data?.patients : null}
          btnLabel="Add Client"
          tableName="Client Files"
          columns={clientFilesColumns}
        />

        // <ClientFilesTable
        //   data={data?.patients}
        //   btnLabel="Add Client"
        //   btnClick={onOpen}
        // />
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
