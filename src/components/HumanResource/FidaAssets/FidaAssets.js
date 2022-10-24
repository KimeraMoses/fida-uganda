import {useDisclosure, useToast} from "@chakra-ui/react";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import NewAsset from "./NewAsset/NewAsset";
import { useAddAsset, useAssets } from "../../../hooks/useAsset";
import Loader from "./../../common/UI/Loader/Loader";
import {useEffect, useState} from "react";
import {toastSuccess} from "../../../lib/toastDetails";
import Table from "../../common/TableComponent/Table";
import {fidaAssetsColumns} from "../../../lib/tableColumns";



const FidaAssets = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { data:assetsData, isLoading } = useAssets();
    const [data, setData] = useState([]);

    useEffect(() => {
        setData([]);
        if (assetsData?.assets?.length) {
            const dataToSet = assetsData?.assets?.map((b) => {
                return {
                    ...b,

                };

            });
            setData(dataToSet);
        }
    }, [assetsData]);

    const {mutate, isError,isLoading:loading, error, isSuccess} = useAddAsset();

    const toast = useToast();
    useEffect(() => {
        if (isSuccess) {
            toast(toastSuccess("Asset added successfully"));
            onClose();
        }
    }, [isSuccess, toast, onClose]);

    return (
        <>
            <SectionHeader title="Assets" />

            {isLoading ? (
                <Loader />
            ) : (

                    <Table
                    data={data.slice().reverse()}
                    columns={fidaAssetsColumns}
                    isLoading={isLoading}
                    btnLabel="Add Assets"
                    btnClick={onOpen}
                    tableName="Fida Assets"
                    hideActions={true}
                    />
            )}
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                title="Asset Entry Form"
                size="3xl"
            >
                <NewAsset
                    onSubmit={mutate}
                    isSubmitting={loading}
                    isError={isError}
                    error={error}
                    onClose={onClose}
                     onSucess={onClose}
                    isSuccess={isSuccess}
                />
            </Modal>
        </>
    );
};

export default FidaAssets;
