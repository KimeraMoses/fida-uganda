import { Heading } from "@chakra-ui/react";
import React from "react";
import NumberInput from "../../common/NumberInput";

function QANumberInput({ name, handleChange, value1, value2, name1, name2 }) {
  const placeholder = "Type here";

  return (
    <>
      <Heading fontSize="md" alignSelf="center">
        {name}
      </Heading>
      <NumberInput
        value={value1}
        name={name1}
        placeholder={placeholder}
        handleChange={handleChange}
      />
      <NumberInput
        value={value2}
        name={name2}
        placeholder={placeholder}
        handleChange={handleChange}
      />
    </>
  );
}

export default QANumberInput;
