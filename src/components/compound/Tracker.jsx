import React from "react";
import SectionHeader from "../common/SectionHeader";
import LeaveTracker from './LeaveTracker';
import AdvanceTracker from './AdvanceTracker';

const Tracker = () => {
  return (
    <>
      <SectionHeader title="Leave Tracker" />
      <LeaveTracker />
      <SectionHeader title="Advance Tracker" />
      <AdvanceTracker />
    </>
  );
};

export default Tracker;
