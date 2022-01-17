import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, useDisclosure } from "@chakra-ui/react";
import GenericModal from "../../common/GenericModal";
import SectionHeader from "../../common/SectionHeader";
import ClvProfilingForm from "../../forms/clv/ClvProfilingForm";
import { getClvs } from "../../../store/reducers/clv";
import { clvDatabaseColumns } from "../../tables/clvs/database";
import Table from "../../common/Table";

function ClvDatabase() {
  const dispatch = useDispatch();
  const { clvs } = useSelector((state) => state.clv);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const data = useMemo(() => clvs, [clvs]);
  const columns = useMemo(() => clvDatabaseColumns, []);

  useEffect(() => {
    dispatch(getClvs());
  }, [dispatch]);

  const handleBtnClick = () => {
    onOpen();
  };

  return (
    <Box>
      <SectionHeader title="CLV Database" />
      <Table
        data={data}
        columns={columns}
        btnLabel="Add CLV"
        btnClick={handleBtnClick}
      />
      <GenericModal isOpen={isOpen} onClose={onClose}>
        <ClvProfilingForm />
      </GenericModal>
    </Box>
  );
}

export default ClvDatabase;
