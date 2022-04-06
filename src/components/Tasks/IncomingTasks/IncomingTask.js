import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import TaskCard from "../TaskCard/TaskCard";
import classes from "./IncomingTasks.module.css";
import NewTaskCard from "../NewTask/NewTaskCard";

const IncomingTask = (props) => {
  return (
    <SimpleGrid
      columns={3}
      spacing={4}
      className={classes.incoming_tasks_wrapper}
    >
      <NewTaskCard onOpen={props.onOpen} />
      {props.tasks.map(({ id, tags, title, description, status }) =>
        status === "todo" ? (
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

export default IncomingTask;
