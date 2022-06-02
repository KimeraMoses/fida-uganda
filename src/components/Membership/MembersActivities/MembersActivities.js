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
        tableName="Member Activity"
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
