import { Formik, Form } from "formik";
import React from "react";
import { useToast } from "@chakra-ui/react";
import { toastError, toastSuccess } from "../lib/toastDetails";

const withForm = (FormComponent) => {
  return function WithNewForm({
    isError,
    error,
    isSuccess,
    success,
    onSuccess,
    onSubmit,
    isSubmitting,
    initialValues,
    validationSchema,
    isEditing,
    isFormData,
    file,
    fileName,
    ...rest
  }) {
    const toast = useToast();

    React.useEffect(() => {
      if (isError) {
        toast(toastError(error));
      }
      if (isSuccess) {
        toast(toastSuccess(success));
        onSuccess();
      }
    }, [toast, isError, error, isSuccess, onSuccess, success]);

    return (
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values) => {
          if (isFormData) {
            const formData = new FormData();
            formData.append(fileName, file);
            Object.keys(values).forEach((key) => {
              formData.append(key, values[key]);
            });
            onSubmit(formData);
            return;
          }
          onSubmit(values);
        }}
      >
        {({ values }) => (
          <Form>
            <FormComponent values={values} isEditing={isEditing} {...rest} />
          </Form>
        )}
      </Formik>
    );
  };
};

export default withForm;
