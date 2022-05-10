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

const MultForm1 = ({
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

  return (
    <div className={classes.form_wrapper}>
      {isClvCaseFile && (
        <div className={classes.field_wrapper}>
          <div className={classes.field_label}>CLV Details</div>
          <SimpleGrid columns={4} spacing={2} style={{ alignItems: "center" }}>
            <SearchableField
              placeholder="CLV Name"
              data={clvs}
              setSelectedItem={setSelectedClvName}
              selectedItem={selectedClvName.name}
              name="clvName"
            />
            <div>{selectedClvName.id}</div>
            <div>{selectedClvName.project?.name}</div>
            <div>{selectedClvName.district}</div>
          </SimpleGrid>
        </div>
      )}
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
          />

          <InputField placeholder="Type Here" name="respondentName" fullwidth />
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
            options={[
              { label: "Male", value: "M" },
              { label: "Female", value: "F" },
            ]}
          />
        </SimpleGrid>
        <SimpleGrid columns={3} spacing={2} style={{ alignItems: "center" }}>
          <div className={styles.field_row_label}>Age</div>
          <div>{selectedClient.age}</div>
          <InputField
            placeholder="Type Here"
            maxLength="2"
            name="respondentAge"
          />
        </SimpleGrid>
        <SimpleGrid columns={3} spacing={2} style={{ alignItems: "center" }}>
          <div className={styles.field_row_label}>Telephone Number</div>
          <div>{selectedClient.phoneNumber}</div>
          <InputField
            placeholder="Type Here"
            name="respondentPhoneNumber"
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
          <InputField placeholder="Type Here" name="respondentSubCounty" />
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
        <SimpleGrid columns={3} spacing={2} style={{ alignItems: "center" }}>
          <div className={styles.field_row_label}>Marital Status</div>
          <div>{selectedClient.marital_status}</div>
          <InputField placeholder="Type Here" name="respondentMaritalStatus" />
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
          <InputField
            placeholder="Type Here"
            name="respondentPreferredLanguage"
          />
        </SimpleGrid>
        <SimpleGrid columns={3} spacing={2} style={{ alignItems: "center" }}>
          <div className={styles.field_row_label}>
            Relationship with Respondent
          </div>
          <div></div>
          <InputField
            placeholder="Type Here"
            name="respondentRelationshipWithComplainant"
          />
        </SimpleGrid>
      </div>
      {isNew ? (
        <ActionButtons
          page={page}
          onBack={onBack}
          disabled={isSubmitting}
          limit={limit}
        />
      ) : (
        <ActionButtons
          page={page}
          onBack={onBack}
          disabled={isSubmitting}
          limit={limit}
        />
      )}
    </div>
  );
};

export default withForm(MultForm1);
