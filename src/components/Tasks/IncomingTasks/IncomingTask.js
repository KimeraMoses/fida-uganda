import React, { useEffect } from "react";
import { SimpleGrid, useToast } from "@chakra-ui/react";
import TaskCard from "../TaskCard/TaskCard";
import classes from "./IncomingTasks.module.css";
import NewTaskCard from "../NewTask/NewTaskCard";
import { useEditTask } from "../../../hooks/useTasks";
import { toastError, toastSuccess } from "../../../lib/toastDetails";

const IncomingTask = (props) => {
  const toast = useToast();
  const {
    mutate,
    isLoading: isChangingStatus,
    isSuccess,
    isError,
    error,
  } = useEditTask();
  const btnLabel = "Mark as Pending";
  const onChangeStatus = (taskId) => {
    mutate({ id: taskId, status: "pending" });
  };

  useEffect(() => {
    if (isSuccess) {
      toast(toastSuccess("Task Updated Successfully"));
    }
    if (isError) {
      toast(toastError(error));
    }
  }, [isSuccess, isError, error, toast]);

  return (
    <SimpleGrid
      columns={3}
      spacing={4}
      className={classes.incoming_tasks_wrapper}
    >
      <NewTaskCard onOpen={props.onOpen} />
      {props.tasks.map((task) =>
        task.status === "todo" ? (
          <TaskCard
            key={task.id}
            task={task}
            btnLabel={btnLabel}
            onChangeStatus={onChangeStatus}
            isChangingStatus={isChangingStatus}
          />
        ) : null
      )}
    </SimpleGrid>
  );
};

export default IncomingTask;
