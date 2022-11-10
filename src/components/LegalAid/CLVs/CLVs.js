import {  useState } from "react";
import SectionHeader from "../../common/SectionHeader";
import { useDisclosure } from "@chakra-ui/react";
import Modal from "../../common/Modal";
import NewClvForm from "./CLVForms/NewClvForm";
<<<<<<< HEAD
import {
  useClvs,
  useAddClv,
  useCLVId,
  useEditClv,
} from "../../../hooks/useClv";
=======
import {  useAddClv, useCLVId } from "../../../hooks/useClv";
>>>>>>> 1369ae4e66ed63209e2c7f469db9ef61ce2871e5
import { clvInitialValues, clvSchema } from "./CLVForms/schema";
import Loader from "./../../common/UI/Loader/Loader";
import Table from "../../common/TableComponent/Table";
import { CLVTableColumns } from "../../../lib/tableColumns";
import { useDispatch } from "react-redux";
<<<<<<< HEAD
import { resetCLV, selectCLV } from "../../../store/CLVReducer";
=======
import { selectCLV } from "../../../store/CLVReducer";
import { useCLVData } from "../../../hooks/tableDataHooks/useTableData";
>>>>>>> 1369ae4e66ed63209e2c7f469db9ef61ce2871e5

const CLVs = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const CLV = useCLVId();
  const [avatar, setAvatar] = useState(null);
  const [url, setImageUrl] = useState("");
  const dispatch = useDispatch();
<<<<<<< HEAD
  const [data, setData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
=======
  const { data, isLoading, originalData } = useCLVData();

>>>>>>> 1369ae4e66ed63209e2c7f469db9ef61ce2871e5


  const onOpenModal = () => {
    setIsEdit(false);
    dispatch(resetCLV());
    onOpen();
  };

  const onEditHandler = (CLV) => {
<<<<<<< HEAD
    setIsEdit(true);
    dispatch(selectCLV(clvsData?.clvs?.find((el) => el?.id === CLV?.id)));
=======
    dispatch(selectCLV(originalData?.find((el) => el?.id === CLV?.id)));
>>>>>>> 1369ae4e66ed63209e2c7f469db9ef61ce2871e5
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

  const handleClose = () => {
    setIsEdit(false);
    dispatch(resetCLV());
    onClose();
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
          btnClick={onOpenModal}
          isLoading={isLoading}
          data={data ? data : null}
          btnLabel="Add CLV"
          tableName="CLV"
          columns={CLVTableColumns}
        />
      )}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <NewClvForm
          action={CLV ? "editClv" : "newClv"}
          validationSchema={clvSchema}
          onClose={handleClose}
          initialValues={clvInitialValues}
          useMutate={CLV ? useEditClv : useAddClv}
          onSuccess={handleClose}
          success={CLV ? "CLV updated successfully" : "CLV added successfully"}
          setAvatar={setAvatar}
          setImageUrl={setImageUrl}
          url={url}
          file={avatar}
          fileName="image"
          isFormData={true}
          mutateData={addCLVId}
          mutateInitialValues={mutateInitialValues}
          isEditing={isEdit}
        />
      </Modal>
    </>
  );
};

export default CLVs;
