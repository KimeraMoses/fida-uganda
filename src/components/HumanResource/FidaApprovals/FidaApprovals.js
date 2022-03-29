import { useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";
import FidaApprovedTable, {
  ApprovalData,
} from "./FidaApprovalTable/FidaApprovedTable";
import NewEmployeeForm from "./NewEmployeeForm/NewEmployeeForm";

const FidaApprovals = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const userSearchHandler = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    if (searchTerm !== "") {
      const Results = ApprovalData.filter((Result) => {
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
      <FidaApprovedTable data={ApprovalData} searchResults={searchResults} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <NewEmployeeForm onClose={onClose} />
      </Modal>
    </>
  );
};

export default FidaApprovals;
