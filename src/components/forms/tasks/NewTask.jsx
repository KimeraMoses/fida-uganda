import { SimpleGrid, useToast } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import TextField from "../../common/TextField";
import TextAreaField from "../../common/TextAreaField";
import MultiUpload from "../../common/MultiUpload";
import { taskInitialValues } from "./schema/tasks";
import { useEffect } from "react";
import { toastError } from "../../../lib/toastDetails";

const NewTask = ({ onSubmit, isSubmitting, isError, error }) => {
  const toast = useToast();

  useEffect(() => {
    if (isError) {
      toast(toastError(error));
    }
  }, [isError, error, toast]);

  return (
    <Formik
      initialValues={taskInitialValues}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      <SimpleGrid as={Form}>
        <TextField name="title" />
        <TextAreaField name="description" />
        <SimpleGrid>
          <TextField name="endDate" />
        </SimpleGrid>
        <MultiUpload />
      </SimpleGrid>
    </Formik>
  );
};

export default NewTask;
