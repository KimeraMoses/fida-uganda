import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, useDisclosure, useToast } from "@chakra-ui/react";
import GenericModal from "../../common/GenericModal";
import SectionHeader from "../../common/SectionHeader";
import ClvProfilingForm from "../../forms/clv/ClvProfilingForm";
import { getClvs } from "../../../store/reducers/clv";
import { clvDatabaseColumns } from "../../tables/clvs/database";
import Table from "../../common/Table";

function ClvDatabase() {
  const dispatch = useDispatch();
  const toast = useToast();
  const { clvs, success } = useSelector((state) => state.clv);
  const { user } = useSelector((state) => state.auth);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const data = useMemo(() => clvs, [clvs]);
  const columns = useMemo(() => clvDatabaseColumns, []);

  useEffect(() => {
    dispatch(getClvs());
  }, [dispatch]);

  const handleBtnClick = () => {
    onOpen();
  };

  useEffect(() => {
    if (success) {
      onClose();
      toast({
        title: "Successful",
        description: success,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [success, onClose, toast]);

  return (
    <Box>
      <SectionHeader title="CLV Database" />
      <Table
        data={data}
        columns={columns}
        btnLabel="Add CLV"
        btnClick={handleBtnClick}
        showBtn={user.designation === "clv"}
      />
      <GenericModal isOpen={isOpen} onClose={onClose}>
        <ClvProfilingForm />
      </GenericModal>
    </Box>
  );
}

export default ClvDatabase;
