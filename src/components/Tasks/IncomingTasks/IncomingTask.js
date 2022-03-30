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
      <TaskCard
        cardTitle="First Quarter Report"
        description="The DFG Nakaseke first quater report is two weeks over due and the evaluators are coming in two weeks."
        valueCount={3}
        attachments={2}
      />
      <TaskCard
        cardTitle="Mukasa’s Court Case"
        description="Mukasa’s case is being heard on Tuesday 15/03/2021. We have to prepare and be ready for the hearing"
        valueCount={2}
        attachments={5}
      />
    </SimpleGrid>
  );
};

export default IncomingTask;
