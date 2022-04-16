import React from "react";
import { Avatar, AvatarGroup, Input } from "@chakra-ui/react";
import { RiMessage2Line, RiAttachment2 } from "react-icons/ri";
import { AttachmentIcon } from "../../../assets/Icons/Icons";
import { DepartmentButton } from "../TaskCard/TaskCard";
import classes from "./TaskSummary.module.css";
import styles from "../NewTask/NewTaskForm.module.css";
import placeholderImage from "../../../assets/images/placeholder.png";
import FormButton from "../../common/UI/FormButton/FormButton";

const outlines = ["The first outline", "The second one as well"];

const CommentCard = (props) => {
  const { name, image, comment, proffession } = props;
  return (
    <div className={classes.comment_card_wrapper}>
      <div className={classes.card_header}>
        <Avatar size="sm" name={name} src={image} />
        <div className={classes.comment_title}>
          <h3>{name}</h3>
          <h6>{proffession}</h6>
        </div>
      </div>
      <p>{comment}</p>
    </div>
  );
};

const TaskSummary = () => {
  return (
    <div className={classes.task__summary_wrapper}>
      <div className={classes.task_tags_wrapper}>
        <DepartmentButton title="Legal Aid" btnColor="primary" />
        <DepartmentButton title="Court Processor" btnColor="secondary" />
        <DepartmentButton title="Court cases" btnColor="tartiary" />
      </div>
      <div className={classes.task_content_wrapper}>
        <h3>First Quarter Reports</h3>
        <p>
          The DFG Nakaseke first quater report is two weeks over due and the
          evaluators are coming in two weeks
        </p>
      </div>
      <div className={styles.asset_tags_team_wrapper}>
        <h6>
          <AttachmentIcon />
          Team
        </h6>
        <div className={styles.team}>
          <AvatarGroup size="sm" max={2}>
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
          </AvatarGroup>
        </div>
      </div>
      <div className={styles.asset_outline_wrapper}>
        <h6>
          <AttachmentIcon /> Outlines({outlines.length})
        </h6>
        <div
          className={`${styles.outline_list} ${classes.outline_list_preview}`}
        >
          <ul>
            {outlines.map((outline) => {
              return <li key={outline}>{outline}</li>;
            })}
          </ul>
        </div>
        <div className={styles.asset_outline_wrapper}>
          <h6>
            <RiAttachment2 /> Attachment
          </h6>
          <div className={classes.attachement_preview_wrapper}>
            <img src={placeholderImage} alt="" />
            <img src={placeholderImage} alt="" />
          </div>
        </div>

        <div className={styles.asset_outline_wrapper}>
          <h6>
            <RiMessage2Line /> Comments (2)
          </h6>
          <div className={classes.comments_wrapper}>
            <CommentCard
              image="https://bit.ly/ryan-florence"
              name="Kimera Moses"
              proffession="Lawyer"
              comment="Great work Christine, please keep it up in the future, always."
            />
            <CommentCard
              image="https://bit.ly/ryan-florence"
              name="Missage Clive"
              proffession="UI/UX designer"
              comment="Great work Christine, please keep it up in the future, always."
            />
          </div>
        </div>
        <div className={styles.asset_outline_wrapper}>
          <h6>
            <RiMessage2Line /> Add Comment
          </h6>
          <div className={classes.new_comments_wrapper}>
            <Input
              variant="outline"
              placeholder="Type your comment here"
              name="comment"
              type="text"
            />
          </div>
        </div>
        <div style={{ float: "right", padding: "20px 0" }}>
          <FormButton variant="colored" rounded={true} type="submit">
            Complete Task
          </FormButton>
        </div>
      </div>
    </div>
  );
};

export default TaskSummary;
