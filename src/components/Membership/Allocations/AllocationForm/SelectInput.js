import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "moses", label: "Kimera Moxhus" },
  { value: "isaac", label: "Mubiru Isaac" },
  { value: "zeus", label: "Missaga Zeus" },
];

const SelectInput = () => {
  // const [selectedOption, setSelectedOption] = useState(null);

  return (
    <Select
      // defaultValue={selectedOption}
      placeholder="Recipients"
      // onChange={setSelectedOption}
      options={options}
      isMulti={true}
      isSearchable={true}
      // components={{ SelectContainer }}
      styles={{
        container: (base) => ({
          ...base,
          width: "100%",
          // border: `1px solid #000`,
          // backgroundColor: colourOptions[2].color,
        //   padding: 5,
        }),
      }}
    />
  );
};

export default SelectInput;
