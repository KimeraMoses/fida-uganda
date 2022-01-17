import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Heading } from "@chakra-ui/react";
import CommentForm from "../../forms/tasks/CommentForm";
import Comment from "./Comment";
import { getComments } from "../../../store/reducers/tasks";

function Comments({ id }) {
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(getComments(id));
  }, [dispatch, id]);

  if (!comments) {
    return null;
  }
  return (
    <Box width="100%">
      <Heading fontSize="lg" my="2">
        Comments ({comments.length})
      </Heading>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
      <CommentForm id={id} />
    </Box>
  );
}

export default Comments;
