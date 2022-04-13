import React, { useEffect, useState } from "react";
import { MdTaskAlt, MdClose } from "react-icons/md";
import classes from "../../../Membership/Members/NewMemberForm/MultiForm/MultiForm.module.css";
import { Select, SimpleGrid, useToast } from "@chakra-ui/react";
import InputField from "../../../common/UI/InputField/InputField";
import FormButton from "../../../common/UI/FormButton/FormButton";
import styles from "./NewClvForm.module.css";
import { Form, Formik } from "formik";
import { toastError } from "../../../../lib/toastDetails";
import { clvInitialValues } from "./schema";
import SelectField from "../../../common/SelectField";

const NewClvForm = ({
  action,
  onClose,
  onSubmit,
  isSubmitting,
  isError,
  error,
  projects,
}) => {
  const toast = useToast();
  const [Logo, setLogo] = useState("");
  const userLogoHandler = async (e) => {
    const file = e.target.files[0];
    const Logo = await convertbase64Logo(file);
    setLogo(Logo);
  };

  useEffect(() => {
    if (isError) {
      toast(toastError(error));
    }
  }, [isError, toast, error]);

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
    <Formik
      initialValues={clvInitialValues}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
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
              <InputField placeholder="First Name" name="first_name" />
              <InputField placeholder="First Name" name="last_name" />
            </SimpleGrid>
          </div>
          <div className={classes.field_wrapper}>
            <Select placeholder="Gender" name="gender">
              <option value="option1">Female</option>
              <option value="option2">Male</option>
            </Select>
          </div>
          <div className={classes.field_wrapper}>
            <SimpleGrid columns={2} spacing={2}>
              <InputField placeholder="Nationality" name="nationality" />
              <InputField placeholder="NIN" name="NIN" />
            </SimpleGrid>
          </div>

          <div className={classes.field_wrapper}>
            <div className={styles.field_label}>Personal Address</div>
            <SimpleGrid columns={2} spacing={2}>
              <InputField placeholder="Phone Number" name="phoneNumber" />
              <InputField placeholder="Email Address" name="email" />
            </SimpleGrid>
          </div>
          <div className={classes.field_wrapper}>
            <SimpleGrid columns={2} spacing={2}>
              <InputField placeholder="City" name="city" />
            </SimpleGrid>
          </div>
          <div className={classes.field_wrapper}>
            <SimpleGrid columns={2} spacing={2}>
              <InputField placeholder="District" name="district" />
              <InputField placeholder="Sub County" name="subcounty" />
            </SimpleGrid>
          </div>
          <div className={classes.field_wrapper}>
            <SimpleGrid columns={2} spacing={2}>
              <InputField placeholder="Village" name="village" />
              <InputField placeholder="Zone" name="zone" />
            </SimpleGrid>
          </div>
          <hr />
          <div className={classes.field_wrapper}>
            <SimpleGrid columns={2} spacing={2}>
              <InputField placeholder="Profession" name="profession" />
              <InputField
                placeholder="Year of Training"
                name="year_of_training"
              />
            </SimpleGrid>
          </div>
          <div className={classes.field_wrapper}>
            <SimpleGrid columns={2} spacing={2}>
              <SelectField
                placeholder="Project of Attachment"
                name="project"
                options={projects}
              />
              <InputField
                placeholder="Category of Training Attended"
                name="training_category"
              />
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
              <FormButton
                variant="colored"
                type="submit"
                isSubmitting={isSubmitting}
              >
                Add
              </FormButton>
            )}
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default NewClvForm;
