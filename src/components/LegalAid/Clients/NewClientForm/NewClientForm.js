import React, { useState } from "react";
import classes from "../../../Membership/Members/NewMemberForm/MultiForm/MultiForm.module.css";
import styles from "../../../Membership/Members/NewMemberForm/MultiForm/MultiForm.module.css";
import { SimpleGrid } from "@chakra-ui/react";
import SelectField from "../../../common/SelectField";
import InputField from "../../../common/UI/InputField/InputField";
import FormButton from "../../../common/UI/FormButton/FormButton";
import withForm from "../../../../hoc/withForm";
import DropdownInputField from "./../../../common/UI/DropdownInputField/DropdownInputField";
import { ClientsData } from "./../ClientsTable/ClientsTable";

const NewClientForm = ({ isSubmitting }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  const [show, setShow] = useState(false);

  const keyWordHandler = (e) => {
    setShow(false);
    const { value } = e.target;
    setSearchTerm(value);

    if (searchTerm !== "") {
      const Results = ClientsData.filter((Result) => {
        return Object.values(Result)
          .join(" ")
          .replace(/-/g, " ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(Results);
    }
  };

  const selectedItemHandler = (result) => {
    setSelectedItem(result.name);
    setSearchTerm("");
    setShow(true);
  };

  return (
    <div className={classes.form_wrapper}>
      <div className={classes.field_wrapper}>
        <SimpleGrid columns={2} spacing={1} style={{ alignItems: "center" }}>
          <div className={styles.field_row_label}>Name</div>
          <DropdownInputField
            placeholder="Type client Name"
            keyWordHandler={keyWordHandler}
            searchTerm={searchTerm}
            searchResults={searchResults}
            selectedItem={selectedItem}
            isSelected={show}
            itemClickHandler={selectedItemHandler}
            name="name"
          />
        </SimpleGrid>
        <SimpleGrid
          columns={2}
          spacing={1}
          style={{ alignItems: "center", marginBottom: 10 }}
        >
          <div className={styles.field_row_label}>Sex</div>
          <SelectField
            name="sex"
            placeholder="Select Gender"
            options={[
              { label: "Male", value: "Male" },
              { label: "Female", value: "Female" },
            ]}
          />
        </SimpleGrid>
        <SimpleGrid columns={2} spacing={1} style={{ alignItems: "center" }}>
          <div className={styles.field_row_label}>Email</div>
          <InputField
            placeholder="Type Here"
            name="email"
            fullwidth
            type="email"
          />
        </SimpleGrid>
        <SimpleGrid columns={2} spacing={1} style={{ alignItems: "center" }}>
          <div className={styles.field_row_label}>Age</div>
          <InputField
            placeholder="Type Here"
            name="age"
            fullwidth
            maxLength={3}
          />
        </SimpleGrid>
        <SimpleGrid columns={2} spacing={1} style={{ alignItems: "center" }}>
          <div className={styles.field_row_label}>Telephone Number</div>
          <InputField
            fullwidth
            placeholder="Type Here"
            name="phoneNumber"
            maxLength={12}
          />
        </SimpleGrid>
        <SimpleGrid columns={2} spacing={1} style={{ alignItems: "center" }}>
          <div className={styles.field_row_label}>Address</div>
          <InputField placeholder="Type Here" name="address" fullwidth />
        </SimpleGrid>
        <SimpleGrid columns={2} spacing={1} style={{ alignItems: "center" }}>
          <div className={styles.field_row_label}>Country</div>
          <InputField placeholder="Type Here" name="country" fullwidth />
        </SimpleGrid>
        <SimpleGrid columns={2} spacing={1} style={{ alignItems: "center" }}>
          <div className={styles.field_row_label}>
            NATIONAL IDENTIFICATION No.
          </div>
          <InputField placeholder="Type Here" name="NIN" fullwidth />
        </SimpleGrid>
        <SimpleGrid columns={2} spacing={1} style={{ alignItems: "center" }}>
          <div className={styles.field_row_label}>District</div>
          <InputField placeholder="Type Here" name="district" fullwidth />
        </SimpleGrid>
        <SimpleGrid columns={2} spacing={1} style={{ alignItems: "center" }}>
          <div className={styles.field_row_label}>SubCounty/Town Council</div>
          <InputField placeholder="Type Here" name="subcounty" fullwidth />
        </SimpleGrid>
        <SimpleGrid columns={2} spacing={1} style={{ alignItems: "center" }}>
          <div className={styles.field_row_label}>Parish</div>
          <InputField placeholder="Type Here" name="parish" fullwidth />
        </SimpleGrid>
        <SimpleGrid columns={2} spacing={1} style={{ alignItems: "center" }}>
          <div className={styles.field_row_label}>Village</div>
          <InputField placeholder="Type Here" name="village" fullwidth />
        </SimpleGrid>
        <SimpleGrid columns={2} spacing={1} style={{ alignItems: "center" }}>
          <div className={styles.field_row_label}>Marital Status</div>
          <InputField placeholder="Type Here" name="marital_status" fullwidth />
        </SimpleGrid>
        <SimpleGrid columns={2} spacing={1} style={{ alignItems: "center" }}>
          <div className={styles.field_row_label}>Accompanied By</div>
          <InputField placeholder="Type Here" name="accompaniedBy" fullwidth />
        </SimpleGrid>
        <SimpleGrid columns={2} spacing={1} style={{ alignItems: "center" }}>
          <div className={styles.field_row_label}>Job</div>
          <InputField placeholder="Type Here" name="occupation" fullwidth />
        </SimpleGrid>
        <SimpleGrid columns={2} spacing={1} style={{ alignItems: "center" }}>
          <div className={styles.field_row_label}>Place of work</div>
          <InputField placeholder="Type Here" name="place_of_work" fullwidth />
        </SimpleGrid>
        <SimpleGrid columns={2} spacing={1} style={{ alignItems: "center" }}>
          <div className={styles.field_row_label}>Level of Education</div>
          <InputField
            placeholder="Type Here"
            name="level_of_education"
            fullwidth
          />
        </SimpleGrid>
        <SimpleGrid columns={2} spacing={1} style={{ alignItems: "center" }}>
          <div className={styles.field_row_label}>Preferred Language</div>
          <InputField
            placeholder="Type Here"
            name="preferred_language"
            fullwidth
          />
        </SimpleGrid>
        <SimpleGrid columns={2} spacing={1} style={{ alignItems: "center" }}>
          <div className={styles.field_row_label}>Number of Beneficiaries</div>
          <InputField
            placeholder="Type Here"
            name="num_beneficiaries"
            fullwidth
            maxLength={2}
          />
        </SimpleGrid>
      </div>
      <div style={{ float: "right", padding: "20px 0" }}>
        <FormButton variant="colored" rounded={true} disabled={isSubmitting}>
          {isSubmitting ? "Adding..." : "Add Client"}
        </FormButton>
      </div>
    </div>
  );
};

export default withForm(NewClientForm);
