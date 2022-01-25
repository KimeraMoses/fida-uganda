import React from "react";

function Time({ value, onChange, name = "time" }) {
  return (
    <input
      type="time"
      name={name}
      onChange={onChange}
      value={value}
      style={{ border: "2px solid black", borderRadius: "5px" }}
    />
  );
}

export default Time;
