import { useDisclosure, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";
import FidaAssetsTable from "./FidaAssetsTable/FidaAssetsTable";
import NewAsset from "./NewAsset/NewAsset";
import { useAddAsset, useAssets } from "../../../hooks/useAsset";
import { toastSuccess } from "../../../lib/toastDetails";
import { useProjectOptions } from "../../../hooks/useProjects";

const FidaAssets = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const { data } = useAssets();
  const { mutate, isLoading, isError, isSuccess, error } = useAddAsset();
  const projectOptions = useProjectOptions();

  useEffect(() => {
    if (isSuccess) {
      toast(toastSuccess("Asset added successfully"));
      onClose();
    }
  }, [isSuccess, toast, onClose]);
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

  return (
    <>
      <SectionHeader title="Assets" />
      <TableSearch
        btnLabel="Add Assets"
        btnClick={onOpen}
        // searchTerm={searchTerm}
        // onSearchHandler={userSearchHandler}
      />
      {data && data.assets.length > 0 ? (
        <FidaAssetsTable
          data={data?.assets}
          // searchResults={searchResults}
        />
      ) : null}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Asset Entry Form"
        size="3xl"
      >
        <NewAsset
          onSubmit={mutate}
          isError={isError}
          error={error}
          isSubmitting={isLoading}
          projectOptions={projectOptions}
        />
      </Modal>
    </>
  );
};

export default FidaAssets;
