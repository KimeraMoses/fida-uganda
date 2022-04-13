import React, { useEffect } from "react";
import TableSearch from "../../common/table/TableSearch";
import SectionHeader from "../../common/SectionHeader";
import { useDisclosure, useToast } from "@chakra-ui/react";
import Modal from "../../common/Modal";
import CLVTable from "./CLVTable/ClvTable";
import NewClvForm from "./CLVForms/NewClvForm";
import { useClvs, useAddClv } from "../../../hooks/useClv";
import { toastSuccess } from "../../../lib/toastDetails";
import { useProjectOptions } from "../../../hooks/useProjects";

const CLVs = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const projects = useProjectOptions();
  const { data } = useClvs();
  const { mutate, isError, error, isSuccess, isLoading } = useAddClv();
  const toast = useToast();

  useEffect(() => {
    if (isSuccess) {
      toast(toastSuccess("CLV added successfully"));
      onClose();
    }
  }, [isSuccess, toast, onClose]);

  return (
    <>
      <SectionHeader title="CLVs" />
      <TableSearch btnLabel="Add CLV" btnClick={onOpen} />
      {data?.clvs && <CLVTable data={data?.clvs} />}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <NewClvForm
          action="newClv"
          onClose={onClose}
          onSubmit={mutate}
          isError={isError}
          error={error}
          isSubmitting={isLoading}
          projects={projects}
        />
      </Modal>
    </>
  );
};

export default CLVs;
