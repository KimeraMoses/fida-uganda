import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();
const options = [
  { value: "moses", label: "Kimera Moxhus" },
  { value: "isaac", label: "Mubiru Isaac" },
  { value: "zeus", label: "Missaga Zeus" },
];


const SelectInput = ({ options, onChange, name, placeholder }) => {
  return (
    <Select
      placeholder={placeholder}
      onChange={onChange}
      components={animatedComponents}
      options={options}
      isMulti={true}
      isSearchable={true}
      name={name}
    />
  );
};

export default SelectInput;
