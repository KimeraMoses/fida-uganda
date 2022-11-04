import React, { useEffect, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import NewMembersForm from "./NewMemberForm/NewMembersForm";
import { useMembers } from "../../../hooks/useMember";
import Table from "../../common/TableComponent/Table";
import { membersTableColumns } from "../../../lib/tableColumns";
import { useDispatch } from "react-redux";
import { selectMember } from "../../../store/memberReducer";

const Members = () => {
  const { data: membersData, isLoading } = useMembers();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  useEffect(() => {
    setData([]);
    if (membersData?.Members?.length) {
      const dataToSet = membersData?.Members?.map((b, idx) => {
        return {
          ...b,
          name: {
            name: b?.first_name + " " + b?.last_name,
            membership_no: b?.membership_no
              ? b?.membership_no
              : `FDA00${idx + 1}`,
          },
          contacts: {
            phone: b?.phoneNumber,
            email: b?.email,
          },
          membership: {
            duration: b?.membership_duration,
            feeStatus: b?.hasPaid,
          },
        };
      });
      setData(dataToSet);
    }
  }, [membersData]);

  const onEditHandler = (member) => {
    dispatch(
      selectMember(membersData?.Members?.find((el) => el?.id === member?.id))
    );
    onOpen();
  };

  return (
    <>
      <SectionHeader title="Members" />
      <Table
        loading={isLoading}
        data={data ? data : null}
        btnLabel="Add Member"
        tableName="Members"
        columns={membersTableColumns}
        onEditHandler={onEditHandler}
      />
      {/* <MemberTable
        isLoading={isLoading}
        data={data ? data.Members : null}
        btnLabel="Add Member"
        btnClick={onOpenModal}
        tableName="Members"
      /> */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Membership Form"
        size="3xl"
      >
        <NewMembersForm onClose={onClose} isNew={true} />
      </Modal>
    </>
  );
};

export default Members;
