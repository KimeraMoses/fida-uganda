import React, { useState } from "react";
import classes from "./NewEmployeeForm.module.css";
import { Grid, GridItem, Select, SimpleGrid } from "@chakra-ui/react";
import InputField from "../../../common/UI/InputField/InputField";
import FormButton from "../../../common/UI/FormButton/FormButton";
import withForm from "./../../../../hoc/withForm";

const NewEmployeeForm = ({ isApprove, onClose, user }) => {
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
    <div className={classes.form_wrapper}>
      <div>
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
          </div>
        </div>
        <div className={classes.field_wrapper}>
          <SimpleGrid columns={3} spacing={2}>
            <InputField name="name" placeholder="First Name" />
            <InputField name="name" placeholder="Maiden Name" />
            <InputField name="name" placeholder="Surname" />
          </SimpleGrid>
        </div>
        <div className={classes.field_wrapper}>
          <Grid
            templateColumns="repeat(12, 1fr)"
            gap={4}
            style={{ alignItems: "center" }}
          >
            <GridItem colSpan={4}>
              <Select name="name" placeholder="Select Gender">
                <option value="option1">Male</option>
                <option value="option2">Female</option>
              </Select>
            </GridItem>
            <GridItem colSpan={8}>
              <InputField name="name" placeholder="First Name" fullWidth />
            </GridItem>
          </Grid>
        </div>
        <div className={classes.field_wrapper}>
          <SimpleGrid columns={2} spacing={2}>
            <Select name="name" placeholder="Specialties">
              <option value="option1">Lawyer</option>
              <option value="option2">Legal Officer</option>
            </Select>
            <Select name="name" placeholder="Language">
              <option value="option1">English</option>
              <option value="option2">French</option>
            </Select>
          </SimpleGrid>
        </div>

        <div className={classes.field_wrapper}>
          <SimpleGrid columns={3} spacing={2}>
            <InputField name="name" placeholder="Project Attachment" />
            <InputField name="name" placeholder="Mobile Number" />
            <InputField name="name" placeholder="NSSF Number" />
          </SimpleGrid>
        </div>
        <div className={classes.field_wrapper}>
          <SimpleGrid columns={3} spacing={2} style={{ alignItems: "center" }}>
            <Select name="name" placeholder="Name of Banking Institution">
              <option value="option1">Centenary</option>
              <option value="option2">Equity</option>
            </Select>
            <InputField name="name" placeholder="Mobile Number" />
            <InputField name="name" placeholder="TIN" />
          </SimpleGrid>
        </div>
        <div className={classes.field_wrapper}>
          <SimpleGrid columns={2} spacing={2}>
            <InputField name="name" placeholder="Next of Kin Name" />
            <InputField name="name" placeholder="Mobile Number" />
          </SimpleGrid>
        </div>

        {isApprove ? (
          <div className={classes.form_action_wrapper}>
            <FormButton variant="cancel" type="button">
              Reject
            </FormButton>
            <FormButton variant="save" type="submit">
              Approve
            </FormButton>
          </div>
        ) : (
          <div className={classes.form_action_wrapper}>
            <FormButton variant="cancel" type="button" onClick={onClose}>
              cancel
            </FormButton>
            <FormButton variant="save" type="submit">
              Register
            </FormButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default withForm(NewEmployeeForm);
