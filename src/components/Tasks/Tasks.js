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
  const { mutate, isError, error, isSuccess, isLoading } = useAddTask();
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
      {data?.tasks && <IncomingTask onOpen={onOpen} tasks={data?.tasks} />}
      <SubHeading title="In Progress" />
      {data?.tasks && <InProgressTask tasks={data?.tasks} />}
      <SubHeading title="Completed" />
      {data?.tasks && <CompletedTask tasks={data?.tasks} />}
      <Modal isOpen={isOpen} onClose={onClose} title="Create a Task" size="2xl">
        <NewTaskForm
          onSubmit={mutate}
          error={error}
          isError={isError}
          isSubmitting={isLoading}
        />
      </Modal>
    </>
  );
};

export default Tasks;
