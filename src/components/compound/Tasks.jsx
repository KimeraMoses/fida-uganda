import { useTasks } from "../../hooks/useTasks";
import SectionHeader from "../common/SectionHeader";
import { Heading } from "@chakra-ui/react";

import TasksCard from '../common/TasksCard'
import Cards from "../common/Cards";

const Tasks = () => {
  const { data } = useTasks();

  return (
    <>
      <SectionHeader title="Tasks" />
      <Heading
        mt={10}
        mb={5}
        fontSize="2xl"
        color="purple.800"
        fontWeight="thin"
      >
        Incoming Tasks
      </Heading>
      <Cards>
        <TasksCard
          to="travel-order"
          title="Travel Order"
          stat={null}
          cardContent={'The DFG Nakaseke first quater report is two weeks  over due and the evaluators are coming in two weeks. '}
        />
        <TasksCard
          to="requisitions"
          title="Requisitions"
          stat={null}
          cardContent={'The DFG Nakaseke first quater report is two weeks  over due and the evaluators are coming in two weeks. '}
        />
        <TasksCard
          to="requisitions"
          title="Requisitions"
          stat={null}
          cardContent={'The DFG Nakaseke first quater report is two weeks  over due and the evaluators are coming in two weeks. '}
        />
      </Cards>
      <Heading
        mt={10}
        mb={5}
        fontSize="2xl"
        color="purple.800"
        fontWeight="thin"
      >
        In progress
      </Heading>
      <Cards>
        <TasksCard
          to="travel-order"
          title="Travel Order"
          stat={null}
          cardContent={'The DFG Nakaseke first quater report is two weeks  over due and the evaluators are coming in two weeks. '}
        />
        <TasksCard
          to="requisitions"
          title="Requisitions"
          stat={null}
          cardContent={'The DFG Nakaseke first quater report is two weeks  over due and the evaluators are coming in two weeks. '}
        />
        <TasksCard
          to="requisitions"
          title="Requisitions"
          stat={null}
          cardContent={'The DFG Nakaseke first quater report is two weeks  over due and the evaluators are coming in two weeks. '}
        />
      </Cards>
      <Heading
        mt={10}
        mb={5}
        fontSize="2xl"
        color="purple.800"
        fontWeight="thin"
      >
        Completed
      </Heading>
      <Cards>
        <TasksCard
          to="travel-order"
          title="Travel Order"
          stat={null}
          cardContent={'The DFG Nakaseke first quater report is two weeks  over due and the evaluators are coming in two weeks. '}
        />
        <TasksCard
          to="requisitions"
          title="Requisitions"
          stat={null}
          cardContent={'The DFG Nakaseke first quater report is two weeks  over due and the evaluators are coming in two weeks. '}
        />
        <TasksCard
          to="requisitions"
          title="Requisitions"
          stat={null}
          cardContent={'The DFG Nakaseke first quater report is two weeks  over due and the evaluators are coming in two weeks. '}
        />
      </Cards>
      {JSON.stringify(data?.tasks, null, 2)}
    </>
  );
};

export default Tasks;
