import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const SelectInput = ({
  options,
  onChange,
  name,
  placeholder,
  isMulti,
  disabled,
}) => {
  const optionsWrapper = isMulti
    ? [{ label: "&#9745; Select All", value: "all" }, ...options]
    : options;
  return (
    <Select
      placeholder={placeholder}
      onChange={(selected) => {
        console.log(selected, "selectd");
        isMulti &&
        selected.length &&
        selected.find((option) => option.value === "all")
          ? onChange(options.slice(1))
          : !isMulti
          ? onChange((selected && selected.value) || null)
          : onChange(selected);
      }}
      components={animatedComponents}
      options={optionsWrapper}
      isMulti={isMulti}
      isSearchable={true}
      name={name}
      isClearable={true}
      isDisabled={disabled}
    />
  );
};

export default SelectInput;
