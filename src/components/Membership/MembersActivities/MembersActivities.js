import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import MemberActivitiesTable from "./MemberActivitiesTable/MemberActivitiesTable";
import NewActivityForm from "./NewActivityForm/NewActivityForm";
import { schema } from "./NewActivityForm/schema";
import { useMembers } from "../../../hooks/useMember";
import {
  useAddActivity,
  useActivities,
} from "../../../hooks/useMembershipActivity";
import { useProjectOptions } from "../../../hooks/useProjects";

export const MembersData = [
  {
    sn: "001",
    name: "Mutumba Joshep",
    memberNo: "FU/LE/20/064",
    project: "SGBV, Kamuli IDLO",
    projecctActivity: "Training in Management of SGBV cases ",
    date: "02/02/2022",
    activitySummary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim enim ad minim adj ....",
  },
  {
    sn: "002",
    name: "Mutumba Joshep",
    memberNo: "FU/LE/20/064",
    project: "SGBV, Kamuli IDLO",
    projecctActivity: "Training in Management of SGBV cases ",
    date: "02/02/2022",
    activitySummary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim enim ad minim adj ....",
  },
  {
    sn: "003",
    name: "Mutumba Joshep",
    memberNo: "FU/LE/20/064",
    project: "SGBV, Kamuli IDLO",
    projecctActivity: "Training in Management of SGBV cases ",
    date: "02/02/2022",
    activitySummary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim enim ad minim adj ....",
  },
  {
    sn: "004",
    name: "Mutumba Joshep",
    memberNo: "FU/LE/20/064",
    project: "SGBV, Kamuli IDLO",
    projecctActivity: "Training in Management of SGBV cases ",
    date: "02/02/2022",
    activitySummary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim enim ad minim adj ....",
  },
  {
    sn: "005",
    name: "Mutumba Joshep",
    memberNo: "FU/LE/20/064",
    project: "SGBV, Kamuli IDLO",
    projecctActivity: "Training in Management of SGBV cases ",
    date: "02/02/2022",
    activitySummary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim enim ad minim adj ....",
  },
  {
    sn: "006",
    name: "Kimera Moses",
    memberNo: "FU/LE/20/064",
    project: "SGBV, Kamuli IDLO",
    projecctActivity: "Training in Management of SGBV cases ",
    date: "02/02/2022",
    activitySummary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim enim ad minim adj ....",
  },
];

const MembersActivities = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: membersData } = useMembers();
  const projectOptions = useProjectOptions();
  const { isLoading, data } = useActivities();
  const newActivityInitialValues = {
    member: "",
    project: "",
    projectActivity: "",
    date_of_activity: "",
    activityDescription: "",
  };
  return (
    <>
      <SectionHeader title="Members Activities" />
      <MemberActivitiesTable
        btnLabel="Add Activity"
        btnClick={onOpen}
        data={data ? data.MembershipActivities : null}
        isLoading={isLoading}
      />

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="FIDA Members Activities Form"
      >
        <NewActivityForm
          onClose={onClose}
          initialValues={newActivityInitialValues}
          validationSchema={schema}
          onSuccess={onClose}
          success={`Membership Activity added successfully`}
          useMutate={useAddActivity}
          membersData={membersData ? membersData.Members : null}
          projectOptions={projectOptions}
        />
      </Modal>
    </>
  );
};

export default MembersActivities;
