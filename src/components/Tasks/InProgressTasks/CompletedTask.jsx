import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import TaskCard from "../TaskCard/TaskCard";
import classes from "./InProgressTask.module.css";

const CompletedTask = (props) => {
  return (
    <SimpleGrid
      columns={3}
      spacing={4}
      className={classes.progress_tasks_wrapper}
    >
      {props.tasks.map(({ id, tags, title, description, status }) =>
        status === "completed" ? (
          <TaskCard
            key={id}
            tags={tags}
            cardTitle={title}
            description={description}
          />
        ) : null
      )}
    </SimpleGrid>
  );
};

export default CompletedTask;
