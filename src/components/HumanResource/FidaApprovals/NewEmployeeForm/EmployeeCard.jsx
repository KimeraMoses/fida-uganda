import React, { useEffect } from "react";
import { SimpleGrid, Avatar, Flex, Button, useToast } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import TextField from "../../../common/TextField";
import { toastError, toastSuccess } from "../../../../lib/toastDetails";
import { useRequestPasswordLink } from "../../../../hooks/useUser";

const EmployeeCard = ({ onClose, user, isReadOnly = true, actionType }) => {
  const toast = useToast();
  // const { mutate, isError, error, isSuccess, isLoading } = useActivateUser();
  const { mutate, isError, error, isSuccess, isLoading } =
    useRequestPasswordLink();

  useEffect(() => {
    if (isError) {
      toast(toastError(error));
    }
    if (isSuccess) {
      toast(toastSuccess("User approved successfuly"));
      onClose();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toast, isError, error, isSuccess]);

  return (
    <Formik
      initialValues={{ ...user, project: user.project?.name }}
      onSubmit={(values) => {
        mutate({ id: values?.id });
      }}
    >
      <SimpleGrid p={5} as={Form} gap={5}>
        <Flex justifyContent="center">
          <Avatar src={user?.image} alt={user.full_name} my={3} />
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
            isLoading={isLoading}
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
