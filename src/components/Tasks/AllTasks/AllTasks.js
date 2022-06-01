import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import TaskCard from "../TaskCard/TaskCard";
import classes from "../InProgressTasks/InProgressTask.module.css";

const AllTasks = ({ tasks }) => {
  return (
    <SimpleGrid
      columns={3}
      spacing={4}
      className={classes.progress_tasks_wrapper}
    >
      {tasks.map((task) => {
        return <TaskCard key={task.id} task={task} />;
      })}
    </SimpleGrid>
  );
};

export default AllTasks;
