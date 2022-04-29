import React from "react";
import Select from "react-select";

const options = [
  { value: "moses", label: "Kimera Moxhus" },
  { value: "isaac", label: "Mubiru Isaac" },
  { value: "zeus", label: "Missaga Zeus" },
];

const SelectInput = ({recipients, onChange, name, placeholder}) => {

  return (
    <Select
      placeholder={placeholder}
      onChange={onChange}
      options={recipients || options}
      isMulti={true}
      isSearchable={true}
      name={name}
      styles={{
        container: (base) => ({
          ...base,
          width: "100%",
        }),
      }}
    />
  );
};

export default SelectInput;
