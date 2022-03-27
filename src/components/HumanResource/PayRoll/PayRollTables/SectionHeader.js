import React from 'react';
import classes from "./SectionHeader.module.css"

const SectionHeader = ({title}) => {
  return (
    <div className={`${classes.subheading_wrapper} ${title==='Approved'? classes.last__table: ''}`}>
        <h3>{title}</h3>
    </div>
  )
}

export default SectionHeader