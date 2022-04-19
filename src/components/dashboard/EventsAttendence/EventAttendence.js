import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";
import AttendenceTable from "./AttendenceTable/AttendenceTable";
import NewAttendence from "./NewAttendence/NewAttendence";
 
const EventAttendence = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(); 
  return (
    <>
      <SectionHeader title="Events Attendence" />
      <TableSearch btnLabel="Add Attendence" btnClick={onOpen} />
      <AttendenceTable /> 
      <Modal isOpen={isOpen} size="xl">
        <NewAttendence onClose={onClose} />
      </Modal>
    </>
  );
};

export default EventAttendence;
