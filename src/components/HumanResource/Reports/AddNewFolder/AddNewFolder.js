import React from "react";
import classes from "./AddNewFolder.module.css";
import { VscNewFolder, VscCloudUpload } from "react-icons/vsc";

const AddNewFolder = () => {
  return (
    <div className={classes.new_folder_wrapper}>
      <div className={classes.new_folder}>
        <VscNewFolder /> <h4>New Folder</h4>
      </div>
      <div className={classes.upload_report}>
        <VscCloudUpload />
        <h4>Create New Report</h4>
      </div>
    </div>
  );
};

export default AddNewFolder;
