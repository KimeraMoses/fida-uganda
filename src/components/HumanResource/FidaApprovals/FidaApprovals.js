import { useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDeactivatedUsers } from "../../../hooks/useUser";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";
import FidaApprovedTable from "./FidaApprovalTable/FidaApprovedTable";
import NewEmployeeForm from "./NewEmployeeForm/NewEmployeeForm";

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
      <p>{JSON.stringify(data?.users)}</p>
      <TableSearch
        btnLabel="Add employee"
        btnClick={onOpen}
        searchTerm={searchTerm}
        onSearchHandler={userSearchHandler}
      />
      {/* {data && data?.users.length > 0 ? (
        <FidaApprovedTable searchResults={searchResults} data={data?.users} />
      ) : null} */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <NewEmployeeForm onClose={onClose} />
      </Modal>
    </>
  );
};

export default FidaApprovals;
