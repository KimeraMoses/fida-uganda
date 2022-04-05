import { useDisclosure, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useAddPatient, usePatients } from "../../../hooks/usePatients";
import { toastSuccess } from "../../../lib/toastDetails";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";
import ClientFilesTable from "./ClientFilesTable/ClientFilesTable";
import NewClientForm from "./NewClientForm/NewClientForm";

const ClientFiles = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const { data } = usePatients();
  const { mutate, isError, error, isLoading, isSuccess } = useAddPatient();

  useEffect(() => {
    if (isSuccess) {
      toast(toastSuccess("Client added successfully"));
      onClose();
    }
  });

  console.log(data?.patients);

  return (
    <>
      <SectionHeader title="Client Files" />
      <TableSearch btnLabel="Add Client" btnClick={onOpen} />
      {data && data?.patients.length > 0 ? (
        <ClientFilesTable data={data.patients} />
      ) : null}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Patient Profiling Form"
        size="xl"
      >
        <NewClientForm
          isError={isError}
          error={error}
          isSubmitting={isLoading}
          onSubmit={mutate}
        />
      </Modal>
    </>
  );
};

export default ClientFiles;
