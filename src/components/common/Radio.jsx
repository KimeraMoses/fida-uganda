import { RadioGroup, Radio as ChakraRadio, Stack } from "@chakra-ui/react";

function Radio({ options, onChange, value, direction, m }) {
  return (
    <RadioGroup onChange={onChange} value={value} m={m}>
      <Stack direction={direction} spacing={4}>
        {options.map((item) => (
          <ChakraRadio colorScheme="purple" key={item.value} value={item.value}>
            {item.label}
          </ChakraRadio>
        ))}
      </Stack>
    </RadioGroup>
  );
}

export default Radio;
