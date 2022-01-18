import { Heading } from "@chakra-ui/react";
import TextInput from "../../common/TextInput";

function ComplaintRespondentInput({
  name,
  handleChange,
  value1,
  value2,
  name1,
  name2,
}) {
  const placeholder = "Type here";

  return (
    <>
      <Heading fontSize="md" alignSelf="center">
        {name}
      </Heading>
      <TextInput
        value={value1}
        name={name1}
        placeholder={placeholder}
        handleChange={handleChange}
      />
      <TextInput
        value={value2}
        name={name2}
        placeholder={placeholder}
        handleChange={handleChange}
      />
    </>
  );
}

export default ComplaintRespondentInput;
