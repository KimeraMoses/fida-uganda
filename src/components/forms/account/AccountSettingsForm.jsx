import { Form, Formik } from "formik";
import { SimpleGrid, Heading, Flex } from "@chakra-ui/react";
import TextField from "../../common/TextField";
import NumberField from "../../common/NumberField";
import SelectField from "../../common/SelectField";
import {
  designationOptions,
  maritalStatusOptions,
  sexOptions,
} from "../../../lib/options";
import { useState } from "react";
import MultiUpload from "../../common/MultiUpload";
import { useProjectOptions } from "../../../hooks/useProjects";

const AccountSettingsForm = () => {
  const [files, setFiles] = useState([]);
  const projectOptions = useProjectOptions();

  return (
    <Formik>
      <Flex flexDir="column" bgColor="white" p={20} borderRadius={10}>
        <SimpleGrid as={Form} gap={5}>
          <TextField name="name" placeholder="Name" />
          <SimpleGrid columns={3} gap={5}>
            <TextField name="dateOfBirth" type="date" />
            <SelectField
              name="maritalStatus"
              options={maritalStatusOptions}
              placeholder="Select Martial Status"
            />
            <TextField
              name="levelOfEducation"
              placeholder="Level of Education"
            />
          </SimpleGrid>
          <SimpleGrid columns={2} gap={5}>
            <SelectField
              name="gender"
              options={sexOptions}
              placeholder="Select Sex"
            />
            <TextField name="email" type="email" placeholder="Email" />
          </SimpleGrid>
          <NumberField name="phoneNumber" placeholder="Phone Number" />
          <SimpleGrid columns={2}>
            <SelectField
              name="designation"
              placeholder="Select Designation"
              options={designationOptions}
            />
          </SimpleGrid>
          <SimpleGrid columns={3} gap={5}>
            <SelectField
              name="project"
              options={projectOptions}
              placeholder="Select Project"
            />
            <TextField name="contractStart" type="date" />
            <TextField name="contractEnd" type="date" />
          </SimpleGrid>
          <SimpleGrid columns={2} gap={5}>
            <TextField name="bank" placeholder="Banking Institution" />
            <NumberField name="accountNumber" placeholder="Account Number" />
          </SimpleGrid>
          <SimpleGrid columns={2} gap={5}>
            <NumberField
              name="tin"
              placeholder="Tax Identification Number (TIN)"
            />
            <NumberField name="nssf" placeholder="NSSF" />
          </SimpleGrid>
          <SimpleGrid columns={2} gap={5}>
            <TextField name="nextOfKin" placeholder="Next of Kin" />
            <NumberField
              name="nextOfKinPhoneNumber"
              placeholder="Next of Kin Phone Number"
            />
          </SimpleGrid>
          <Heading fontSize="md" fontWeight="light" mt={5}>
            Essential Documents
          </Heading>
        </SimpleGrid>
        <MultiUpload files={files} setFiles={setFiles} />
      </Flex>
    </Formik>
  );
};

export default AccountSettingsForm;
