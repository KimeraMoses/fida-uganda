import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Heading } from "@chakra-ui/react";
import CommentForm from "../../forms/tasks/CommentForm";
import Comment from "./Comment";
import { getComments } from "../../../store/reducers/tasks";

function Comments({ id }) {
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.tasks);
  const commentsList = comments[id];

  useEffect(() => {
    dispatch(getComments(id));
  }, [dispatch, id]);

  if (!commentsList) {
    return <CommentForm id={id} />;
  }
  return (
    <Box width="100%">
      <Heading fontSize="lg" my="2">
        Comments ({commentsList.length})
      </Heading>
      {commentsList.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
      <CommentForm id={id} />
    </Box>
  );
}

export default Comments;
