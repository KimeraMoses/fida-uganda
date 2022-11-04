import React, { useEffect, useState } from "react";
import { Field, useField } from "formik";

//===ICONS IMPORTS===
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

//===COMPONENT IMPORTS===
import classes from "./SelectInputField.module.css";

const SelectInputField = (props) => {
  const [selected, setSelected] = useState("");
  const { data, placeholder, name, defaultValue, ...rest } = props;
  const [meta] = useField(name);
  const isInvalid = meta.touched && meta.error ? true : false;

  const [isActive, setIsActive] = useState(false);
  const selectedItemHandler = (option) => {
    setSelected(option.label);
    setIsActive(false);
    props?.setFieldValue(name, option?.value);
  };

  useEffect(() => {
    if (defaultValue) {
      setSelected(data?.find((option) => option.value === defaultValue)?.label);
      setIsActive(false);
      props?.setFieldValue(name, defaultValue);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue]);

  return (
    <div
      className={`${classes.fida__dropdown} ${
        isInvalid ? classes.input__errorr : ""
      }`}
    >
      <div
        className={classes.fida__dropdown_button}
        onClick={(e) => setIsActive(!isActive)}
      >
        <div className={classes.fida__dropdown_button_text}>
          <Field
            className={classes.selected_input_field}
            disabled
            name={`${name}`}
            value={selected}
            placeholder={placeholder}
            // {...field}
            {...rest}
          />
        </div>
        <div>{isActive ? <RiArrowUpSFill /> : <RiArrowDownSFill />}</div>
      </div>
      {isActive && (
        <div className={classes.fida__dropdown_content}>
          {data.map((option) => {
            return (
              <div
                key={option.label}
                className={classes.fida__dropdown_item}
                onClick={() => selectedItemHandler(option)}
              >
                {option.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SelectInputField;
