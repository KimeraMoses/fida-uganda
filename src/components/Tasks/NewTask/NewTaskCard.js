import React from "react";
import { MdAddCircle } from "react-icons/md";
import classes from "./NewTaskCard.module.css";

const NewTaskCard = (props) => {
  const { onOpen } = props;
  return (
    <>
      <div className={classes.new_task_card_wrapper} onClick={onOpen}>
        <div className={classes.new_task_card_wrapper_inner}>
          <MdAddCircle />
          <h3>
            Create New
            <br /> Task
          </h3>
        </div>
      </div>
    </>
  );
};

export default NewTaskCard;
