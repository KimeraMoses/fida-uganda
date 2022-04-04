import React from "react";
import { Avatar, AvatarGroup } from "@chakra-ui/react";
import classes from "./TaskCard.module.css";
import { RiMessage2Line, RiAttachment2 } from "react-icons/ri";

const DepartmentButton = ({ title, btnColor, isUrget, Icon, valueCount }) => {
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

const TaskCard = (props) => {
  const { cardTitle, description, valueCount, attachments, tags } = props;

  return (
    <div className={classes.task_card_wrapper}>
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
          <h3>{cardTitle}</h3>
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
    </div>
  );
};

export default TaskCard;
