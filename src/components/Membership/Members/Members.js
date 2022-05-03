import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";
import MemberTable from "./MemberTable/MemberTable";
import NewMembersForm from "./NewMemberForm/NewMembersForm";
import { useMembers } from "../../../hooks/useMember";

const Members = () => {
  const { data, isLoading } = useMembers();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <SectionHeader title="Members" />
      <TableSearch btnLabel="Add Member" btnClick={onOpen} />
      <MemberTable isLoading={isLoading} data={data ? data.Members : null} />
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
