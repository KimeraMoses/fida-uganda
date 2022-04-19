import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import TaskCard from "../TaskCard/TaskCard";
import classes from "./InProgressTask.module.css";

const InProgressTask = (props) => {
  return (
    <SimpleGrid
      columns={3}
      spacing={4}
      className={classes.progress_tasks_wrapper}
    >
      {props.tasks.map((task) =>
        task.status === "pending" ? (
          <TaskCard key={task.id} task={task} />
        ) : null
      )}
    </SimpleGrid>
  );
};

export default InProgressTask;
