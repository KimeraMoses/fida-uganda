import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import { useAddEvent, useEvents } from "../../../hooks/useEvents";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
// import TableSearch from "../../common/table/TableSearch";
import Loader from "../../common/UI/Loader/Loader";
import AttendenceTable from "./AttendenceTable/AttendenceTable";
import NewAttendence from "./NewAttendence/NewAttendence";
import { attendanceInitialValues, attendanceSchema } from "./NewAttendence/schema";

const EventAttendence = () => {
  const { isOpen, onClose } = useDisclosure();
  const { data, isLoading } = useEvents();

  return (
    <>
      <SectionHeader title="Events Attendence" />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {/*<TableSearch btnLabel="Add Attendence" btnClick={onOpen} />*/}
          {data?.events && <AttendenceTable data={data?.events} />}
        </>
      )}
      <Modal isOpen={isOpen} size="xl" title="Event Attendance"  onClose={onClose}>
        <NewAttendence
          validationSchema={attendanceSchema}
          initialValues={attendanceInitialValues}
          onSuccess={onClose}
          onClose={onClose}
          success={`Event added successfully`}
          useMutate={useAddEvent}
         
        />
      </Modal>
    </>
  );
};

export default EventAttendence;
