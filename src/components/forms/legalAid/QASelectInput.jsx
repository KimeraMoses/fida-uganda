import { Heading, Box, Center } from "@chakra-ui/react";
import SelectInput from "../../common/SelectInput";

function QASelectInput({
  name,
  handleChange,
  value1,
  value2,
  name1,
  name2,
  options,
}) {
  const placeholder = "Type here";

  return (
    <>
      <Heading fontSize="md" alignSelf="center" textTransform="capitalize">
        {name}
      </Heading>
      {options ? (
        <SelectInput
          placeholder={placeholder}
          name={name1}
          value={value1}
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
