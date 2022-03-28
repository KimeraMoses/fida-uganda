import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";
import MemberTable from "./MemberTable/MemberTable";
import NewMembersForm from "./NewMemberForm/NewMembersForm";

const Members = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <SectionHeader title="Members" />
      <TableSearch btnLabel="Add Member" btnClick={onOpen} />
      <MemberTable />
      <Modal isOpen={isOpen} onClose={onClose} title="Membership Form">
        <NewMembersForm onClose={onClose} />
      </Modal>
    </>
  );
};

export default Members;
