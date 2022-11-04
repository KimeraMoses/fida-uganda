import { useDisclosure } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useClientId } from "../../../hooks/useClients";
import { useAddPatient, usePatients } from "../../../hooks/usePatients";
import { clientFilesColumns } from "../../../lib/tableColumns";
import { selectClient } from "../../../store/clientReducer";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import Table from "../../common/TableComponent/Table";
import NewClientForm from "./NewClientForm/NewClientForm";
import { patientInitialValues, patientSchema } from "./NewClientForm/schema";

const ClientFiles = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, isLoading } = usePatients();
  const client = useClientId()
const dispatch = useDispatch()
  const onEditHandler = (client) => {
    dispatch(
      selectClient(data?.patients?.find((el) => el?.id === client?.id))
    );
    onOpen();
  };

  const addClientId = (values) => {
    dispatch(selectClient(values));
    return { ...values, id: data?.patients?.id };
  };

  const mutateInitialValues = (initialValues) => {
    if (client) {
      let { registeredBy, ...newValues } = client;
      return { ...initialValues, ...newValues };
    }
    return initialValues;
  };

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
          onEditHandler={onEditHandler}
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
        isEdit={client?true:false}
          initialValues={patientInitialValues}
          validationSchema={patientSchema}
          onSuccess={onClose}
          success={"Client added successfully"}
          useMutate={useAddPatient}
          mutateData={addClientId}
          mutateInitialValues={mutateInitialValues}
        />
      </Modal>
    </>
  );
};

export default ClientFiles;
