import classes from "../../../Membership/Members/NewMemberForm/MultiForm/MultiForm.module.css";
import { SimpleGrid } from "@chakra-ui/react";
import InputField from "../../../common/UI/InputField/InputField";
import FormButton from "../../../common/UI/FormButton/FormButton";
import styles from "./NewClvForm.module.css";
import SelectField from "../../../common/SelectField";
import { sexOptions } from "../../../../lib/options";
import { useProjectOptions } from "../../../../hooks/useProjects";
import withForm from "../../../../hoc/withForm";
import { useMemo } from "react";
import { MdClose } from "react-icons/md";
import SelectAvatar from "../../../common/SelectAvatar";

const NewClvForm = ({ isSubmitting, ...rest }) => {
  const { action, onClose, values, setAvatar, toast, url, setImageUrl } = rest;
  const projectOptions = useProjectOptions();
  const projects = useMemo(() => projectOptions, [projectOptions]);

  return (
    <div className={styles.form_wrapper}>
      <div className={styles.form_btn_title_wrapper}>
        <h2>CLV Profiling Form</h2>
        <div className={styles.close_modal_wrapper} onClick={onClose}>
          <MdClose />
        </div>
      </div>
      <div className={classes.user_image_wrapper}>
        <SelectAvatar
          setAvatar={setAvatar}
          toast={toast}
          alignSelf="center"
          borderRadius="full"
          h={20}
          w={20}
          iconObj={{ size: 24 }}
          url={url}
          setImageUrl={setImageUrl}
        />
      </div>
      <div className={classes.field_wrapper}>
        <div className={styles.field_label}>Personal Information</div>
        <SimpleGrid columns={2} spacing={2}>
          <InputField placeholder="First Name" name="first_name" />
          <InputField placeholder="Last Name" name="last_name" />
        </SimpleGrid>
      </div>
      <div className={classes.field_wrapper}>
        <SelectField
          name="gender"
          placeholder="Select Gender"
          options={sexOptions}
          size="lg"
        />
      </div>
      <div className={classes.field_wrapper}>
        <SimpleGrid columns={2} spacing={2}>
          <InputField placeholder="Nationality" name="nationality" />
          <InputField placeholder="NIN" name="NIN" maxLength="14" />
        </SimpleGrid>
      </div>

      <div className={classes.field_wrapper}>
        <div className={styles.field_label}>Personal Address</div>
        <SimpleGrid columns={2} spacing={2}>
          <InputField
            placeholder="Phone Number"
            name="phoneNumber"
            maxLength={12}
          />
          <InputField placeholder="Email Address" name="email" type="email" />
        </SimpleGrid>
      </div>
      <div className={classes.field_wrapper}>
        <SimpleGrid columns={2} spacing={2}>
          <InputField placeholder="City" name="city" />
          <InputField placeholder="Address" name="address" />
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
            maxLength={4}
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
      <div className={classes.field_wrapper}>
        <SimpleGrid columns={2} spacing={2} mt={5}>
          <InputField
            label="Recruitment Date"
            type="date"
            name="recruitmentDate"
          />
          <InputField label="Expiry Date" type="date" name="expiryDate" />
        </SimpleGrid>
      </div>

      <div
        className={`${styles.form_action_btn_wrapper} ${
          action === "newClv" ? styles.btn_right : ""
        }`}
      >
        {action !== "newClv" ? (
          <>
            <FormButton
              variant="outlined"
              type="button"
              status="fail"
              onClick={onClose}
            >
              Cancel
            </FormButton>
            <FormButton variant="outlined" type="submit" status="success">
              {isSubmitting
                ? "Saving..."
                : action !== "editClv"
                ? values.isActive
                  ? "Deactivate"
                  : "Approve"
                : "Save changes"}
            </FormButton>
          </>
        ) : (
          <FormButton
            variant="colored"
            type="submit"
            isSubmitting={isSubmitting}
          >
            {isSubmitting ? "Saving..." : "Add"}
          </FormButton>
        )}
      </div>
    </div>
  );
};

export default withForm(NewClvForm);
