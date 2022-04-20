import { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { SimpleGrid, Flex, useToast, Button } from "@chakra-ui/react";
import TextField from "../../common/TextField";
import SelectField from "../../common/SelectField";
import { designationOptions } from "../../../lib/options";
import { useProjectOptions } from "../../../hooks/useProjects";
import { createEmployeeObject, employeeSchema } from "./schema";
import { toastError } from "../../../lib/toastDetails";
import SelectAvatar from "../../common/SelectAvatar";

const AccountSettingsForm = ({
  initialValues,
  onSubmit,
  isSubmitting,
  isError,
  error,
}) => {
  const toast = useToast();
  const [avatar, setAvatar] = useState(null);
  const [url, setImageUrl] = useState(initialValues.image);
  const projectOptions = useProjectOptions();
  const employeeObject = createEmployeeObject(initialValues);

  useEffect(() => {
    if (isError) {
      toast(toastError(error));
    }
  }, [isError, error, toast]);

  return (
    <Formik
      initialValues={employeeObject}
      validationSchema={employeeSchema}
      onSubmit={(values) => {
        if (!url) {
          toast(toastError("Please select an avatar"));
          return;
        }
        const formData = new FormData();
        Object.keys(values).forEach((key) => {
          formData.append(key, values[key]);
        });
        if (avatar) {
          formData.append("image", avatar);
        }
        onSubmit({ ...values, image: avatar });
      }}
    >
      <Flex flexDir="column" bgColor="white" p={20} borderRadius={10}>
        <Flex as={Form} gap={5} flexDir="column">
          <SelectAvatar
            setAvatar={setAvatar}
            toast={toast}
            alignSelf="center"
            borderRadius="full"
            h={20}
            w={20}
            iconObj={{ size: 24 }}
            url={url}
            setImageUrl={setImageUrl}
          />
          <TextField name="full_name" placeholder="Full Name" />
          <SimpleGrid columns={2} gap={5}>
            <TextField name="email" type="email" placeholder="Email" />
            <SelectField
              name="designation"
              placeholder="Select Designation"
              options={designationOptions}
              size="lg"
            />
          </SimpleGrid>
          <SelectField
            name="project"
            options={projectOptions}
            placeholder="Select Project"
            size="lg"
          />
          <Button type="submit" colorScheme="purple" isLoading={isSubmitting}>
            Update Profile
          </Button>
        </Flex>
      </Flex>
    </Formik>
  );
};

export default AccountSettingsForm;
