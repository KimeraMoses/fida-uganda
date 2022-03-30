import React from "react";
import classes from "./SubHeading.module.css";

const SubHeading = ({title}) => {
  return (
    <div className={classes.sub_heading_wrapper}>
      <h2>{title}</h2>
    </div>
  );
};

export default SubHeading;
