import { useState } from "react";
import SectionHeader from "../../common/SectionHeader";
import { useDisclosure } from "@chakra-ui/react";
import Modal from "../../common/Modal";
import CLVTable from "./CLVTable/ClvTable";
import NewClvForm from "./CLVForms/NewClvForm";
import { useClvs, useAddClv } from "../../../hooks/useClv";
import { clvInitialValues, clvSchema } from "./CLVForms/schema";

const CLVs = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, isLoading } = useClvs();

  const [avatar, setAvatar] = useState(null);
  const [url, setImageUrl] = useState("");

  return (
    <>
      <SectionHeader title="CLVs" />
      {data?.clvs && (
        <CLVTable
          isLoading={isLoading}
          data={data ? data.clvs : null}
          btnLabel="Add CLV"
          btnClick={onOpen}
          tableName="CLV"
        />
      )}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <NewClvForm
          action="newClv"
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
        />
      </Modal>
    </>
  );
};

export default CLVs;
