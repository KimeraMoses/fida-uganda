import { Heading } from "@chakra-ui/react";
import React from "react";
import NumberInput from "../../common/NumberInput";

function QANumberInput({
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
      <NumberInput
        value={value}
        name={name}
        placeholder={placeholder}
        handleChange={handleChange}
      />
    </>
  );
}

export default QANumberInput;
