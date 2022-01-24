import { useDispatch, useSelector } from "react-redux";
import { Flex } from "@chakra-ui/react";
import useForm from "../../../hooks/useForm";
import TextInput from "../../common/TextInput";
import { createComment } from "../../../store/reducers/tasks";

function CommentForm({ id }) {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.tasks);
  const { values, handleChange } = useForm({ body: "" });
  const { body } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (body) {
      dispatch(createComment(id, values));
      while (loading) {}
      if (!error) {
        values.body = "";
      }
    }
  };

  return (
    <Flex flexDir="column" as="form" onSubmit={handleSubmit}>
      <TextInput
        value={body}
        name="body"
        handleChange={handleChange}
        placeholder="Type your comment here"
      />
    </Flex>
  );
}

export default CommentForm;
