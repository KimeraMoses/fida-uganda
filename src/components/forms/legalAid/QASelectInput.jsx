import { Heading, Box, Center } from "@chakra-ui/react";
import SelectInput from "../../common/SelectInput";

function QASelectInput({
  name,
  handleChange,
  value,
  title,
  options,
  placeholder = "Type here",
}) {
  return (
    <>
      <Heading fontSize="md" alignSelf="center" textTransform="capitalize">
        {title}
      </Heading>
      {options ? (
        <SelectInput
          placeholder={placeholder}
          name={name}
          value={value}
          handleChange={handleChange}
          options={options}
        />
      ) : (
        <Center>
          <Box>Loading...</Box>
        </Center>
      )}
    </>
  );
}

export default QASelectInput;
