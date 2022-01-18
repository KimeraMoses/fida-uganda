import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, useDisclosure } from "@chakra-ui/react";
import GenericModal from "../../common/GenericModal";
import SectionHeader from "../../common/SectionHeader";
import FidaProjectsForm from "../../forms/programs/FidaProjectsForm";
import { getComplaints } from "../../../store/reducers/clv";
import { clvComplaintsColumns } from "../../tables/clvs/complaints";
import Table from "../../common/Table";

function FidaProjects() {
  const dispatch = useDispatch();
  const { complaints } = useSelector((state) => state.clv);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const data = useMemo(() => complaints, [complaints]);
  const columns = useMemo(() => clvComplaintsColumns, []);

  const handleClick = () => {
    onOpen();
  };

  useEffect(() => {
    dispatch(getComplaints());
  }, [dispatch]);

  return (
    <Box>
      <SectionHeader title="FIDA Projects" />
      <Table
        btnLabel="Add Project"
        btnClick={handleClick}
        data={data}
        columns={columns}
      />
      <GenericModal isOpen={isOpen} onClose={onClose}>
        <FidaProjectsForm />
      </GenericModal>
    </Box>
  );
}

export default FidaProjects;
