import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import InputField from "./../../../../common/UI/InputField/InputField";
import SelectField from "./../../../../common/SelectField";
import { sexOptions } from "./../../../../../lib/options";
import classes from "./AddBeneficiariesForm.module.css";
import FormButton from "./../../../../common/UI/FormButton/FormButton";

const AddBeneficiariesForm = () => {
  return (
    <div className={classes.beneficiaries_form_wrapper}>
      <h4>Add New Beneficiary</h4>
      <SimpleGrid columns={5} spacing={1} style={{ alignItems: "center" }}>
        <InputField
          placeholder="Name"
          name="name"
          fullwidth
          type="text"
          label="Name"
        />
        <InputField
          placeholder="Age"
          name="age"
          fullwidth
          type="number"
          label="Age"
        />
        <div className={classes.select_field}>
          <SelectField
            name="respondentSex"
            placeholder="Select Sex"
            options={sexOptions}
            label="Sex"
          />
        </div>
        <InputField
          placeholder="location"
          name="address"
          fullwidth
          type="text"
          label="Location"
        />
        <InputField
          placeholder="+256759130054"
          name="phoneNumber"
          fullwidth
          type="tel"
          label="Phone Number"
        />
      </SimpleGrid>
      <div className={classes.form_action_wrapper}>
        <FormButton variant="colored" rounded={true}>
          + Add
        </FormButton>
      </div>
    </div>
  );
};

export default AddBeneficiariesForm;
