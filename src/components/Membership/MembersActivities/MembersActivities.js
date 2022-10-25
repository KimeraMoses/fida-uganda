import { useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import NewActivityForm from "./NewActivityForm/NewActivityForm";
import { schema } from "./NewActivityForm/schema";
import { useMembers } from "../../../hooks/useMember";
import {
  useAddActivity,
  useActivities,
} from "../../../hooks/useMembershipActivity";
import { useProjectOptions } from "../../../hooks/useProjects";
import { membersActivitiesColumns } from "../../../lib/tableColumns";
import Table from "../../common/TableComponent/Table";



const MembersActivities = () => {
  const { isOpen, onClose } = useDisclosure();
  const { data: membersData } = useMembers();
  const projectOptions = useProjectOptions();
  const { isLoading, data: membersActivities } = useActivities();
  const newActivityInitialValues = {
    member: "",
    project: "",
    projectActivity: "",
    date_of_activity: "",
    activityDescription: "",
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([]);
    if (membersActivities?.MembershipActivities?.length) {
      const dataToSet = membersActivities?.MembershipActivities?.map((b, index) => {
        return {
          ...b,
          sn:{
            sn:'000'+(index + 1)
          },
          name: {
            id: b?.member[0]?.first_name,
            membership_number: b?.name,
          },
          project: {
            name: b?.project?.name,
            projectActivity: b?.projectActivity,
          },
          date: {
            date: b?.date_of_activity,
            activityDescription: b?.activityDescription
          }
        };
      });
      // console.log('it data', dataToSet)
      setData(dataToSet);
    }
  }, [membersActivities]);
  return (
    <>
      <SectionHeader title="Members Activities" />
      <Table
        loading={isLoading}
        data={data ? data : null}
        btnLabel="Add Activity"
        tableName="Members Activities"
        columns={membersActivitiesColumns}
        hideActions
      />
      {/* <MemberActivitiesTable
        btnLabel="Add Activity"
        btnClick={onOpen}
        data={data ? data.MembershipActivities : null}
        isLoading={isLoading}
        tableName="Member Activity"
      /> */}

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
