import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import TaskCard from "../TaskCard/TaskCard";
import classes from "./InProgressTask.module.css";

const InProgressTask = () => {
  return (
    <SimpleGrid
      columns={3}
      spacing={4}
      className={classes.progress_tasks_wrapper}
    >
      <TaskCard
        cardTitle="Third Quarter Report"
        description="The DFG Nakaseke first quater report is two weeks over due and the evaluators are coming in two weeks."
        valueCount={3}
        attachments={2}
      />
      <TaskCard
        cardTitle="First Quarter Report"
        description="Mukasa’s case is being heard on Tuesday 15/03/2021. We have to prepare and be ready for the hearing"
        valueCount={2}
        attachments={5}
      />
      <TaskCard
        cardTitle="DFG Annual Report"
        description="The DFG Nakaseke first quater report is two weeks  over due and the evaluators are coming in two weeks."
        valueCount={2}
        attachments={4}
      />
    </SimpleGrid>
  );
};

export default InProgressTask;
