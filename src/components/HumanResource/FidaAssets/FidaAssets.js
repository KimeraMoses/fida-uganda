import { useDisclosure } from "@chakra-ui/react";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import FidaAssetsTable from "./FidaAssetsTable/FidaAssetsTable";
import NewAsset from "./NewAsset/NewAsset";
import { useAddAsset, useAssets } from "../../../hooks/useAsset";
import { useProjectOptions } from "../../../hooks/useProjects";
import { assetInitialValues, assetSchema } from "./NewAsset/schema";
import Loader from "./../../common/UI/Loader/Loader";
import Table from "../../common/TableComponent/Table";
import { fidaAssetsColumns } from "../../../lib/tableColumns";
import { useEffect, useState } from "react";

const FidaAssets = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data:assets, isLoading } = useAssets();
  const projectOptions = useProjectOptions();
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([]);
    if (assets?.assets?.length) {
      const dataToSet = assets?.assets?.map((b) => {
        return {
          ...b,
          date: {
            date: b?.date_delivered
          }
        };
      });
      setData(dataToSet);
    }
  }, [assets]);
  return (
    <>
      <SectionHeader title="Assets" />

      {isLoading ? (
        <Loader />
      ) : (
        data && (
          <Table
          isLoading={isLoading}
          hideActions
          data={data?data : null}
          btnLabel="Add Assets"
          tableName="Fida Assets"
          columns={ fidaAssetsColumns}
        />
          // <FidaAssetsTable
          //   data={data?.assets}
          //   isLoading={isLoading}
          //   btnLabel="Add Assets"
          //   btnClick={onOpen}
          //   tableName="Fida Assets"
          // />
        )
      )}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Asset Entry Form"
        size="3xl"
      >
        <NewAsset
          initialValues={assetInitialValues}
          validationSchema={assetSchema}
          onSuccess={onClose}
          success={`Asset added successfully`}
          useMutate={useAddAsset}
          projectOptions={projectOptions}
        />
      </Modal>
    </>
  );
};

export default FidaAssets;
