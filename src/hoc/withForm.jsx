import { Formik, Form } from "formik";
import React from "react";
import { useToast } from "@chakra-ui/react";
import { toastError, toastSuccess } from "../lib/toastDetails";

const withForm = (FormComponent) => {
  return function WithNewForm({
    success,
    onSuccess,
    initialValues,
    validationSchema,
    isEditing,
    isFormData,
    file,
    fileName,
    useMutate,
    id,
    isMutable,
    mutateData,
    ...rest
  }) {
    const { mutate, isError, error, isSuccess, isLoading } = useMutate(id);
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
            mutate(formData);
            return;
          }
          if (isMutable) {
            mutate(mutateData(values));
            return;
          }
          mutate(values);
        }}
      >
        {({ values, setFieldValue, resetForm }) => (
          <Form>
            <FormComponent
              values={values}
              isSubmitting={isLoading}
              isEditing={isEditing}
              {...rest}
              setFieldValue={setFieldValue}
              resetForm={resetForm}
              toast={toast}
            />
          </Form>
        )}
      </Formik>
    );
  };
};

export default withForm;
