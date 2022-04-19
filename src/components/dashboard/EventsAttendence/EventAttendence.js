import { useDisclosure, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useAddEvent, useEvents } from "../../../hooks/useEvents";
import { toastSuccess } from "../../../lib/toastDetails";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";
import AttendenceTable from "./AttendenceTable/AttendenceTable";
import NewAttendence from "./NewAttendence/NewAttendence";

const EventAttendence = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data } = useEvents();
  const { mutate, isLoading, isSuccess, isError, error } = useAddEvent();

  useEffect(() => {
    if (isSuccess) {
      toast(toastSuccess("Event added successfully"));
      onClose();
    }
  }, [isSuccess, onClose, toast]);

  return (
    <>
      <SectionHeader title="Events Attendence" />
      <TableSearch btnLabel="Add Attendence" btnClick={onOpen} />
      {data?.events && <AttendenceTable data={data?.events} />}
      <Modal isOpen={isOpen} size="xl">
        <NewAttendence
          onClose={onClose}
          onSubmit={mutate}
          isSubmitting={isLoading}
          error={error}
          isError={isError}
        />
      </Modal>
    </>
  );
};

export default EventAttendence;
