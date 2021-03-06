import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import TaskCard from "../TaskCard/TaskCard";
import classes from "./InProgressTask.module.css";

const CompletedTask = ({ tasks }) => {
  return (
    <SimpleGrid
      columns={3}
      spacing={4}
      className={classes.progress_tasks_wrapper}
    >
      {tasks.map((task) =>
        task.status === "completed" ? (
          <TaskCard key={task.id} task={task} />
        ) : null
      )}
    </SimpleGrid>
  );
};

export default CompletedTask;
