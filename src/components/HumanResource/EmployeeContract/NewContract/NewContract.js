import React, { useState } from "react";
import NewUpload from "./NewUpload";
import RecentUploads from "./RecentUploads";
import classes from "./NewContract.module.css";
import FormButton from "../../../Membership/MembersActivities/NewActivityForm/Button/FormButton";

const NewContract = () => {
  const [isUpload, setIsUpload] = useState(false);

  return (
    <div className={classes.new_contracts_actions_wrapper}>
      <div className={classes.toggle_btn_wrapper}>
        <div className={classes.btn_container}>
          <FormButton
            variant={isUpload ? "transparent" : "colored"}
            rounded={true}
            onClick={() => setIsUpload(false)}
          >
            Recent Upload
          </FormButton>
          <FormButton
            variant={isUpload ? "Colored" : "transparent"}
            rounded={true}
            onClick={() => setIsUpload(true)}
          >
            New Upload
          </FormButton>
        </div>
      </div>
      {isUpload ? <NewUpload /> : <RecentUploads />}
    </div>
  );
};

export default NewContract;
