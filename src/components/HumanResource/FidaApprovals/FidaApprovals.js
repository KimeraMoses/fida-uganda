import { useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDeactivatedUsers } from "../../../hooks/useUser";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";
import FidaApprovedTable from "./FidaApprovalTable/FidaApprovedTable";
import NewEmployeeForm from "./NewEmployeeForm/NewEmployeeForm";
import SubHeading from "./../../Tasks/SubHeading/SubHeading";

const FidaApprovals = () => {
  const { data } = useDeactivatedUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const userSearchHandler = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    const { users } = data;
    if (searchTerm !== "" && users) {
      const Results = users.filter((Result) => {
        return Object.values(Result)
          .join(" ")
          .replace(/-/g, " ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(Results);
    }
  };
  useEffect(() => {
    setSearchResults([]);
  }, [searchTerm.length]);

  return (
    <>
      <SectionHeader title="FIDA IIMS approvals" />
      <TableSearch
        btnLabel="Add employee"
        btnClick={onOpen}
        searchTerm={searchTerm}
        onSearchHandler={userSearchHandler}
      />
      <SubHeading title="Approved Users" />
      {data?.users ? (
        <FidaApprovedTable searchResults={searchResults} data={data?.users} />
      ) : null}

      <SubHeading title="Pending Approval" />
      {data?.users ? (
        <FidaApprovedTable searchResults={searchResults} data={data?.users} />
      ) : null}
      <Modal isOpen={isOpen} onClose={onClose}>
        <NewEmployeeForm onClose={onClose} />
      </Modal>
    </>
  );
};

export default FidaApprovals;
