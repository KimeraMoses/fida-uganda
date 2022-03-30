import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import classes from "../../HumanResource/FidaAssets/NewAsset/NewAsset.module.css";
import image1 from "../../../assets/images/placeholder.png";
import InputField from "../../Membership/Members/NewMemberForm/MultiForm/InputField/InputField";
import FormButton from "../../Membership/MembersActivities/NewActivityForm/Button/FormButton";
import { AttachmentIcon } from "../../../assets/Icons/Icons";

const NewTaskForm = () => {
  return (
    <div className={classes.new_asset_wrapper}>
      <form>
        <InputField placeholder="Task Title" fullwidth/>
        <InputField placeholder="Task Description" fullwidth />
        <SimpleGrid columns={2} spacing={2}>
          <InputField placeholder="Start Date" type="date" />
          <InputField placeholder="End Date" type="date" />
        </SimpleGrid>

        <div className={classes.asset_attachement_wrapper}>
          <h6>
            <AttachmentIcon /> Attachments (2)
          </h6>
          <div className={classes.attachement_display_wrapper}>
            <div
              className={classes.uploaded_files}
              style={{
                backgroundImage: `url(${image1})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            ></div>

            <div className={classes.new_attachment}>+</div>
          </div>
        </div>
        <div style={{ float: "right", padding: "20px 0" }}>
          <FormButton variant="colored" rounded={true}>
            Add Task
          </FormButton>
        </div>
      </form>
    </div>
  );
};

export default NewTaskForm;
