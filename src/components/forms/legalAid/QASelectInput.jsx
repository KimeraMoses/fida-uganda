import { Heading } from "@chakra-ui/react";
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
      <Heading fontSize="md" alignSelf="center">
        {name}
      </Heading>
      {options && (
        <>
          <SelectInput
            placeholder={placeholder}
            name={name1}
            value={value1}
            handleChange={handleChange}
            options={options}
          />
          <SelectInput
            placeholder={placeholder}
            name={name2}
            value={value2}
            handleChange={handleChange}
            options={options}
          />
        </>
      )}
    </>
  );
}

export default QASelectInput;
