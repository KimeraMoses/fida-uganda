import React, { useEffect } from "react";
import { Avatar, AvatarGroup, useDisclosure, useToast } from "@chakra-ui/react";
import classes from "./TaskCard.module.css";
import { RiMessage2Line, RiAttachment2 } from "react-icons/ri";
import Modal from "../../common/Modal";
import TaskSummary from "../TaskSummary/TaskSummary";
import { useAddTaskComment } from "../../../hooks/useTasks";
import { toastSuccess } from "../../../lib/toastDetails";

export const DepartmentButton = ({
  title,
  btnColor,
  isUrget,
  Icon,
  valueCount,
}) => {
  return (
    <div
      className={`${classes.depart_btn_wrapper} ${
        btnColor === "primary"
          ? classes.primary
          : btnColor === "secondary"
          ? classes.secondary
          : classes.tertiary
      } ${isUrget ? classes.urget_btn : ""} ${Icon ? classes.btn__icon : ""}`}
    >
      {Icon && Icon}
      {title && title}
      {valueCount && valueCount}
    </div>
  );
};

const TaskCard = ({ task, btnLabel, onChangeStatus }) => {
  const { title, description, valueCount, attachments, tags } = task;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const { mutate, isLoading, isSuccess, isError, error } = useAddTaskComment();

  useEffect(() => {
    if (isSuccess) {
      toast(toastSuccess("Comment Added Successfully"));
    }
  }, [isSuccess, toast]);

  return (
    <div className={classes.task_card_wrapper} onClick={onOpen}>
      <div className={classes.task_card_wrapper_inner}>
        {tags && (
          <div className={classes.task_department_wrapper}>
            {tags[0] && <DepartmentButton title={tags[0]} btnColor="primary" />}
            {tags[1] && (
              <DepartmentButton title={tags[1]} btnColor="secondary" />
            )}
            {tags[2] && (
              <DepartmentButton title={tags[2]} btnColor="tertiary" />
            )}
          </div>
        )}
        <div className={classes.task_content_wrapper}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className={classes.task_actions_wrapper}>
          <div className={classes.task_actions_btns}>
            <DepartmentButton isUrget={true} title="Urgent" />
            <DepartmentButton
              isUrget={true}
              Icon={<RiAttachment2 />}
              valueCount={valueCount}
            />
            <DepartmentButton
              isUrget={true}
              Icon={<RiMessage2Line />}
              valueCount={attachments}
            />
          </div>
          <div className={classes.task_actions_avarter}>
            <AvatarGroup size="sm" max={2}>
              <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
              <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
            </AvatarGroup>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <TaskSummary
          task={task}
          onSubmit={mutate}
          isSubmitting={isLoading}
          isError={isError}
          error={error}
          btnLabel={btnLabel}
          onChangeStatus={onChangeStatus}
        />
      </Modal>
    </div>
  );
};

export default TaskCard;
