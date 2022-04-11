import React, { useState } from "react";
import { MdTaskAlt, MdClose } from "react-icons/md";
import classes from "../../../Membership/Members/NewMemberForm/MultiForm/MultiForm.module.css";
import { Select, SimpleGrid } from "@chakra-ui/react";
import InputField from "../../../Membership/Members/NewMemberForm/MultiForm/InputField/InputField";
import styles from "./NewClvForm.module.css";
import FormButton from "../../../Membership/MembersActivities/NewActivityForm/Button/FormButton";
import { Form, Formik } from "formik";

const NewClvForm = (props) => {
  const { action, onClose } = props;
  const [Logo, setLogo] = useState("");
  const userLogoHandler = async (e) => {
    const file = e.target.files[0];
    const Logo = await convertbase64Logo(file);
    setLogo(Logo);
  };

  const ImageIconClick = () => {
    const fileInput = document.getElementById("user_img");
    fileInput.click();
  };

  const convertbase64Logo = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <Formik>
      
      <div className={styles.form_wrapper}>
        <div className={styles.form_btn_title_wrapper}>
          <h2>CLV Profiling Form</h2>
          <div className={styles.close_modal_wrapper} onClick={onClose}>
            <MdClose />
          </div>
        </div>
        <Form>
          <div className={classes.user_image_wrapper}>
            <div
              className={classes.user_image}
              style={{
                backgroundImage: `url(${Logo})`,
                backgroundSize: "cover",
                backgroundPosition: "center top",
              }}
              onClick={ImageIconClick}
            >
              <input
                type="file"
                id="user_img"
                hidden
                accept=".png, .jpg, .jpeg"
                onChange={(e) => userLogoHandler(e)}
              />
              <div className={classes.img_icon}>
                <MdTaskAlt />
              </div>
            </div>
          </div>
          <div className={classes.field_wrapper}>
            <div className={styles.field_label}>Personal Information</div>
            <SimpleGrid columns={2} spacing={2}>
              <InputField placeholder="First Name" />
              <InputField placeholder="First Name" />
            </SimpleGrid>
          </div>
          <div className={classes.field_wrapper}>
            <Select placeholder="Gender">
              <option value="option1">Female</option>
              <option value="option2">Male</option>
            </Select>
          </div>
          <div className={classes.field_wrapper}>
            <SimpleGrid columns={2} spacing={2}>
              <InputField placeholder="Nationality" />
              <InputField placeholder="NIN" />
            </SimpleGrid>
          </div>

          <div className={classes.field_wrapper}>
            <div className={styles.field_label}>Personal Address</div>
            <SimpleGrid columns={2} spacing={2}>
              <InputField placeholder="Phone Number" />
              <InputField placeholder="Email Address" />
            </SimpleGrid>
          </div>
          <div className={classes.field_wrapper}>
            <SimpleGrid columns={2} spacing={2}>
              <InputField placeholder="District" />
              <InputField placeholder="Sub County" />
            </SimpleGrid>
          </div>
          <div className={classes.field_wrapper}>
            <SimpleGrid columns={2} spacing={2}>
              <InputField placeholder="Village" />
              <InputField placeholder="Zone" />
            </SimpleGrid>
          </div>
          <hr />
          <div className={classes.field_wrapper}>
            <SimpleGrid columns={2} spacing={2}>
              <InputField placeholder="Profession" />
              <InputField placeholder="Year of Training" />
            </SimpleGrid>
          </div>
          <div className={classes.field_wrapper}>
            <SimpleGrid columns={2} spacing={2}>
              <InputField placeholder="Project of Attachment" />
              <InputField placeholder="Category of Training Attended" />
            </SimpleGrid>
          </div>

          <div
            className={`${styles.form_action_btn_wrapper} ${
              action === "newClv" ? styles.btn_right : ""
            }`}
          >
            {action !== "newClv" ? (
              <>
                <FormButton variant="outlined" type="button" status="fail">
                  {action !== "editClv" ? "Reject" : "Deactivate"}
                </FormButton>
                <FormButton variant="outlined" type="submit" status="success">
                  {action !== "editClv" ? "Approve" : "Save changes"}
                </FormButton>
              </>
            ) : (
              <FormButton variant="colored">Add</FormButton>
            )}
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default NewClvForm;
