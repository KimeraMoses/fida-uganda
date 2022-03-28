import React from "react";
import classes from "../../PayRoll/NewNotes/NewNotes.module.css";

const NewUpload = () => {
  return (
    <div className={classes.new_note_upload_wrapper}>
      <div className={classes.upload_section_wrapper}>
        <div className={classes.upload_area}>
          <input type="file" id="user_files" hidden />
          <h6>
            Click to browse or <br /> drag and drop your files
          </h6>
        </div>
      </div>
    </div>
  );
};

export default NewUpload;
