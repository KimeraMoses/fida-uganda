import React from "react";
import FormButton from "../../../common/UI/FormButton/FormButton";
import classes from "./NewNotes.module.css";

const NewNotes = () => {
  return (
    <div className={classes.new_note_upload_wrapper}>
      <div className={classes.upload_btn_wrapper}>
        <FormButton variant="colored" type="submit">
          upload
        </FormButton>
      </div>
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

export default NewNotes;
