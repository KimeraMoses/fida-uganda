import withForm from "../../../../../hoc/withForm";
import InputField from "../../../../common/UI/InputField/InputField";
import classes from "./MultiForm.module.css";
import ActionButtons from "./ActionButtons/ActionButtons";
import { SimpleGrid } from "@chakra-ui/react";

const UserDetails = ({ page, limit, isSubmitting, onBack }) => {
  return (
    <div className={classes.form_wrapper}>
      <div className={classes.user_image_wrapper}>
        {/* Add Image component here */}
      </div>
      <div className={classes.field_wrapper}>
        <SimpleGrid columns={3} spacing={2}>
          <InputField name="first_name" placeholder="First Name" />
          <InputField name="maiden_name" placeholder="Median Name" />
          <InputField name="last_name" placeholder="Last Name" />
        </SimpleGrid>
      </div>
      <div className={classes.field_wrapper}>
        <div className={classes.field_label}>Personal Address</div>
        <SimpleGrid columns={2} spacing={2}>
          <InputField name="address" placeholder="Postal Address" />
          <InputField
            maxLength="12"
            name="phoneNumber"
            placeholder="Telephone Number"
          />
        </SimpleGrid>
        <InputField
          type="email"
          name="email"
          placeholder="Email Address"
          fullWidth
        />
      </div>
      <div className={classes.field_wrapper}>
        <div className={classes.field_label}>Employment Status</div>
        <InputField
          name="employment_status"
          placeholder="Employment Status"
          fullWidth
        />
      </div>
      <div className={classes.field_wrapper}>
        <div className={classes.field_label}>Personal Details</div>
        <p>In which year did you complete your undergraduate studies(LLB)?</p>
        <InputField
          name="year_of_undergraduate_completion"
          placeholder="YYYY"
          fullWidth
        />
        <p>Additional academic qualifications/trainings beyond LLB</p>
        <InputField
          name="additional_skills"
          placeholder="Additional academic qualifications/trainings beyond LLB"
          fullWidth
        />
        <p>Duration/Period as FIDA-Uganda Member</p>
        <InputField
          name="membership_duration"
          placeholder="2 Years"
          fullWidth
        />
      </div>

      <ActionButtons
        page={page}
        limit={limit}
        disabled={isSubmitting}
        onBack={onBack}
      />
    </div>
  );
};

export default withForm(UserDetails);
