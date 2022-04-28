import { useDisclosure } from "@chakra-ui/react";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import TableSearch from "../../common/table/TableSearch";
import FidaAssetsTable from "./FidaAssetsTable/FidaAssetsTable";
import NewAsset from "./NewAsset/NewAsset";
import { useAddAsset, useAssets } from "../../../hooks/useAsset";
import { useProjectOptions } from "../../../hooks/useProjects";
import { assetInitialValues } from "./NewAsset/schema";

const FidaAssets = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, isLoading } = useAssets();
  const projectOptions = useProjectOptions();

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
      {data?.assets && (
        <FidaAssetsTable
          data={data?.assets}
          isLoading={isLoading}
          // searchResults={searchResults}
        />
      )}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Asset Entry Form"
        size="3xl"
      >
        <NewAsset
          projectOptions={projectOptions}
          initialValues={assetInitialValues}
          // validationSchema={assetSchema}
          onSuccess={onClose}
          success={`Asset added successfully`}
          useMutate={useAddAsset}
        />
      </Modal>
    </>
  );
};

export default FidaAssets;
