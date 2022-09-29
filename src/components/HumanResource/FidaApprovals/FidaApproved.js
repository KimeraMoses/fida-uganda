import React, { useEffect, useState } from "react";
import { useActivatedUsers } from "../../../hooks/useUser";
import SubHeading from "./../../Tasks/SubHeading/SubHeading";
import Loader from "./../../common/UI/Loader/Loader";
import { formatDate } from "../../../lib/data";
import Table from "../../common/TableComponent/Table";
// import CustomTable from ""
const columns = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Designation",
    accessor: "designation",
  },
  {
    Header: "Project of Attachement",
    accessor: "createdAt",
  },
];

const FidaApproved = () => {
  const { data: userData, isLoading } = useActivatedUsers();
  // Setting data properly
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([]);
    if (userData?.users?.length) {
      const dataToSet = userData?.users?.map((b) => {
        return {
          ...b,
          key: b?.id,
          name: b?.first_name ? `${b?.first_name} ${b?.last_name}` : "N/A",
          createdAt: formatDate(b?.createdAt),
        };
      });
      setData(dataToSet);
    }
  }, [userData]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SubHeading title="Approved Users" />
          <Table data={data} columns={columns} />
        </>
      )}
    </>
  );
};

export default FidaApproved;
