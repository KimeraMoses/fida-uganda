import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

function TodoList() {
  const { tasks } = useSelector((state) => state.tasks);
  if (!tasks) {
    return null;
  }
  return (
    <>
      {tasks.map((task) => (
        <Todo key={task.id} todo={task} />
      ))}
    </>
  );
}

export default TodoList;
