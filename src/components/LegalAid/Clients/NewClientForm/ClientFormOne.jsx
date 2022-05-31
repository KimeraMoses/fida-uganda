import classes from "../../../Membership/Members/NewMemberForm/MultiForm/MultiForm.module.css";
import styles from "../../../Membership/Members/NewMemberForm/MultiForm/MultiForm.module.css";
import { SimpleGrid } from "@chakra-ui/react";
import SelectField from "../../../common/SelectField";
import InputField from "../../../common/UI/InputField/InputField";
import withForm from "../../../../hoc/withForm";
import ActionButtons from "../../../Membership/Members/NewMemberForm/MultiForm/ActionButtons/ActionButtons";
import { sexOptions } from "../../../../lib/options";

const ClientFormOne = ({ page, limit, onBack, isSubmitting, values }) => {
  return (
    <div className={classes.form_wrapper}>
      <div className={classes.field_wrapper}>
        <SimpleGrid columns={2} spacing={1} style={{ alignItems: "center" }}>
          <div className={styles.field_row_label}>Name</div>
          <InputField
            placeholder="Client Name"
            name="name"
            fullwidth
            type="text"
          />
        </SimpleGrid>
        <SimpleGrid
          columns={2}
          spacing={1}
          style={{ alignItems: "center", marginBottom: "5px" }}
        >
          <div className={styles.field_row_label}>Sex</div>
          <SelectField
            name="sex"
            placeholder="Select Gender"
            options={sexOptions}
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
          <InputField
            placeholder="Type Here"
            name="NIN"
            fullwidth
            maxLength={14}
          />
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
        <SimpleGrid
          columns={2}
          spacing={1}
          style={{ alignItems: "center", marginBottom: "5px" }}
        >
          <div className={styles.field_row_label}>Marital Status</div>
          <SelectField
            name="marital_status"
            placeholder="Select Status"
            options={[
              { label: "Single", value: "single" },
              { label: "Married", value: "married" },
              { label: "Divorced", value: "divorced" },
            ]}
          />
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
        <SimpleGrid
          columns={2}
          spacing={1}
          style={{ alignItems: "center", marginBottom: "5px" }}
        >
          <div className={styles.field_row_label}>Level of Education</div>
          <SelectField
            name="level_of_education"
            placeholder="Select Level"
            options={[
              { label: "Degree", value: "degree" },
              { label: "Diploma", value: "diploma" },
              { label: "Certificate", value: "certificate" },
              { label: "Lower", value: "lower" },
            ]}
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
        <ActionButtons
          page={page}
          onBack={onBack}
          disabled={isSubmitting}
          limit={limit}
        />
      </div>
    </div>
  );
};

export default withForm(ClientFormOne);
