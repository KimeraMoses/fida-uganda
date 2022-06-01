import {
  Input,
  InputGroup,
  InputLeftElement,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Modal from "../common/Modal";
import SectionHeader from "../common/SectionHeader";
import IncomingTask from "./IncomingTasks/IncomingTask";
import InProgressTask from "./InProgressTasks/InProgressTask";
import NewTaskForm from "./NewTask/NewTaskForm";
import SubHeading from "./SubHeading/SubHeading";
import { useAddTask, useTasks } from "../../hooks/useTasks";
import { toastSuccess } from "../../lib/toastDetails";
import CompletedTask from "./InProgressTasks/CompletedTask";
import { AiOutlineSearch } from "react-icons/ai";
import classes from "./Tasks.module.css";
import Loader from "./../common/UI/Loader/Loader";

const Tasks = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { mutate, isError, error, isSuccess, isLoading } = useAddTask();
  const toast = useToast();
  const tasksData = useTasks();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    if (isSuccess) {
      toast(toastSuccess("Task Added Successfully"));
    }
  }, [isSuccess, toast]);

  const keyWordSearchHandler = (e) => {
    const { value } = e.target;
    setSearchTerm(value);

    if (searchTerm !== "") {
      const Results = tasksData.data.tasks.filter((Result) => {
        return Object.values(Result)
          .join(" ")
          .replace(/-/g, " ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(Results);
    }
  };
  const isSearching = searchTerm.length < 1 ? false : true;

  useEffect(() => {
    setSearchResults([]);
  }, [isSearching]);

  return (
    <>
      <SectionHeader title="Tasks" />
      <div className={classes.tasks_search_wrapper}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<AiOutlineSearch color="gray.300" />}
          />
          <Input
            className={classes.search_input_field}
            type="search"
            value={searchTerm}
            onChange={keyWordSearchHandler}
            placeholder="Type to Search"
          />
        </InputGroup>
      </div>

      {tasksData.isLoading ? (
        <Loader />
      ) : (
        <>
          <SubHeading title="incoming Tasks" />
          {tasksData.data?.tasks && (
            <IncomingTask
              onOpen={onOpen}
              tasks={
                searchResults.length > 0 ? searchResults : tasksData.data?.tasks
              }
            />
          )}
          <SubHeading title="In Progress" />
          {tasksData.data?.tasks && (
            <InProgressTask
              tasks={
                searchResults.length > 0 ? searchResults : tasksData.data?.tasks
              }
            />
          )}
          <SubHeading title="Completed" />
          {tasksData.data?.tasks && (
            <CompletedTask
              tasks={
                searchResults.length > 0 ? searchResults : tasksData.data?.tasks
              }
            />
          )}
        </>
      )}
      <Modal isOpen={isOpen} onClose={onClose} title="Create a Task" size="2xl">
        <NewTaskForm
          onSubmit={mutate}
          error={error}
          isError={isError}
          isSubmitting={isLoading}
        />
      </Modal>
    </>
  );
};

export default Tasks;
