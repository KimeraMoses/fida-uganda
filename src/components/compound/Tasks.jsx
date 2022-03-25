import { useTasks } from "../../hooks/useTasks";
import SectionHeader from "../common/SectionHeader";

const Tasks = () => {
  const { data } = useTasks();

  return (
    <>
      <SectionHeader title="Tasks" />
      {JSON.stringify(data?.tasks, null, 2)}
    </>
  );
};

export default Tasks;
