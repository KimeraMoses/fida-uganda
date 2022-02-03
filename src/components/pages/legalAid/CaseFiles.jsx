import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, useDisclosure } from "@chakra-ui/react";
import GenericModal from "../../common/GenericModal";
import SectionHeader from "../../common/SectionHeader";
import Table from "../../common/Table";
import { caseFilesColumns } from "../../tables/legalAid/cases";
import { getCases, selectCase } from "../../../store/reducers/cases";
import CaseForm from "../../forms/legalAid/CaseForm";
import {
  getAllCounties,
  getAllDistricts,
} from "../../../store/reducers/registration";

function CaseFiles() {
  const dispatch = useDispatch();
  const { cases } = useSelector((state) => state.cases);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const data = useMemo(() => cases, [cases]);
  const columns = useMemo(() => caseFilesColumns, []);

  const handleBtnClick = () => {
    onOpen();
  };

  const onRowClick = (row) => () => {
    dispatch(selectCase(row.original));
  };

  useEffect(() => {
    dispatch(getCases());
    dispatch(getAllDistricts());
    dispatch(getAllCounties());
  }, [dispatch]);

  return (
    <Box>
      <SectionHeader title="Case Files" />
      <Table
        btnLabel="Add Case"
        btnClick={handleBtnClick}
        data={data}
        columns={columns}
        onRowClick={onRowClick}
      />
      <GenericModal isOpen={isOpen} onClose={onClose}>
        <CaseForm />
      </GenericModal>
    </Box>
  );
}

export default CaseFiles;
