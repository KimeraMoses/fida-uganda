import { useDispatch } from "react-redux";
import { Flex } from "@chakra-ui/react";
import useForm from "../../../hooks/useForm";
import TextInput from "../../common/TextInput";
import { createComment } from "../../../store/reducers/tasks";

function CommentForm({ id }) {
  const dispatch = useDispatch();
  const { values, handleChange } = useForm({ body: "" });
  const { body } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({id, ...values});
    if (body) {
      dispatch(createComment(id, values));
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
