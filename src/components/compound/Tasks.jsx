import { useTasks } from "../../hooks/useTasks";
import SectionHeader from "../common/SectionHeader";
import SubHeading from "../common/SubHeading";
import IncomingTasks from "./Tasks/IncomingTasks";
import InProgressTasks from "./Tasks/InProgressTasks";
import CompletedTasks from "./Tasks/CompletedTasks";

const Tasks = () => {
  const { data } = useTasks();

  return (
    <>
      <SectionHeader title="Tasks" />
      <SubHeading title="Incoming Tasks" />
      <IncomingTasks tasks={data?.tasks} />
      <SubHeading title="In Progress" />
      <InProgressTasks />
      <SubHeading title="Completed" />
      <CompletedTasks />
      {JSON.stringify(data?.tasks, null, 2)}
    </>
  );
};

export default Tasks;
