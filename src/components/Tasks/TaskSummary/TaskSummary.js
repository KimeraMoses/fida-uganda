import React, { useEffect } from "react";
import {
  Avatar,
  AvatarGroup,
  Flex,
  Center,
  Spinner,
  useToast,
  Button,
} from "@chakra-ui/react";
import { RiMessage2Line } from "react-icons/ri";
import { AttachmentIcon } from "../../../assets/Icons/Icons";
import { DepartmentButton } from "../TaskCard/TaskCard";
import classes from "./TaskSummary.module.css";
import styles from "../NewTask/NewTaskForm.module.css";
import FormButton from "../../common/UI/FormButton/FormButton";
import { useTaskComments } from "../../../hooks/useTasks";
import { Form, Formik } from "formik";
import TextField from "../../common/TextField";
import { toastError } from "../../../lib/toastDetails";

const CommentCard = (props) => {
  const { createdBy, body } = props;
  return (
    <div className={classes.comment_card_wrapper}>
      <div className={classes.card_header}>
        <Avatar size="sm" name={createdBy?.full_name} src={createdBy?.image} />
        <div className={classes.comment_title}>
          <h3>{createdBy?.full_name}</h3>
        </div>
      </div>
      <p>{body}</p>
    </div>
  );
};

const TaskSummary = ({
  task,
  onSubmit,
  isSubmitting,
  isError,
  error,
  btnLabel,
  onChangeStatus,
}) => {
  const { data, isLoading } = useTaskComments(task.id);
  const { title, description, outline, tags } = task;
  const toast = useToast();

  useEffect(() => {
    if (isError) {
      toast(toastError(error));
    }
  }, [isError, error, toast]);

  return (
    <div className={classes.task__summary_wrapper}>
      <div className={classes.task_tags_wrapper}>
        <Flex>
          {tags && (
            <>
              {tags[0] && (
                <DepartmentButton title={tags[0]} btnColor="primary" />
              )}
              {tags[1] && (
                <DepartmentButton title={tags[1]} btnColor="secondary" />
              )}
              {tags[2] && (
                <DepartmentButton title={tags[2]} btnColor="tertiary" />
              )}
            </>
          )}
        </Flex>
      </div>
      <div className={classes.task_content_wrapper}>
        <h3>{title}</h3>
        <p>{description}</p>
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
          <AttachmentIcon /> Outlines({outline.length})
        </h6>
        <div
          className={`${styles.outline_list} ${classes.outline_list_preview}`}
        >
          <ul>
            {outline.map((outline) => {
              return <li key={outline}>{outline}</li>;
            })}
          </ul>
        </div>
        {/* <div className={styles.asset_outline_wrapper}>
          <h6>
            <RiAttachment2 /> Attachment
          </h6>
          <div className={classes.attachement_preview_wrapper}>
            <img src={placeholderImage} alt="" />
            <img src={placeholderImage} alt="" />
          </div>
        </div> */}

        <div className={styles.asset_outline_wrapper}>
          <h6>
            <RiMessage2Line /> Comments (
            {data?.comments && data?.comments.length})
          </h6>
          <div className={classes.comments_wrapper}>
            {isLoading && (
              <Center>
                <Spinner />
              </Center>
            )}
            {data?.comments &&
              data?.comments.map((comment) => (
                <CommentCard key={comment.id} {...comment} />
              ))}
          </div>
        </div>
        <Formik
          initialValues={{ body: "", task: task.id }}
          onSubmit={(values, { resetForm }) => {
            // alert(JSON.stringify(values, null, 2));
            onSubmit(values);
            resetForm();
          }}
        >
          <Form>
            <div className={styles.asset_outline_wrapper}>
              <h6>
                <RiMessage2Line /> Add Comment
              </h6>
              <div className={classes.new_comments_wrapper}>
                <TextField
                  variant="outline"
                  placeholder="Type your comment here"
                  name="body"
                  type="text"
                />
              </div>
            </div>
            <FormButton
              variant="colored"
              rounded={true}
              type="submit"
              isSubmitting={isSubmitting}
            >
              Add Comment
            </FormButton>
          </Form>
        </Formik>
      </div>
      {btnLabel && (
        <Button
          isFullWidth
          my={5}
          colorScheme="purple"
          onClick={() => onChangeStatus(task.id)}
        >
          {btnLabel}
        </Button>
      )}
    </div>
  );
};

export default TaskSummary;
