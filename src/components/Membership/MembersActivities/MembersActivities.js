import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";
import MemberActivitiesTable from "./MemberActivitiesTable/MemberActivitiesTable";
import NewActivityForm from "./NewActivityForm/NewActivityForm";
// import { newMembershipActivitySchema } from "./NewActivityForm/schema";
import { useUsers } from "../../../hooks/useUser";
import { useAddActivity } from "../../../hooks/useMembershipActivity";
import { useProjectOptions } from "../../../hooks/useProjects";

const MembersActivities = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const users = useUsers();
  const projectOptions = useProjectOptions();
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
      <TableSearch btnLabel="Add Activity" btnClick={onOpen} />
      <MemberActivitiesTable />
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="FIDA Members Activities Form"
      >
        <NewActivityForm
          onClose={onClose}
          initialValues={newActivityInitialValues}
          // validationSchema={newMembershipActivitySchema}
          onSuccess={onClose}
          success={`Membership Activity added successfully`}
          useMutate={useAddActivity}
          users={users}
          projectOptions={projectOptions}
        />
      </Modal>
    </>
  );
};

export default MembersActivities;
