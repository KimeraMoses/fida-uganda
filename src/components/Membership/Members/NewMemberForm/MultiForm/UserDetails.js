import React, { useState } from "react";
import {
  MdTaskAlt
} from "react-icons/md";
import classes from "./MultiForm.module.css";
import ActionButtons from "./ActionButtons/ActionButtons";
import InputField from "./InputField/InputField";
import { Select, SimpleGrid } from "@chakra-ui/react";

const UserDetails = ({ nextStep, handleChange, values, Continue }) => {
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
      <form>
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
          <SimpleGrid columns={3} spacing={2}>
            <InputField placeholder="First Name" />
            <InputField placeholder="First Name" />
            <InputField placeholder="First Name" />
          </SimpleGrid>
        </div>
        <div className={classes.field_wrapper}>
          <div className={classes.field_label}>Personal Address</div>
          <SimpleGrid columns={2} spacing={2}>
            <InputField placeholder="First Name" />
            <InputField placeholder="First Name" />
          </SimpleGrid>
          <InputField placeholder="Email Address" fullwidth />
        </div>
        <div className={classes.field_wrapper}>
          <div className={classes.field_label}>Employment Status</div>
          <InputField placeholder="Employment Sector" fullwidth />
        </div>
        <div className={classes.field_wrapper}>
          <div className={classes.field_label}>Personal Details</div>
          <p>In which year did you complete your undergraduate studies(LLB)?</p>
          <InputField placeholder="YYY" fullwidth />
          <p>Additional academic qualifications/trainings beyond LLB</p>
          <InputField placeholder="YYY" fullwidth />
          <p>Duration/Period as FIDA-Uganda Member</p>
          <InputField placeholder="2 Years" fullwidth />
          <p>Membership Fee Status</p>
          <Select placeholder="Select option">
            <option value="option1">Paid</option>
            <option value="option2">Pending</option>
          </Select>
        </div>

        <ActionButtons step={values.step} Continue={Continue} />
      </form>
    </div>
  );
};

export default UserDetails;
