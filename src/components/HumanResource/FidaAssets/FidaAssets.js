import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";
import FidaAssetsTable from "./FidaAssetsTable/FidaAssetsTable";
import NewAsset from "./NewAsset/NewAsset";
import { useAssets } from "../../../hooks/useAsset";

const FidaAssets = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data } = useAssets();
  // const [searchTerm, setSearchTerm] = useState("");
  // const [searchResults, setSearchResults] = useState([]);

  // const userSearchHandler = (e) => {
  //   const { value } = e.target;
  //   setSearchTerm(value);
  //   if (searchTerm !== "") {
  //     const Results = data.filter((Result) => {
  //       return Object.values(Result)
  //         .join(" ")
  //         .replace(/-/g, " ")
  //         .toLowerCase()
  //         .includes(searchTerm.toLowerCase());
  //     });
  //     setSearchResults(Results);
  //   }
  // };

  // useEffect(() => {
  //   setSearchResults([]);
  // }, [searchTerm.length]);
  console.log(data.assets);

  return (
    <>
      <SectionHeader title="Assets" />
      <TableSearch
        btnLabel="Add Notes"
        btnClick={onOpen}
        // searchTerm={searchTerm}
        // onSearchHandler={userSearchHandler}
      />
      {data && data.assets.length > 0 ? (
        <FidaAssetsTable
          data={data.assets}
          // searchResults={searchResults}
        />
      ) : null}
      <Modal isOpen={isOpen} onClose={onClose} title="Asset Entry Form">
        <NewAsset />
      </Modal>
    </>
  );
};

export default FidaAssets;
