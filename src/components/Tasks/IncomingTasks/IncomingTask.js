import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import TaskCard from "../TaskCard/TaskCard";
import classes from "./IncomingTasks.module.css";
import NewTaskCard from "../NewTask/NewTaskCard";
import { useEditTask } from "../../../hooks/useTasks";

const IncomingTask = (props) => {
  const { mutate } = useEditTask();
  const btnLabel = "Mark as Pending";
  const onChangeStatus = (task) => {
    mutate({ id: task, status: "pending" });
  };

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
          />
        ) : null
      )}
    </SimpleGrid>
  );
};

export default IncomingTask;
