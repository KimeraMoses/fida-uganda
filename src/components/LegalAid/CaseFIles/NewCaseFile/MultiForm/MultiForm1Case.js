import classes from "../../../../Membership/Members/NewMemberForm/MultiForm/MultiForm.module.css";
import styles from "./MultiForm.module.css";
import { SimpleGrid } from "@chakra-ui/react";
import InputField from "../../../../common/UI/InputField/InputField";
import ActionButtons from "../../../../Membership/Members/NewMemberForm/MultiForm/ActionButtons/ActionButtons";
import SelectField from "./../../../../common/SelectField";
import SearchableField from "./../../../../common/UI/SearchableField/SearchableField";
import { useClientOptions } from "../../../../../hooks/useClients";
import { useClvsDetails } from "../../../../../hooks/useClv";
import withForm from "../../../../../hoc/withForm";
import { sexOptions } from "../../../../../lib/options";

const MultForm11 = ({
  page,
  isClvCaseFile,
  isNew,
  limit,
  onBack,
  isSubmitting,
  selectedClient,
  setSelectedClient,
  setSelectedClvName,
  selectedClvName,
}) => {
  const clvs = useClvsDetails();
  const clients = useClientOptions();

  const selectedClv =
    selectedClvName?.first_name + " " + selectedClvName?.last_name;

  return (
    <div className={classes.form_wrapper}>
      <div className={classes.field_wrapper}>
        <div className={classes.field_label}>1. Personal Address</div>
        <div className={classes.field_wrapper}>
          <SimpleGrid columns={3} spacing={2}>
            <div>BIO DATA</div>
            <div>COMPLAINANT</div>
            <div>RESPONDENT</div>
          </SimpleGrid>
        </div>
        <SimpleGrid columns={3} spacing={2} style={{ alignItems: "center" }}>
          <div className={styles.field_row_label}>Name</div>
          <SearchableField
            placeholder="Type client Name"
            data={clients}
            setSelectedItem={setSelectedClient}
            selectedItem={selectedClient.name}
            name="searchClient"
            defaultValue={selectedClient?.name}
          />

          <InputField placeholder="Type Here" name="respondentName" fullWidth />
        </SimpleGrid>
        <SimpleGrid
          columns={3}
          spacing={2}
          style={{ alignItems: "center", marginBottom: 10 }}
        >
          <div className={styles.field_row_label}>Sex</div>
          <div>{selectedClient.sex}</div>
          <SelectField
            name="respondentSex"
            placeholder="Select Sex"
            options={sexOptions}
          />
        </SimpleGrid>
        <SimpleGrid columns={3} spacing={2} style={{ alignItems: "center" }}>
          <div className={styles.field_row_label}>Age</div>
          <div>{selectedClient.age}</div>
          <InputField
            placeholder="Type Here"
            maxLength="3"
            name="respondentAge"
          />
        </SimpleGrid>
        <SimpleGrid columns={3} spacing={2} style={{ alignItems: "center" }}>
          <div className={styles.field_row_label}>Telephone Number</div>
          <div>{selectedClient.phoneNumber}</div>
          <InputField
            placeholder="Type Here"
            name="respondentPhone"
            maxLength="12"
          />
        </SimpleGrid>
        <SimpleGrid columns={3} spacing={2} style={{ alignItems: "center" }}>
          <div className={styles.field_row_label}>Country</div>
          <div>{selectedClient.country}</div>
          <InputField placeholder="Type Here" name="respondentCountry" />
        </SimpleGrid>
        <SimpleGrid columns={3} spacing={2} style={{ alignItems: "center" }}>
          <div className={styles.field_row_label}>
            NATIONAL IDENTIFICATION No.
          </div>
          <div>{selectedClient.NIN}</div>
          <InputField
            placeholder="Type Here"
            name="respondentNIN"
            maxLength="14"
          />
        </SimpleGrid>
        <SimpleGrid columns={3} spacing={2} style={{ alignItems: "center" }}>
          <div className={styles.field_row_label}>District</div>
          <div>{selectedClient.district}</div>
          <InputField placeholder="Type Here" name="respondentDistrict" />
        </SimpleGrid>
        <SimpleGrid columns={3} spacing={2} style={{ alignItems: "center" }}>
          <div className={styles.field_row_label}>SubCounty/Town Council</div>
          <div>{selectedClient.subcounty}</div>
          <InputField placeholder="Type Here" name="respondentCounty" />
        </SimpleGrid>
        <SimpleGrid columns={3} spacing={2} style={{ alignItems: "center" }}>
          <div className={styles.field_row_label}>Parish</div>
          <div>{selectedClient.parish}</div>
          <InputField placeholder="Type Here" name="respondentParish" />
        </SimpleGrid>
        <SimpleGrid columns={3} spacing={2} style={{ alignItems: "center" }}>
          <div className={styles.field_row_label}>Village</div>
          <div>{selectedClient.village}</div>
          <InputField placeholder="Type Here" name="respondentVillage" />
        </SimpleGrid>
        <SimpleGrid
          columns={3}
          spacing={2}
          style={{ alignItems: "center", marginBottom: 8 }}
        >
          <div className={styles.field_row_label}>Marital Status</div>
          <div>{selectedClient.marital_status}</div>
          <SelectField
            name="respondentMaritalStatus"
            placeholder="Select Status"
            options={[
              { label: "Single", value: "single" },
              { label: "Married", value: "married" },
              { label: "Divorced", value: "divorced" },
            ]}
          />
        </SimpleGrid>
        <SimpleGrid columns={3} spacing={2} style={{ alignItems: "center" }}>
          <div className={styles.field_row_label}>Accompanied By</div>
          <div>{selectedClient.accompaniedBy}</div>
          <InputField placeholder="Type Here" name="respondentAccompaniedBy" />
        </SimpleGrid>
        <SimpleGrid columns={3} spacing={2} style={{ alignItems: "center" }}>
          <div className={styles.field_row_label}>Job</div>
          <div>{selectedClient.occupation}</div>
          <InputField placeholder="Type Here" name="respondentJob" />
        </SimpleGrid>
        <SimpleGrid columns={3} spacing={2} style={{ alignItems: "center" }}>
          <div className={styles.field_row_label}>Place of work</div>
          <div>{selectedClient.place_of_work}</div>
          <InputField placeholder="Type Here" name="respondentPlaceOfWork" />
        </SimpleGrid>
        <SimpleGrid columns={3} spacing={2} style={{ alignItems: "center" }}>
          <div className={styles.field_row_label}>Level of Education</div>
          <div>{selectedClient.level_of_education}</div>
          <InputField
            placeholder="Type Here"
            name="respondentLevelOfEducation"
          />
        </SimpleGrid>
        <SimpleGrid columns={3} spacing={2} style={{ alignItems: "center" }}>
          <div className={styles.field_row_label}>Preferred Language</div>
          <div>{selectedClient.preferred_language}</div>
          <InputField placeholder="Type Here" name="respondentLanguage" />
        </SimpleGrid>
        <SimpleGrid columns={3} spacing={2} style={{ alignItems: "center" }}>
          <div className={styles.field_row_label}>
            Relationship with Respondent
          </div>
          <div></div>
          <InputField placeholder="Type Here" name="respondentRelation" />
        </SimpleGrid>
      </div>
      <ActionButtons
        page={page}
        onBack={onBack}
        disabled={isSubmitting}
        loading={isSubmitting}
        limit={limit}
      />
    </div>
  );
};

export default withForm(MultForm11);
