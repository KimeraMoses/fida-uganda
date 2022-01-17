import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex } from "@chakra-ui/react";
import TodoSection from "./TodoSection";
import { getUserTasks } from "../../../store/reducers/tasks";
import NoDataTable from "../../common/NoDataTable";

function TodoContainer() {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(getUserTasks());
  }, [dispatch]);

  if (!tasks) {
    return <NoDataTable />;
  }

  return (
    <Flex width="100%" my="1.5rem">
      <TodoSection />
    </Flex>
  );
}

export default TodoContainer;
