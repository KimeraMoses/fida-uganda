import React, { useState } from "react";
import classes from "./AddNewFolder.module.css";
import { VscNewFolder, VscCloudUpload } from "react-icons/vsc";
import Modal from "./../../../common/Modal";
import { useDisclosure } from "@chakra-ui/react";
import NewReportForm from "./../NewReportForm/NewReportForm";
import NewFolderForm from "./NewFolderForm";
import { useAddComplaint } from "../../../../hooks/useComplaint";

const AddNewFolder = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [type, setType] = useState("newFolder");

  const handleClick = (value) => {
    if (value === "folder") {
      setType("newFolder");
    } else {
      setType("newReport");
    }
    onOpen();
  };
  return (
    <div className={classes.new_folder_wrapper}>
      <div className={classes.new_folder} onClick={() => handleClick("folder")}>
        <VscNewFolder /> <h4>New Folder</h4>
      </div>
      <div
        className={classes.upload_report}
        onClick={() => handleClick("report")}
      >
        <VscCloudUpload />
        <h4>Create New Report</h4>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title={type === "newFolder" ? "" : "New Folder Form"}
      >
        {type === "newFolder" ? (
          <NewFolderForm useMutate={useAddComplaint} onClose={onClose} />
        ) : (
          <NewReportForm onClose={onClose} />
        )}
      </Modal>
    </div>
  );
};

export default AddNewFolder;
