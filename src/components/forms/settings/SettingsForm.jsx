import { useState } from "react";
import { Form, Formik } from "formik";
import { Box, GridItem, SimpleGrid, Flex } from "@chakra-ui/react";
import TextField from "../../common/TextField";
import SelectField from "../../common/SelectField";
import {
  genderOptions,
  designationOptions,
  roleOptions,
} from "../../../defaultData/menu/options";
import settingsValidation, { initialValues } from "./validation/settings";
import AvatarUpload from "../../common/AvatarUpload";
import { validateFormInput } from "../auth/validations/singup";
import SubmitButton from "../auth/SubmitButton";

const SettingsForm = () => {
  const [image, setImage] = useState("");
  const [file, setFile] = useState(null);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={settingsValidation}
      onSubmit={(values) => {
        if (!file) {
          return;
        }
        const formData = validateFormInput(file, values);
        console.log(formData);
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Box as={Form} p="3rem" bgColor="white">
        <Flex direction="column" mb={10}>
          <AvatarUpload image={image} setFile={setFile} setImage={setImage} />
        </Flex>
        <SimpleGrid columns={2} gap={3}>
          <TextField name="name" placeholder="Name" />
          <TextField name="email" placeholder="Email" />
          <GridItem colSpan={2}>
            <SimpleGrid columns={3} gap={4}>
              <SelectField
                name="sex"
                placeholder="Sex"
                options={genderOptions}
              />
              <SelectField
                name="designation"
                placeholder="Designation"
                options={designationOptions}
              />
              <SelectField
                name="project"
                placeholder="Project"
                options={roleOptions}
              />
            </SimpleGrid>
          </GridItem>
          <TextField name="mobile" placeholder="Phone Number" type="number" />
          <TextField name="bank" placeholder="Bank" />
          <TextField name="bankBranch" placeholder="Bank Branch" />
          <SimpleGrid>
            <TextField
              name="bankAccount"
              placeholder="bankAccount"
              type="number"
            />
          </SimpleGrid>
          <TextField
            name="tin"
            placeholder="Tax Identification Number(TIN)"
            type="number"
            autoComplete="off"
          />
          <TextField
            name="nssf"
            placeholder="NSSF"
            type="number"
            autoComplete="off"
          />
          <TextField name="nextOfKin" placeholder="Next Of Kin" />
          <TextField
            name="nextOfKinMobile"
            placeholder="Next Of Kin Phone Number"
            type="number"
          />
        </SimpleGrid>
        <Flex mt={5}>
          <SubmitButton label="Save" width="20%" />
        </Flex>
      </Box>
    </Formik>
  );
};

export default SettingsForm;
