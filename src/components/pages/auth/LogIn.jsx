import React from "react";
import LogInForm from "../../forms/auth/LogInForm";
import FormHeader from "../../forms/auth/FormHeader";

function LogIn() {
  return (
    <>
      <FormHeader title="Sign In" />
      <LogInForm />
    </>
  );
}

export default LogIn;
