import { Formik, Form } from "formik";
import { Flex, SimpleGrid, GridItem } from "@chakra-ui/react";
import TextField from "../TextField";
import SelectField from "../SelectField";
import { accountInitialValues, accountSchema } from "./schemas/account";
import NumberField from "../NumberField";
import {
  sexOptions,
  designationOptions,
  projectOptions,
} from "../../assets/options";

const AccountForm = () => {
  return (
    <Formik
      initialValues={accountInitialValues}
      validationSchema={accountSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Flex flexDir="column" as={Form} bgColor="white" p={5}>
        <SimpleGrid columns={2} gap={5}>
          <TextField name="name" placeholder="Name" autoComplete="off" />
          <TextField name="email" placeholder="Email" autoComplete="off" />
          <SimpleGrid columns={3} gap={5}>
            <SelectField
              name="sex"
              placeholder="Select Sex"
              options={sexOptions}
            />
            <SelectField
              name="designation"
              placeholder="Select Designation"
              options={designationOptions}
            />
            <SelectField
              name="project"
              placeholder="Select Project"
              options={projectOptions}
            />
          </SimpleGrid>
        </SimpleGrid>
        <SimpleGrid columns={2} gap={5}>
          <TextField name="bank" placeholder="Bank Name" />
          <NumberField name="bankAccount" placeholder="Bank Account Number" />
        </SimpleGrid>
        <SimpleGrid columns={2} gap={5}>
          <TextField name="nextOfKin" placeholder="Next of Kin" />
          <NumberField
            name="nextOfKinPhoneNumber"
            placeholder="Next of Kin Phone Number"
          />
        </SimpleGrid>
      </Flex>
    </Formik>
  );
};

export default AccountForm;
