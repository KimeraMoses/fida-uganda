import React from "react";
import { useActivatedUsers } from "../../../hooks/useUser";
import FidaApprovedTable from "./FidaApprovalTable/FidaApprovedTable";
import SubHeading from "./../../Tasks/SubHeading/SubHeading";
import Loader from "./../../common/UI/Loader/Loader";

const FidaApproved = () => {
  const { data, isLoading } = useActivatedUsers();
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        
        <>
          <SubHeading title="Approved Users" />
          {data?.users ? (
            <FidaApprovedTable tableName="Approved users" data={data?.users} />
          ) : null}
        </>
      )}
    </>
  );
};

export default FidaApproved;
