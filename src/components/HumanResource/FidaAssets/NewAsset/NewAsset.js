import { Select, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { AttachmentIcon } from "../../../../assets/Icons/Icons";
import InputField from "../../../Membership/Members/NewMemberForm/MultiForm/InputField/InputField";
import FormButton from "../../../Membership/MembersActivities/NewActivityForm/Button/FormButton";
import classes from "./NewAsset.module.css";
import image1 from "../../../../assets/images/placeholder.png";

const NewAsset = () => {
  return (
    <div className={classes.new_asset_wrapper}>
      <form>
        <SimpleGrid columns={2} spacing={2}>
          <InputField placeholder="Project Name" />
          <InputField placeholder="Budget Year" />
        </SimpleGrid>
        <Select placeholder="Type">
          <option value="option1">Type 1</option>
          <option value="option2">Type 2</option>
        </Select>
        <SimpleGrid columns={2} spacing={2}>
          <InputField placeholder="Unit Price" />
          <InputField placeholder="Number of Units Required" />
        </SimpleGrid>
        <InputField placeholder="Date Delivered" fullwidth />
        <InputField placeholder="Office in Possesion" fullwidth />
        <InputField placeholder="Person (s) in Possesion" fullwidth />
        <div className={classes.asset_attachement_wrapper}>
          <h6><AttachmentIcon /> Attachments (2)</h6>
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
            Add Asset
          </FormButton>
        </div>
      </form>
    </div>
  );
};

export default NewAsset;
