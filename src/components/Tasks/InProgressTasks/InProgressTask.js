import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import TaskCard from "../TaskCard/TaskCard";
import classes from "./InProgressTask.module.css";
import { useEditTask } from "../../../hooks/useTasks";

const InProgressTask = (props) => {
  const { mutate } = useEditTask();
  const btnLabel = "Mark as Completed";
  const onChangeStatus = (task) => {
    mutate({ id: task, status: "completed" });
  };

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
          />
        ) : null
      )}
    </SimpleGrid>
  );
};

export default InProgressTask;
