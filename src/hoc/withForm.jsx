import { Formik, Form } from "formik";
import React from "react";

const withForm = (FormComponent) => {
  return function WithNewForm({
    isError,
    error,
    isSuccess,
    success,
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
    React.useEffect(() => {
      if (isError) {
        alert(error);
      }
      if (isSuccess) {
        alert(success);
      }
    }, [isError, error, isSuccess, success]);

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
