import React, { useEffect } from "react";
import { SimpleGrid, useToast } from "@chakra-ui/react";
import TaskCard from "../TaskCard/TaskCard";
import classes from "./InProgressTask.module.css";
import { useEditTask } from "../../../hooks/useTasks";
import { toastError, toastSuccess } from "../../../lib/toastDetails";

const InProgressTask = (props) => {
  const toast = useToast();
  const {
    mutate,
    isLoading: isChangingStatus,
    isSuccess,
    isError,
    error,
  } = useEditTask();
  const btnLabel = "Mark as Completed";
  const onChangeStatus = (task) => {
    mutate({ id: task, status: "completed" });
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
      className={classes.progress_tasks_wrapper}
    >
      {props.tasks.map((task) =>
        task.status === "pending" ? (
          <TaskCard
            key={task.id}
            task={task}
            onChangeStatus={onChangeStatus}
            btnLabel={btnLabel}
            isChangingStatus={isChangingStatus}
          />
        ) : null
      )}
    </SimpleGrid>
  );
};

export default InProgressTask;
