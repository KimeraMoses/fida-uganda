import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const SelectInput = ({ options, onChange, name, placeholder, isMulti }) => {
  return (
    <Select
      placeholder={placeholder}
      onChange={onChange}
      components={animatedComponents}
      options={options}
      isMulti={isMulti}
      isSearchable={true}
      name={name}
      isClearable={true}
    />
  );
};

export default SelectInput;
