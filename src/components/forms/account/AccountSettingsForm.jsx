import { useEffect } from "react";
import { Form, Formik } from "formik";
import { SimpleGrid, Heading, Flex, useToast } from "@chakra-ui/react";
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
import { employeesInitialValues } from "./schema";
import { toastError } from "../../../lib/toastDetails";

const AccountSettingsForm = ({ onSubmit, isSubmitting, isError, error }) => {
  const toast = useToast();
  const [files, setFiles] = useState([]);
  const projectOptions = useProjectOptions();

  useEffect(() => {
    if (isError) {
      toast(toastError(error));
    }
  }, [isError, error, toast]);

  return (
    <Formik
      initialValues={employeesInitialValues}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      <Flex flexDir="column" bgColor="white" p={20} borderRadius={10}>
        <SimpleGrid as={Form} gap={5}>
          <SimpleGrid columns={3} gap={5}>
            <TextField name="first_name" placeholder="First Name" />
            <TextField name="last_name" placeholder="Last Name" />
            <TextField name="maiden_name" placeholder="Last Name" />
          </SimpleGrid>
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
            <NumberField name="account_number" placeholder="Account Number" />
          </SimpleGrid>
          <SimpleGrid columns={2} gap={5}>
            <NumberField
              name="tinNumber"
              placeholder="Tax Identification Number (TIN)"
            />
            <NumberField name="NSSF__number" placeholder="NSSF" />
          </SimpleGrid>
          <SimpleGrid columns={2} gap={5}>
            <TextField name="next_of_kin_name" placeholder="Next of Kin" />
            <NumberField
              name="next_of_kin_number"
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
