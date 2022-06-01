import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import MemberTable from "./MemberTable/MemberTable";
import NewMembersForm from "./NewMemberForm/NewMembersForm";
import { useMembers } from "../../../hooks/useMember";

const Members = () => {
  const { data, isLoading } = useMembers();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <SectionHeader title="Members" />
      <MemberTable
        isLoading={isLoading}
        data={data ? data.Members : null}
        btnLabel="Add Member"
        btnClick={onOpen}
        tableName="Members"
      />
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Membership Form"
        size="3xl"
      >
        <NewMembersForm onClose={onClose} />
      </Modal>
    </>
  );
};

export default Members;
