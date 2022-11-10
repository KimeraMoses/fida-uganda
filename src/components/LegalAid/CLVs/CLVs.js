import {  useState } from "react";
import SectionHeader from "../../common/SectionHeader";
import { useDisclosure } from "@chakra-ui/react";
import Modal from "../../common/Modal";
import NewClvForm from "./CLVForms/NewClvForm";
import {  useAddClv, useCLVId } from "../../../hooks/useClv";
import { clvInitialValues, clvSchema } from "./CLVForms/schema";
import Loader from "./../../common/UI/Loader/Loader";
import Table from "../../common/TableComponent/Table";
import { CLVTableColumns } from "../../../lib/tableColumns";
import { useDispatch } from "react-redux";
import { selectCLV } from "../../../store/CLVReducer";
import { useCLVData } from "../../../hooks/tableDataHooks/useTableData";

const CLVs = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const CLV = useCLVId();
  const [avatar, setAvatar] = useState(null);
  const [url, setImageUrl] = useState("");
  const dispatch = useDispatch();
  const { data, isLoading, originalData } = useCLVData();



  const onEditHandler = (CLV) => {
    dispatch(selectCLV(originalData?.find((el) => el?.id === CLV?.id)));
    onOpen();
  };

  const addCLVId = (values) => {
    dispatch(selectCLV(values));
    return { ...values, id: CLVs?.id };
  };

  const mutateInitialValues = (initialValues) => {
    if (CLV) {
      let { registeredBy, ...newValues } = CLV;
      return { ...initialValues, ...newValues };
    }
    return initialValues;
  };

  return (
    <>
      <SectionHeader title="CLVs" />
      {isLoading ? (
        <Loader />
      ) : (
        <Table
          onEditHandler={onEditHandler}
          onViewHandle={onOpen}
          btnClick={onOpen}
          isLoading={isLoading}
          data={data ? data : null}
          btnLabel="Add CLV"
          tableName="CLV"
          columns={CLVTableColumns}
        />
        // <CLVTable
        //   isLoading={isLoading}
        //   data={data ? data.clvs : null}
        //   btnLabel="Add CLV"
        //   btnClick={onOpen}
        //   tableName="CLV"
        // />
      )}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <NewClvForm
          action={CLV ? "editClv" : "newClv"}
          validationSchema={clvSchema}
          onClose={onClose}
          initialValues={clvInitialValues}
          useMutate={useAddClv}
          onSuccess={onClose}
          success={"CLV added successfully"}
          setAvatar={setAvatar}
          setImageUrl={setImageUrl}
          url={url}
          file={avatar}
          fileName="image"
          isFormData={true}
          mutateData={addCLVId}
          mutateInitialValues={mutateInitialValues}
        />
      </Modal>
    </>
  );
};

export default CLVs;
