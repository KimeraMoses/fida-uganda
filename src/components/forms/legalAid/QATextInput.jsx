import { Heading } from "@chakra-ui/react";
import TextInput from "../../common/TextInput";

function QATextInput({
  title,
  handleChange,
  value,
  name,
  placeholder = "Type here",
}) {
  return (
    <>
      <Heading fontSize="md" alignSelf="center">
        {title}
      </Heading>
      <TextInput
        value={value}
        name={name}
        placeholder={placeholder}
        handleChange={handleChange}
      />
    </>
  );
}

export default QATextInput;
