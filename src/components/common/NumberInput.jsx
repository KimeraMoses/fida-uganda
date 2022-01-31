import {
  NumberInput as ChakraNumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

import React from "react";

function NumberInput({
  placeholder,
  value,
  onChange,
  max,
  min,
  name = "number",
}) {
  return (
    <ChakraNumberInput size="lg" max={max} min={min}>
      <NumberInputField
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </ChakraNumberInput>
  );
}

export default NumberInput;
