import { SimpleGrid, Avatar, Flex, Button, useToast } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import TextField from "../../../common/TextField";
import { useEffect } from "react";
import { toastError } from "../../../../lib/toastDetails";

const EmployeeCard = ({
  onClose,
  isSubmitting,
  user,
  onSubmit,
  isError,
  error,
  isReadOnly = true,
}) => {
  const toast = useToast();

  useEffect(() => {
    if (isError) {
      toast(toastError(error));
    }
  });

  return (
    <Formik
      initialValues={{ ...user, project: user.project?.name }}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      <SimpleGrid p={5} as={Form} gap={5}>
        <Flex justifyContent="center">
          <Avatar src={user.img} alt={user.full_name} my={3} />
        </Flex>
        <TextField name="full_name" isReadOnly={isReadOnly} label="Full Name" />
        <TextField name="email" isReadOnly={isReadOnly} label="Email" />
        <TextField name="project" isReadOnly={isReadOnly} label="Project" />
        <TextField
          name="designation"
          isReadOnly={isReadOnly}
          label="Designation"
        />
        <Flex justifyContent="space-around">
          <Button
            type="button"
            onClick={onClose}
            color="black"
            bgColor="white"
            borderWidth="1px"
            borderColor="red.500"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            isLoading={isSubmitting}
            color="black"
            bgColor="white"
            borderWidth="1px"
            borderColor="purple.500"
          >
            Approve
          </Button>
        </Flex>
      </SimpleGrid>
    </Formik>
  );
};

export default EmployeeCard;
