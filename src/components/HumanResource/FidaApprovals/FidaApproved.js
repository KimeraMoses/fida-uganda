import React, { useEffect, useState } from "react";
import {
  useActivatedUsers,
  useRequestPasswordLink,
} from "../../../hooks/useUser";
import SubHeading from "./../../Tasks/SubHeading/SubHeading";
import Loader from "./../../common/UI/Loader/Loader";
import Table from "../../common/TableComponent/Table";
import Modal from "../../common/Modal";
import EmployeeCard from "./NewEmployeeForm/EmployeeCard";
import { useDisclosure } from "@chakra-ui/react";
import { approvalTableColumns } from "../../../lib/tableColumns";

// import CustomTable from ""

const FidaApproved = () => {
  const { data: userData, isLoading } = useActivatedUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isSuccess, isError, error } = useRequestPasswordLink();

  const [data, setData] = useState([]);
  const [user, setUser] = useState({});
  useEffect(() => {
    setData([]);
    if (userData?.users?.length) {
      const dataToSet = userData?.users?.map((b) => {
        return {
          ...b,
          key: b?.id,
          full_name: b?.full_name ? b.full_name : "N/A",
        };
      });
      setData(dataToSet);
    }
  }, [userData]);

  useEffect(() => {
    if (isSuccess) {
      // toast(toastSuccess("User activated successfully"));
      onClose();
    }
  }, [isSuccess, onClose]);

  const onEditHandler = (user) => {
    setUser(user);
    onOpen();
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SubHeading title="Approved Users" />
          <Table
            data={data}
            columns={approvalTableColumns}
            showBtn={false}
            loading={isLoading}
            showActions={true}
            onEditHandler={onEditHandler}
          />
        </>
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <EmployeeCard
          // isSubmitting={isLoading}
          onClose={onClose}
          user={user}
          // onSubmit={mutate}
          isError={isError}
          error={error}
        />
      </Modal>
    </>
  );
};

export default FidaApproved;
