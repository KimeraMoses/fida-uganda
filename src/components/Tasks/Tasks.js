import { useDisclosure, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Modal from "../common/Modal";
import SectionHeader from "../common/SectionHeader";
import IncomingTask from "./IncomingTasks/IncomingTask";
import InProgressTask from "./InProgressTasks/InProgressTask";
import NewTaskForm from "./NewTask/NewTaskForm";
import SubHeading from "./SubHeading/SubHeading";
import { useAddTask, useTasks } from "../../hooks/useTasks";
import { toastSuccess } from "../../lib/toastDetails";
import CompletedTask from "./InProgressTasks/CompletedTask";

const Tasks = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { mutate, isError, error, isSuccess } = useAddTask();
  const toast = useToast();
  const { data } = useTasks();

  useEffect(() => {
    if (isSuccess) {
      toast(toastSuccess("Task Added Successfully"));
    }
  }, [isSuccess, toast]);

  return (
    <>
      <SectionHeader title="Tasks" />
      <SubHeading title="incoming Tasks" />
      {data && <IncomingTask onOpen={onOpen} tasks={data.tasks} />}
      <SubHeading title="In Progress" />
      {data && <InProgressTask tasks={data.tasks} />}
      <SubHeading title="Completed" />
      {data && <CompletedTask tasks={data.tasks} />}
      <Modal isOpen={isOpen} onClose={onClose} title="Create a Task">
        <NewTaskForm onSubmit={mutate} error={error} isError={isError} />
      </Modal>
    </>
  );
};

export default Tasks;
