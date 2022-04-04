import React from "react";
import classes from "../../../../Membership/Members/NewMemberForm/MultiForm/MultiForm.module.css";
import styles from "./MultiForm.module.css";
import { SimpleGrid } from "@chakra-ui/react";
import InputField from "../../../../Membership/Members/NewMemberForm/MultiForm/InputField/InputField";
import ActionButtons from "../../../../Membership/Members/NewMemberForm/MultiForm/ActionButtons/ActionButtons";

const MultForm1 = ({ nextStep, handleChange, values, Continue }) => {
  return (
    <div className={classes.form_wrapper}>
      <form>
        <div className={classes.field_wrapper}>
          <div className={classes.field_label}>1. CLV Details </div>
          <SimpleGrid columns={4} spacing={1} style={{ alignItems: "center" }}>
            <InputField placeholder="CLV Name" />
            <InputField placeholder="CLV ID number" />
            <InputField placeholder="Project of Attachement" />
            <InputField placeholder="District of Operation" />
          </SimpleGrid>
        </div>

        <div className={classes.field_wrapper}>
          <div className={classes.field_label}>1. Personal Address</div>
          <div className={classes.field_wrapper}>
            <SimpleGrid columns={3} spacing={2}>
              <div>BIO DATA</div>
              <div>COMPLAINANT</div>
              <div>RESPONDENT</div>
            </SimpleGrid>
          </div>
          <SimpleGrid columns={3} spacing={1} style={{ alignItems: "center" }}>
            <div className={styles.field_row_label}>Name</div>
            <InputField placeholder="Type Here" />
            <InputField placeholder="Type Here" />
          </SimpleGrid>
          <SimpleGrid columns={3} spacing={1} style={{ alignItems: "center" }}>
            <div className={styles.field_row_label}>Sex</div>
            <InputField placeholder="Type Here" />
            <InputField placeholder="Type Here" />
          </SimpleGrid>
          <SimpleGrid columns={3} spacing={1} style={{ alignItems: "center" }}>
            <div className={styles.field_row_label}>Age</div>
            <InputField placeholder="Type Here" type="number" />
            <InputField placeholder="Type Here" type="number" />
          </SimpleGrid>
          <SimpleGrid columns={3} spacing={1} style={{ alignItems: "center" }}>
            <div className={styles.field_row_label}>Country</div>
            <InputField placeholder="Type Here" type="number" />
            <InputField placeholder="Type Here" type="number" />
          </SimpleGrid>
          <SimpleGrid columns={3} spacing={1} style={{ alignItems: "center" }}>
            <div className={styles.field_row_label}>
              NATIONAL IDENTIFICATION No.
            </div>
            <InputField placeholder="Type Here" />
            <InputField placeholder="Type Here" />
          </SimpleGrid>
          <SimpleGrid columns={3} spacing={1} style={{ alignItems: "center" }}>
            <div className={styles.field_row_label}>District</div>
            <InputField placeholder="Type Here" />
            <InputField placeholder="Type Here" />
          </SimpleGrid>
          <SimpleGrid columns={3} spacing={1} style={{ alignItems: "center" }}>
            <div className={styles.field_row_label}>SubCounty/Town Council</div>
            <InputField placeholder="Type Here" />
            <InputField placeholder="Type Here" />
          </SimpleGrid>
          <SimpleGrid columns={3} spacing={1} style={{ alignItems: "center" }}>
            <div className={styles.field_row_label}>Parish</div>
            <InputField placeholder="Type Here" />
            <InputField placeholder="Type Here" />
          </SimpleGrid>
          <SimpleGrid columns={3} spacing={1} style={{ alignItems: "center" }}>
            <div className={styles.field_row_label}>Village</div>
            <InputField placeholder="Type Here" />
            <InputField placeholder="Type Here" />
          </SimpleGrid>
          <SimpleGrid columns={3} spacing={1} style={{ alignItems: "center" }}>
            <div className={styles.field_row_label}>Telephone Number</div>
            <InputField placeholder="Type Here" />
            <InputField placeholder="Type Here" />
          </SimpleGrid>
          <SimpleGrid columns={3} spacing={1} style={{ alignItems: "center" }}>
            <div className={styles.field_row_label}>Parish</div>
            <InputField placeholder="Type Here" />
            <InputField placeholder="Type Here" />
          </SimpleGrid>
          <SimpleGrid columns={3} spacing={1} style={{ alignItems: "center" }}>
            <div className={styles.field_row_label}>Marital Status</div>
            <InputField placeholder="Type Here" />
            <InputField placeholder="Type Here" />
          </SimpleGrid>
          <SimpleGrid columns={3} spacing={1} style={{ alignItems: "center" }}>
            <div className={styles.field_row_label}>Accompanied By</div>
            <InputField placeholder="Type Here" />
            <InputField placeholder="Type Here" />
          </SimpleGrid>
          <SimpleGrid columns={3} spacing={1} style={{ alignItems: "center" }}>
            <div className={styles.field_row_label}>Job</div>
            <InputField placeholder="Type Here" />
            <InputField placeholder="Type Here" />
          </SimpleGrid>
          <SimpleGrid columns={3} spacing={1} style={{ alignItems: "center" }}>
            <div className={styles.field_row_label}>Place of work</div>
            <InputField placeholder="Type Here" />
            <InputField placeholder="Type Here" />
          </SimpleGrid>
          <SimpleGrid columns={3} spacing={1} style={{ alignItems: "center" }}>
            <div className={styles.field_row_label}>Level of Education</div>
            <InputField placeholder="Type Here" />
            <InputField placeholder="Type Here" />
          </SimpleGrid>
          <SimpleGrid columns={3} spacing={1} style={{ alignItems: "center" }}>
            <div className={styles.field_row_label}>Place of work</div>
            <InputField placeholder="Type Here" />
            <InputField placeholder="Type Here" />
          </SimpleGrid>
          <SimpleGrid columns={3} spacing={1} style={{ alignItems: "center" }}>
            <div className={styles.field_row_label}>Prefered Language</div>
            <InputField placeholder="Type Here" />
            <InputField placeholder="Type Here" />
          </SimpleGrid>
          <SimpleGrid columns={3} spacing={1} style={{ alignItems: "center" }}>
            <div className={styles.field_row_label}>
              Relationship with Respondent
            </div>
            <InputField placeholder="Type Here" />
            <InputField placeholder="Type Here" />
          </SimpleGrid>
        </div>

        <ActionButtons step={values.step} Continue={Continue} />
      </form>
    </div>
  );
};

export default MultForm1;
