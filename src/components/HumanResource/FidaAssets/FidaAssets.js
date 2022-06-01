import { useDisclosure } from "@chakra-ui/react";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import FidaAssetsTable from "./FidaAssetsTable/FidaAssetsTable";
import NewAsset from "./NewAsset/NewAsset";
import { useAddAsset, useAssets } from "../../../hooks/useAsset";
import { useProjectOptions } from "../../../hooks/useProjects";
import { assetInitialValues } from "./NewAsset/schema";

const FidaAssets = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, isLoading } = useAssets();
  const projectOptions = useProjectOptions();

  return (
    <>
      <SectionHeader title="Assets" />

      {data?.assets && (
        <FidaAssetsTable
          data={data?.assets}
          isLoading={isLoading}
          btnLabel="Add Assets"
          btnClick={onOpen}
          tableName="Fida Assets"
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
