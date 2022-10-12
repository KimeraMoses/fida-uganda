import { useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDeactivatedUsers } from "../../../hooks/useUser";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import SubHeading from "./../../Tasks/SubHeading/SubHeading";
import Loader from "./../../common/UI/Loader/Loader";
import FidaApproved from "./FidaApproved";
import Table from "../../common/TableComponent/Table";
import EmployeeCard from "./NewEmployeeForm/EmployeeCard";
import { approvalTableColumns } from "../../../lib/tableColumns";

const FidaApprovals = () => {
  const { data: approvalData, isLoading } = useDeactivatedUsers();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [user, setUser] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([]);
    if (approvalData?.users?.length) {
      const dataToSet = approvalData?.users?.map((b) => {
        return {
          ...b,
          key: b?.id,
          full_name: b?.full_name ? b.full_name : "N/A",
        };
      });
      setData(dataToSet);
    }
  }, [approvalData]);

  console.log("data", approvalData);

  const onEditHandler = (user) => {
    setUser(user);
    onOpen();
  };

  return (
    <>
      <SectionHeader title="FIDA IIMS approvals" />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <FidaApproved />
          <SubHeading title="Pending Approval" />
          <Table
            data={data}
            columns={approvalTableColumns}
            onEditHandler={onEditHandler}
            showBtn={false}
            loading={isLoading}
            hideSearch
          />
        </>
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <EmployeeCard
          // isSubmitting={isLoading}
          onClose={onClose}
          user={user}
          // onSubmit={mutate}
          // isError={isError}
          // error={error}
        />
      </Modal>
    </>
  );
};

export default FidaApprovals;
