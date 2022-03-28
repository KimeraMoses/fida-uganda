import React from "react";
import SectionHeader from "../common/SectionHeader";
import AccountSettingsForm from "../forms/account/AccountSettingsForm";

const AccountSettings = () => {
  return (
    <>
      <SectionHeader title="Account Settings" />
      <AccountSettingsForm />
    </>
  );
};

export default AccountSettings;
