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
    ? [{ label: "Select All", value: "all" }, ...options]
    : options;
  const [isOptionDisabled, setIsOptionDisabled] = React.useState(false);

  const handleClear = (triggeredAction) => {
    if (triggeredAction.action === "clear") {
      // Clear happened
      setIsOptionDisabled(false);
    }
  };
  const handleAllSelect = (options, triggeredAction) => {
    onChange(options.slice(1));
    setIsOptionDisabled(true);
    handleClear(triggeredAction);
  };

  const handleUniversalChange = (selected, triggeredAction) => {
    !isMulti
      ? onChange((selected && selected.value) || null)
      : onChange(selected);
    handleClear(triggeredAction);
  };
  return (
    <Select
      placeholder={placeholder}
      onChange={(selected, triggeredAction) => {
        isMulti &&
        selected.length &&
        selected.find((option) => option.value === "all")
          ? handleAllSelect(options, triggeredAction)
          : handleUniversalChange(selected, triggeredAction);
      }}
      components={animatedComponents}
      options={optionsWrapper}
      isMulti={isMulti}
      isSearchable={true}
      name={name}
      isClearable={true}
      isDisabled={disabled}
      isOptionDisabled={() => isOptionDisabled}
    />
  );
};

export default SelectInput;
