import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import Modal from "../common/Modal";
import SectionHeader from "../common/SectionHeader";
import IncomingTask from "./IncomingTasks/IncomingTask";
import InProgressTask from "./InProgressTasks/InProgressTask";
import NewTaskForm from "./NewTask/NewTaskForm";
import SubHeading from "./SubHeading/SubHeading";

const Tasks = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <SectionHeader title="Tasks" />
      <SubHeading title="incoming Tasks" />
      <IncomingTask onOpen={onOpen} />
      <SubHeading title="In Progress" />
      <InProgressTask />
      <SubHeading title="Completed" />
      <InProgressTask />
      <Modal isOpen={isOpen} onClose={onClose} title="Create a Task">
        <NewTaskForm />
      </Modal>
    </>
  );
};

export default Tasks;
