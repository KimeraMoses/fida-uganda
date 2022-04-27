import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";
import MemberActivitiesTable from "./MemberActivitiesTable/MemberActivitiesTable";
import NewActivityForm from "./NewActivityForm/NewActivityForm";
import { newMembershipActivitySchema } from "./NewActivityForm/schema";

const MembersActivities = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const newActivityInitialValues = {};
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
          validationSchema={newMembershipActivitySchema}
          onSuccess={onClose}
          success={`Membership Activity added successfully`}
          useMutate={() => {}}
        />
      </Modal>
    </>
  );
};

export default MembersActivities;
