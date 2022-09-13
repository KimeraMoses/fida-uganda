export const onSubmitAlert = (id) => {
  const mutate = (values) => {
    console.log('data', values);
    alert(JSON.stringify(values, null, 2));
  };
  const isLoading = false;
  const isSuccess = false;
  const isError = false;
  const error = "Error occurred";
  return { mutate, isLoading, isSuccess, isError, error };
};
